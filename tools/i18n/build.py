#!/usr/bin/env python3
"""Build the other-language copy of every page on liucao.me.

Rule: a page stays where it was written. Chinese pages get an English copy
under en/<path>; English pages get a Chinese copy under zh/<path>.
Only text is translated (text nodes, a few attributes, CJK string literals in
inline scripts, string values in JSON data); markup and code stay as they are.
Every page (source and copy) gets an EN / 中文 switch that remembers the choice.

Translation: Claude Opus 5.5 on Amazon Bedrock. Results are cached in
cache.json, so a rebuild only sends new text.

  python3 tools/i18n/build.py              # translate + write all pages
  python3 tools/i18n/build.py --toggles    # only (re)insert the switch, no model calls
"""
import json, os, re, sys, posixpath, hashlib, concurrent.futures as cf
from bs4 import BeautifulSoup, NavigableString, Comment, Doctype

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
CACHE = os.path.join(os.path.dirname(__file__), 'cache.json')
MODEL = 'jp.anthropic.claude-opus-5-5'
REGION = 'ap-northeast-1'

ZH_PAGES = ['index.html', 'ec2/index.html', 'ec2/graviton/index.html',
    'ec2/graviton/compare/index.html', 'ec2/graviton/monitor/index.html',
    'ec2/graviton/saturation/index.html', 'ec2/graviton/playbook/index.html',
    'ec2/graviton/generations/index.html', 'ec2/numa/index.html', 'ec2/gpu-capacity/index.html', 'aws-gpu/index.html',
    'rsi/index.html', 'rsi/slides/index.html', 'rsi/demo/index.html',
    'rsi/demo/run/index.html', 'rsi/demo/papers/index.html', 'rsi/demo/play/index.html',
    'rsi/demo/talk/index.html', 'rsi/demo/script/index.html', 'rsi/demo/script-v2/index.html',
    'rsi/demo/script-play/index.html', 'rsi/demo/static/play-standalone.html']
EN_PAGES = ['network/index.html', 'network/matrix/index.html',
    'network/s3bench/index.html', 'network/zaz-latency/index.html'] + sorted(
    'aws-gpu/instances/' + f for f in os.listdir(os.path.join(ROOT, 'aws-gpu/instances')) if f.endswith('.html'))
ZH_JSON = ['rsi/demo/static/play-run.json', 'rsi/demo/static/data.json']

CJK = re.compile(r'[㐀-鿿＀-￯　-〿]')
WORDS = re.compile(r'[A-Za-z]*[a-z]{3,}')
SKIP_TAGS = {'script', 'style', 'noscript', 'svg', 'math'}
ATTRS = ['title', 'alt', 'placeholder', 'aria-label', 'data-tip']
# string literal containing CJK inside inline JS ('...', "...", `...`)
JS_STR = re.compile(r'''(?P<q>['"`])(?P<s>(?:\\.|(?!(?P=q)).)*?[㐀-鿿](?:\\.|(?!(?P=q)).)*?)(?P=q)''', re.S)

def js_strings(code):
    """Return (start, end, quote, body) for every string / template literal in JS code.
    Skips // and /* */ comments and regex literals, so text in comments is never touched."""
    out, i, n = [], 0, len(code)
    prev = ''          # last significant char, to tell a regex literal from division
    while i < n:
        c = code[i]
        if c == '/' and i + 1 < n and code[i+1] == '/':
            j = code.find('\n', i); i = n if j < 0 else j; continue
        if c == '/' and i + 1 < n and code[i+1] == '*':
            j = code.find('*/', i + 2); i = n if j < 0 else j + 2; continue
        if c in '\'"':
            j = i + 1
            while j < n and code[j] != c and code[j] != '\n':
                j += 2 if code[j] == '\\' else 1
            if j < n and code[j] == c:
                out.append((i, j + 1, c, code[i+1:j])); i = j + 1; prev = 'a'; continue
            i += 1; continue
        if c == '`':
            j, depth = i + 1, 0
            while j < n:
                if code[j] == '\\': j += 2; continue
                if depth == 0 and code[j] == '`': break
                if code[j:j+2] == '${': depth += 1; j += 2; continue
                if depth and code[j] == '}': depth -= 1
                j += 1
            if j < n:
                out.append((i, j + 1, '`', code[i+1:j])); i = j + 1; prev = 'a'; continue
            i += 1; continue
        if c == '/' and (prev == '' or prev in '(,=:[!&|?{};+-*%<>~^'):
            j, in_cls = i + 1, False
            while j < n and code[j] != '\n':
                if code[j] == '\\': j += 2; continue
                if code[j] == '[': in_cls = True
                elif code[j] == ']': in_cls = False
                elif code[j] == '/' and not in_cls: break
                j += 1
            i = j + 1; prev = 'a'; continue
        if not c.isspace(): prev = c
        i += 1
    return out
def js_cjk_strings(code):
    return [t for t in js_strings(code) if CJK.search(t[3])]
def js_text_strings(code, lang):
    if lang == 'zh': return js_cjk_strings(code)
    out = []
    for t in js_strings(code):
        body = t[3]
        vis = re.sub(r'\$\{[^}]*\}|<[^>]+>', ' ', body).strip()
        if CJK.search(body) or not re.search(r'[A-Za-z]{3,}', vis): continue
        if re.fullmatch(r'[a-z][A-Za-z0-9]*', vis): continue                  # identifiers, camelCase
        if re.match(r'^[#.\[]|^[a-z0-9_-]+(\s+[a-z0-9_-]+)*$', vis): continue  # selectors, class lists
        if re.search(r'^(https?:|/|\.\./)|\.(js|json|html|css)$', vis): continue
        out.append(t)
    return out

def other(lang): return 'en' if lang == 'zh' else 'zh'
PAGES = {p: 'zh' for p in ZH_PAGES}; PAGES.update({p: 'en' for p in EN_PAGES})
def counterpart(p, lang):          # where the other-language copy of p lives
    return ('en/' if lang == 'zh' else 'zh/') + p
def version(p, want):              # path of page p in language want
    return p if PAGES[p] == want else counterpart(p, PAGES[p])

# ---------- model ----------
_cache = json.load(open(CACHE)) if os.path.exists(CACHE) else {}
def ck(direction, s): return direction + ':' + s
def call_model(direction, items):
    import boto3
    c = boto3.client('bedrock-runtime', region_name=REGION)
    src, dst = ('Simplified Chinese', 'English') if direction == 'zh2en' else ('English', 'Simplified Chinese')
    prompt = (f"Translate each item of this JSON array from {src} to {dst} for a technical website "
      "(AWS EC2, Graviton, GPUs, networking, AI agents, recursive self-improvement).\n"
      "Rules: natural, plain, concise; keep product names, instance types, code, commands, file paths, URLs, numbers, units "
      "and acronyms exactly; keep HTML tags/entities, ${...} placeholders, \\n and leading/trailing spaces exactly; "
      "if an item is code or has nothing to translate, return it unchanged; names of Chinese people in pinyin. "
      "Return ONLY a JSON object {\"t\": [...]} with exactly the same number of items, same order.\n\n"
      + json.dumps(items, ensure_ascii=False))
    for attempt in range(3):
        r = c.converse_stream(modelId=MODEL, messages=[{'role': 'user', 'content': [{'text': prompt}]}],
            inferenceConfig={'maxTokens': 100000}, additionalModelRequestFields={'output_config': {'effort': 'high'}})
        out = ''.join(ev['contentBlockDelta']['delta'].get('text', '') for ev in r['stream'] if 'contentBlockDelta' in ev)
        m = re.search(r'\{.*\}', out, re.S)
        try:
            t = json.loads(m.group(0))['t']
            if len(t) == len(items) and all(isinstance(x, str) for x in t): return t
        except Exception: pass
    return None
def translate_all(direction, segs):
    todo = sorted({s for s in segs if ck(direction, s) not in _cache})
    if not todo: return
    batches, cur, size = [], [], 0
    for s in todo:
        if cur and (size + len(s) > 2500 or len(cur) >= 40): batches.append(cur); cur, size = [], 0
        cur.append(s); size += len(s)
    if cur: batches.append(cur)
    print(f'  {direction}: {len(todo)} new segments in {len(batches)} batches', flush=True)
    done = 0
    with cf.ThreadPoolExecutor(6) as ex:
        def run(b):
            t = call_model(direction, b)
            if t is not None or len(b) == 1: return [(b, t)]
            h = len(b) // 2                     # split a failing batch and try the halves
            return run(b[:h]) + run(b[h:])
        for parts in ex.map(run, batches):
            done += 1
            for b, t in parts:
                if t is None: print(f'  ! {len(b)} segment(s) failed, kept original: {b[0][:40]!r}', flush=True); continue
                for s, x in zip(b, t): _cache[ck(direction, s)] = x
            json.dump(_cache, open(CACHE, 'w'), ensure_ascii=False, indent=0, sort_keys=True)
def tr(direction, s): return _cache.get(ck(direction, s), s)

# ---------- extraction ----------
def need(s, lang):
    st = s.strip()
    if not st: return False
    return bool(CJK.search(st)) if lang == 'zh' else (bool(WORDS.search(st)) and not CJK.search(st))
def split_ws(s):
    m = re.match(r'^(\s*)(.*?)(\s*)$', s, re.S); return m.group(1), m.group(2), m.group(3)
def walk(soup, lang, fn_text, fn_attr, fn_script):
    for node in soup.find_all(string=True):
        if isinstance(node, (Comment, Doctype)): continue
        if node.parent and node.parent.name in SKIP_TAGS:
            if node.parent.name == 'script' and not node.parent.get('src') and node.parent.get('type') not in ('application/json', 'application/ld+json'): fn_script(node)
            continue
        if need(str(node), lang): fn_text(node)
    for tag in soup.find_all(True):
        for a in ATTRS + (['content'] if tag.name == 'meta' and tag.get('name') in ('description', 'og:description') else []):
            v = tag.get(a)
            if isinstance(v, str) and need(v, lang): fn_attr(tag, a)
def collect(html, lang):
    segs = []
    soup = BeautifulSoup(html, 'html.parser')
    walk(soup, lang, lambda n: segs.append(split_ws(str(n))[1]), lambda t, a: segs.append(t[a].strip()),
         lambda n: segs.extend(t[3] for t in js_text_strings(str(n), lang)))
    return segs
def json_strings(o, out):
    if isinstance(o, str):
        if CJK.search(o): out.append(o)
    elif isinstance(o, list): [json_strings(x, out) for x in o]
    elif isinstance(o, dict): [json_strings(v, out) for v in o.values()]
def json_apply(o, d):
    if isinstance(o, str): return tr(d, o) if CJK.search(o) else o
    if isinstance(o, list): return [json_apply(x, d) for x in o]
    if isinstance(o, dict): return {k: json_apply(v, d) for k, v in o.items()}
    return o

# ---------- links ----------
URL_ATTR = {'a': 'href', 'link': 'href', 'script': 'src', 'img': 'src', 'source': 'src', 'iframe': 'src', 'form': 'action'}
def resolve(page_dir, link):
    path = link.split('#')[0].split('?')[0]
    t = posixpath.normpath(posixpath.join(page_dir, path)) if path else None
    if t in (None, '.'): t = ''
    return t
def as_page(t):
    if t is None: return None
    for c in (t, (t + '/index.html').lstrip('/'), t.rstrip('/') + '/index.html'):
        c = c.lstrip('./') if c.startswith('./') else c
        if c in PAGES: return c
    if t == '': return 'index.html'
    # a link that already points at a language copy (en/... or zh/...) means that page
    for pre in ('en/', 'zh/'):
        if t.startswith(pre):
            q = as_page(t[len(pre):])
            if q and counterpart(q, PAGES[q]) == version(q, other(PAGES[q])) and version(q, pre[:2]) == (t if t.endswith('.html') else q if PAGES[q] == pre[:2] else counterpart(q, PAGES[q])):
                return q
            if q and pre[:2] != PAGES[q]: return q
    return None
def rewrite_link(link, src_page, out_page, lang_out):
    if not link or re.match(r'^(https?:|mailto:|data:|javascript:|#|//)', link): return link
    sdir, odir = posixpath.dirname(src_page), posixpath.dirname(out_page)
    tail = link[len(link.split('#')[0].split('?')[0]):]
    t = resolve(sdir, link)
    p = as_page(t)
    target = version(p, lang_out) if p else t          # page -> its version in our language, asset -> original
    rel = posixpath.relpath(target or '.', odir or '.')
    if not p and link.split('#')[0].split('?')[0].endswith('/') and not rel.endswith('/'): rel += '/'
    if p and target.endswith('index.html'):
        rel = posixpath.dirname(rel) + '/' if posixpath.dirname(rel) else './'
        if rel == '/': rel = './'
    return rel + tail

# ---------- switch ----------
TOGGLE_CSS = ('position:fixed;right:16px;bottom:16px;z-index:2147483000;padding:6px 12px;border-radius:999px;'
  'background:rgba(20,24,32,.82);color:#fff;font:600 12px/1.2 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;'
  'text-decoration:none;border:1px solid rgba(255,255,255,.25);backdrop-filter:blur(6px)')
def add_toggle(soup, here, alt, lang):
    for old in soup.select('#lang-toggle, #lang-toggle-js'): old.decompose()
    href = posixpath.relpath(alt, posixpath.dirname(here) or '.')
    if href.endswith('index.html'): href = href[:-len('index.html')] or './'
    a = soup.new_tag('a', id='lang-toggle', href=href)
    a['data-to'] = other(lang); a['data-cur'] = lang; a['style'] = TOGGLE_CSS
    a['lang'] = other(lang); a.string = 'English' if lang == 'zh' else '中文'
    s = soup.new_tag('script', id='lang-toggle-js')
    s.string = ("(function(){var a=document.getElementById('lang-toggle');if(!a)return;"
      "a.addEventListener('click',function(){try{localStorage.setItem('lang',a.dataset.to)}catch(e){}});"
      "try{var p=localStorage.getItem('lang');if(p&&p===a.dataset.to)location.replace(a.href)}catch(e){}})();")
    body = soup.body or soup
    body.append(a); body.append(s)

bad_js = []
def js_ok(code):
    import subprocess, tempfile
    if re.search(r'^\s*import\s|^\s*export\s', code, re.M): suffix = '.mjs'
    else: suffix = '.js'
    with tempfile.NamedTemporaryFile('w', suffix=suffix, delete=False, encoding='utf-8') as f: f.write(code)
    r = subprocess.run(['node', '--check', f.name], capture_output=True); os.unlink(f.name)
    if r.returncode != 0 and b'await is only valid' in r.stderr:   # top-level await inside module scripts
        return True
    return r.returncode == 0

def write(path, text):
    full = os.path.join(ROOT, path); os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, 'w', encoding='utf-8').write(text)

def build(toggles_only=False):
    # 1) translate
    if not toggles_only:
        for lang, pages in (('zh', ZH_PAGES), ('en', EN_PAGES)):
            segs = []
            for p in pages: segs += collect(open(os.path.join(ROOT, p), encoding='utf-8').read(), lang)
            if lang == 'zh':
                for j in ZH_JSON: json_strings(json.load(open(os.path.join(ROOT, j), encoding='utf-8')), segs)
            translate_all('zh2en' if lang == 'zh' else 'en2zh', segs)
    # 2) write copies + switches
    for p, lang in PAGES.items():
        d = 'zh2en' if lang == 'zh' else 'en2zh'
        src = open(os.path.join(ROOT, p), encoding='utf-8').read()
        ssoup = BeautifulSoup(src, 'html.parser')
        if ssoup.html: ssoup.html['lang'] = 'zh-CN' if lang == 'zh' else 'en'
        for tag, at in URL_ATTR.items():
            for t in ssoup.find_all(tag):
                if t.get(at): t[at] = rewrite_link(t[at], p, p, lang)
        add_toggle(ssoup, p, counterpart(p, lang), lang)
        write(p, str(ssoup))
        if toggles_only: continue
        out = counterpart(p, lang); lo = other(lang)
        soup = BeautifulSoup(src, 'html.parser')
        def ft(n):
            a, core, b = split_ws(str(n)); t = tr(d, core)
            if lo == 'en' and not a and t[:1].isalnum():
                prev = n.find_previous(string=True)
                pt = str(prev) if prev is not None else ''
                if pt[-1:].isalnum(): a = ' '
            n.replace_with(NavigableString(a + t + b))
        def fa(tag, at): tag[at] = tr(d, tag[at].strip())
        def js_safe(q, x):
            if q in ('"', "'"):
                x = re.sub(r'(?<!\\)' + re.escape(q), '\\' + q, x).replace('\n', '\\n')
            return x
        def tmpl_exprs(x):                      # the ${...} parts of a template literal, braces balanced
            out, i = [], 0
            while True:
                i = x.find('${', i)
                if i < 0: return out
                j, depth = i + 2, 1
                while j < len(x) and depth:
                    depth += (x[j] == '{') - (x[j] == '}'); j += 1
                out.append(x[i:j]); i = j
        def tags(x): return re.findall(r'<[^>]*>', x)
        def js_piece(q, body):
            t = tr(d, body)
            if tags(t) != tags(body): return body
            if q == '`':
                # keep every ${...} and backtick exactly, otherwise keep the original
                def code_only(e):
                    for a2, b2, q2, _ in reversed(js_strings(e)): e = e[:a2] + q2 + q2 + e[b2:]
                    return e
                if t.count('`') != body.count('`') or [code_only(e) for e in tmpl_exprs(t)] != [code_only(e) for e in tmpl_exprs(body)]: return body
                return t
            return js_safe(q, t)
        def fs(n):
            orig = str(n)
            new = orig
            for a, b, q, body in reversed(js_text_strings(orig, lang)):
                new = new[:a] + q + js_piece(q, body) + q + new[b:]
            if new != orig and not js_ok(new): new = orig; bad_js.append(out)
            n.replace_with(NavigableString(new))
        walk(soup, lang, ft, fa, fs)
        if soup.html: soup.html['lang'] = 'en' if lo == 'en' else 'zh-CN'
        for tag, at in URL_ATTR.items():
            for t in soup.find_all(tag):
                if t.get(at): t[at] = rewrite_link(t[at], p, out, lo)
        for s in soup.find_all('script'):
            if s.string and 'fetch(' in s.string:
                s.string.replace_with(re.sub(r'''fetch\((['"])([^'"]+)\1''', lambda m: 'fetch(' + m.group(1) + rewrite_link(m.group(2), p, out, lo) + m.group(1), s.string))
        add_toggle(soup, out, p, lo)
        write(out, str(soup))
    if not toggles_only:
        for j in ZH_JSON:
            o = json.load(open(os.path.join(ROOT, j), encoding='utf-8'))
            write('en/' + j, json.dumps(json_apply(o, 'zh2en'), ensure_ascii=False))
    if bad_js: print('  scripts kept untranslated (syntax check failed):', sorted(set(bad_js)))
    print('pages:', len(PAGES), 'copies:', 0 if toggles_only else len(PAGES), 'json:', 0 if toggles_only else len(ZH_JSON))

if __name__ == '__main__':
    build(toggles_only='--toggles' in sys.argv)
