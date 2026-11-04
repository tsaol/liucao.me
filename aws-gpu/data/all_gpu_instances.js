// Auto-generated from instances.vantage.sh data
// Last updated: 2026-08-26
// Total GPU instances: 99

const allGPUInstances = [
  {
    "name": "dl1.24xlarge",
    "apiName": "dl1.24xlarge",
    "gpu": "Habana Gaudi",
    "gpuCount": 8,
    "gpuMemory": "32 GB HBM2e",
    "vcpu": 96,
    "memory": "768 GB",
    "network": "400 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "us-east-1": {
        "onDemand": 13.10904,
        "reserved": 8.2587
      },
      "us-west-2": {
        "onDemand": 13.10904,
        "reserved": 8.2587
      }
    },
    "availability": [
      "us-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "dl2q.24xlarge",
    "apiName": "dl2q.24xlarge",
    "gpu": "Qualcomm AI 100",
    "gpuCount": 8,
    "gpuMemory": "128 GB",
    "vcpu": 96,
    "memory": "768 GB",
    "network": "100 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "eu-central-1": {
        "onDemand": 11.5952,
        "reserved": 7.305
      },
      "us-west-2": {
        "onDemand": 8.9194,
        "reserved": 5.6192
      }
    },
    "availability": [
      "eu-central-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "g2.2xlarge",
    "apiName": "g2.2xlarge",
    "gpu": "NVIDIA GRID K520",
    "gpuCount": 1,
    "gpuMemory": "4 GB GDDR5",
    "vcpu": 8,
    "memory": "15 GB",
    "network": "Moderate",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 0.898
      },
      "ap-northeast-2": {
        "onDemand": 0.898
      },
      "ap-southeast-1": {
        "onDemand": 1.0
      },
      "ap-southeast-2": {
        "onDemand": 0.898
      },
      "eu-central-1": {
        "onDemand": 0.772
      },
      "eu-west-1": {
        "onDemand": 0.702
      },
      "us-east-1": {
        "onDemand": 0.65
      },
      "us-west-1": {
        "onDemand": 0.702
      },
      "us-west-2": {
        "onDemand": 0.65
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "previous",
    "family": "GPU instance"
  },
  {
    "name": "g2.8xlarge",
    "apiName": "g2.8xlarge",
    "gpu": "NVIDIA GRID K520",
    "gpuCount": 4,
    "gpuMemory": "4 GB GDDR5",
    "vcpu": 32,
    "memory": "60 GB",
    "network": "High",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 3.592
      },
      "ap-northeast-2": {
        "onDemand": 3.592
      },
      "ap-southeast-1": {
        "onDemand": 4.0
      },
      "ap-southeast-2": {
        "onDemand": 3.592
      },
      "eu-central-1": {
        "onDemand": 3.088
      },
      "eu-west-1": {
        "onDemand": 2.808
      },
      "us-east-1": {
        "onDemand": 2.6
      },
      "us-west-1": {
        "onDemand": 2.808
      },
      "us-west-2": {
        "onDemand": 2.6
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "previous",
    "family": "GPU instance"
  },
  {
    "name": "g3.16xlarge",
    "apiName": "g3.16xlarge",
    "gpu": "NVIDIA M60",
    "gpuCount": 4,
    "gpuMemory": "8 GB GDDR5",
    "vcpu": 64,
    "memory": "488 GB",
    "network": "20 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 6.32
      },
      "ap-northeast-2": {
        "onDemand": 5.68
      },
      "ap-southeast-1": {
        "onDemand": 6.68
      },
      "ap-southeast-2": {
        "onDemand": 7.016
      },
      "ca-central-1": {
        "onDemand": 5.664
      },
      "eu-central-1": {
        "onDemand": 5.7
      },
      "eu-west-1": {
        "onDemand": 4.84
      },
      "eu-west-2": {
        "onDemand": 5.716
      },
      "us-east-1": {
        "onDemand": 4.56
      },
      "us-east-2": {
        "onDemand": 4.56
      },
      "us-gov-west-1": {
        "onDemand": 5.28
      },
      "us-west-1": {
        "onDemand": 6.136
      },
      "us-west-2": {
        "onDemand": 4.56
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g3.4xlarge",
    "apiName": "g3.4xlarge",
    "gpu": "NVIDIA M60",
    "gpuCount": 1,
    "gpuMemory": "8 GB GDDR5",
    "vcpu": 16,
    "memory": "122 GB",
    "network": "Up to 10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.58
      },
      "ap-northeast-2": {
        "onDemand": 1.42
      },
      "ap-southeast-1": {
        "onDemand": 1.67
      },
      "ap-southeast-2": {
        "onDemand": 1.754
      },
      "ca-central-1": {
        "onDemand": 1.416
      },
      "eu-central-1": {
        "onDemand": 1.425
      },
      "eu-west-1": {
        "onDemand": 1.21
      },
      "eu-west-2": {
        "onDemand": 1.429
      },
      "us-east-1": {
        "onDemand": 1.14
      },
      "us-east-2": {
        "onDemand": 1.14
      },
      "us-gov-west-1": {
        "onDemand": 1.32
      },
      "us-west-1": {
        "onDemand": 1.534
      },
      "us-west-2": {
        "onDemand": 1.14
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g3.8xlarge",
    "apiName": "g3.8xlarge",
    "gpu": "NVIDIA M60",
    "gpuCount": 2,
    "gpuMemory": "8 GB GDDR5",
    "vcpu": 32,
    "memory": "244 GB",
    "network": "10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 3.16
      },
      "ap-northeast-2": {
        "onDemand": 2.84
      },
      "ap-southeast-1": {
        "onDemand": 3.34
      },
      "ap-southeast-2": {
        "onDemand": 3.508
      },
      "ca-central-1": {
        "onDemand": 2.832
      },
      "eu-central-1": {
        "onDemand": 2.85
      },
      "eu-west-1": {
        "onDemand": 2.42
      },
      "eu-west-2": {
        "onDemand": 2.858
      },
      "us-east-1": {
        "onDemand": 2.28
      },
      "us-east-2": {
        "onDemand": 2.28
      },
      "us-gov-west-1": {
        "onDemand": 2.64
      },
      "us-west-1": {
        "onDemand": 3.068
      },
      "us-west-2": {
        "onDemand": 2.28
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g3s.xlarge",
    "apiName": "g3s.xlarge",
    "gpu": "NVIDIA M60",
    "gpuCount": 1,
    "gpuMemory": "8 GB GDDR5",
    "vcpu": 4,
    "memory": "30.5 GB",
    "network": "10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.04
      },
      "ap-northeast-2": {
        "onDemand": 0.934
      },
      "ap-southeast-2": {
        "onDemand": 1.154
      },
      "eu-central-1": {
        "onDemand": 0.938
      },
      "eu-west-1": {
        "onDemand": 0.796
      },
      "eu-west-2": {
        "onDemand": 0.94
      },
      "us-east-1": {
        "onDemand": 0.75
      },
      "us-east-2": {
        "onDemand": 0.75
      },
      "us-gov-west-1": {
        "onDemand": 0.868
      },
      "us-west-2": {
        "onDemand": 0.75
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4ad.16xlarge",
    "apiName": "g4ad.16xlarge",
    "gpu": "AMD Radeon Pro V520",
    "gpuCount": 4,
    "gpuMemory": "8 GB GDDR6",
    "vcpu": 64,
    "memory": "256 GB",
    "network": "25 Gigabit",
    "storage": "1200 GB (2 × 600 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 4.68,
        "reserved": 3.1943
      },
      "ca-central-1": {
        "onDemand": 3.872,
        "reserved": 2.44001
      },
      "eu-central-1": {
        "onDemand": 4.336,
        "reserved": 2.95905
      },
      "eu-west-1": {
        "onDemand": 3.872,
        "reserved": 2.63817
      },
      "eu-west-2": {
        "onDemand": 4.056,
        "reserved": 2.76796
      },
      "us-east-1": {
        "onDemand": 3.468,
        "reserved": 2.18484
      },
      "us-east-2": {
        "onDemand": 3.468,
        "reserved": 2.18484
      },
      "us-west-2": {
        "onDemand": 3.468,
        "reserved": 2.18484
      }
    },
    "availability": [
      "ap-northeast-1",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4ad.2xlarge",
    "apiName": "g4ad.2xlarge",
    "gpu": "AMD Radeon Pro V520",
    "gpuCount": 1,
    "gpuMemory": "8 GB GDDR6",
    "vcpu": 8,
    "memory": "32 GB",
    "network": "Up to 10 Gigabit",
    "storage": "300 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 0.7303,
        "reserved": 0.49846
      },
      "ca-central-1": {
        "onDemand": 0.60421,
        "reserved": 0.38075
      },
      "eu-central-1": {
        "onDemand": 0.67662,
        "reserved": 0.46175
      },
      "eu-west-1": {
        "onDemand": 0.60421,
        "reserved": 0.41168
      },
      "eu-west-2": {
        "onDemand": 0.63292,
        "reserved": 0.43193
      },
      "us-east-1": {
        "onDemand": 0.54117,
        "reserved": 0.34094
      },
      "us-east-2": {
        "onDemand": 0.54117,
        "reserved": 0.34094
      },
      "us-west-2": {
        "onDemand": 0.54117,
        "reserved": 0.34094
      }
    },
    "availability": [
      "ap-northeast-1",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4ad.4xlarge",
    "apiName": "g4ad.4xlarge",
    "gpu": "AMD Radeon Pro V520",
    "gpuCount": 1,
    "gpuMemory": "8 GB GDDR6",
    "vcpu": 16,
    "memory": "64 GB",
    "network": "Up to 10 Gigabit",
    "storage": "600 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.17,
        "reserved": 0.79857
      },
      "ca-central-1": {
        "onDemand": 0.968,
        "reserved": 0.61
      },
      "eu-central-1": {
        "onDemand": 1.084,
        "reserved": 0.73976
      },
      "eu-west-1": {
        "onDemand": 0.968,
        "reserved": 0.65954
      },
      "eu-west-2": {
        "onDemand": 1.014,
        "reserved": 0.69199
      },
      "us-east-1": {
        "onDemand": 0.867,
        "reserved": 0.54621
      },
      "us-east-2": {
        "onDemand": 0.867,
        "reserved": 0.54621
      },
      "us-west-2": {
        "onDemand": 0.867,
        "reserved": 0.54621
      }
    },
    "availability": [
      "ap-northeast-1",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4ad.8xlarge",
    "apiName": "g4ad.8xlarge",
    "gpu": "AMD Radeon Pro V520",
    "gpuCount": 2,
    "gpuMemory": "8 GB GDDR6",
    "vcpu": 32,
    "memory": "128 GB",
    "network": "15 Gigabit",
    "storage": "1200 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 2.34,
        "reserved": 1.59715
      },
      "ca-central-1": {
        "onDemand": 1.936,
        "reserved": 1.22001
      },
      "eu-central-1": {
        "onDemand": 2.168,
        "reserved": 1.47952
      },
      "eu-west-1": {
        "onDemand": 1.936,
        "reserved": 1.31908
      },
      "eu-west-2": {
        "onDemand": 2.028,
        "reserved": 1.38398
      },
      "us-east-1": {
        "onDemand": 1.734,
        "reserved": 1.09242
      },
      "us-east-2": {
        "onDemand": 1.734,
        "reserved": 1.09242
      },
      "us-west-2": {
        "onDemand": 1.734,
        "reserved": 1.09242
      }
    },
    "availability": [
      "ap-northeast-1",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4ad.xlarge",
    "apiName": "g4ad.xlarge",
    "gpu": "AMD Radeon Pro V520",
    "gpuCount": 1,
    "gpuMemory": "8 GB GDDR6",
    "vcpu": 4,
    "memory": "16 GB",
    "network": "Up to 10 Gigabit",
    "storage": "150 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 0.51082,
        "reserved": 0.34866
      },
      "ca-central-1": {
        "onDemand": 0.42263,
        "reserved": 0.26633
      },
      "eu-central-1": {
        "onDemand": 0.47327,
        "reserved": 0.32298
      },
      "eu-west-1": {
        "onDemand": 0.42263,
        "reserved": 0.28795
      },
      "eu-west-2": {
        "onDemand": 0.44271,
        "reserved": 0.30212
      },
      "us-east-1": {
        "onDemand": 0.37853,
        "reserved": 0.23847
      },
      "us-east-2": {
        "onDemand": 0.37853,
        "reserved": 0.23847
      },
      "us-west-2": {
        "onDemand": 0.37853,
        "reserved": 0.23847
      }
    },
    "availability": [
      "ap-northeast-1",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4dn.12xlarge",
    "apiName": "g4dn.12xlarge",
    "gpu": "NVIDIA T4",
    "gpuCount": 4,
    "gpuMemory": "16 GB GDDR6",
    "vcpu": 48,
    "memory": "192 GB",
    "network": "50 Gigabit",
    "storage": "900 GB SSD",
    "pricing": {
      "af-south-1": {
        "onDemand": 5.19,
        "reserved": 3.542
      },
      "ap-east-1": {
        "onDemand": 6.024,
        "reserved": 3.795
      },
      "ap-northeast-1": {
        "onDemand": 5.281,
        "reserved": 3.604
      },
      "ap-northeast-2": {
        "onDemand": 4.812,
        "reserved": 3.026
      },
      "ap-northeast-3": {
        "onDemand": 5.281,
        "reserved": 3.604
      },
      "ap-south-1": {
        "onDemand": 4.306,
        "reserved": 2.713
      },
      "ap-southeast-1": {
        "onDemand": 5.474,
        "reserved": 3.449
      },
      "ap-southeast-2": {
        "onDemand": 5.087,
        "reserved": 3.205
      },
      "ca-central-1": {
        "onDemand": 4.343,
        "reserved": 2.736
      },
      "eu-central-1": {
        "onDemand": 4.89,
        "reserved": 3.337
      },
      "eu-north-1": {
        "onDemand": 4.15,
        "reserved": 2.614
      },
      "eu-south-1": {
        "onDemand": 4.58,
        "reserved": 3.126
      },
      "eu-west-1": {
        "onDemand": 4.362,
        "reserved": 2.977
      },
      "eu-west-2": {
        "onDemand": 4.577,
        "reserved": 3.124
      },
      "eu-west-3": {
        "onDemand": 4.574,
        "reserved": 2.882
      },
      "eu-west-3-wl1-cmn1": {
        "onDemand": 5.234
      },
      "eu-west-3-wl1-dss1": {
        "onDemand": 5.234
      },
      "me-south-1": {
        "onDemand": 4.798,
        "reserved": 3.275
      },
      "sa-east-1": {
        "onDemand": 6.649,
        "reserved": 4.538
      },
      "us-east-1": {
        "onDemand": 3.912,
        "reserved": 2.465
      },
      "us-east-2": {
        "onDemand": 3.912,
        "reserved": 2.465
      },
      "us-gov-east-1": {
        "onDemand": 4.931,
        "reserved": 3.106
      },
      "us-gov-west-1": {
        "onDemand": 4.931,
        "reserved": 3.106
      },
      "us-west-1": {
        "onDemand": 4.694,
        "reserved": 3.303
      },
      "us-west-2": {
        "onDemand": 3.912,
        "reserved": 2.465
      },
      "us-west-2-lax-1": {
        "onDemand": 4.694
      }
    },
    "availability": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "eu-west-3-wl1-cmn1",
      "eu-west-3-wl1-dss1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4dn.16xlarge",
    "apiName": "g4dn.16xlarge",
    "gpu": "NVIDIA T4",
    "gpuCount": 1,
    "gpuMemory": "16 GB GDDR6",
    "vcpu": 64,
    "memory": "256 GB",
    "network": "50 Gigabit",
    "storage": "900 GB SSD",
    "pricing": {
      "af-south-1": {
        "onDemand": 5.774,
        "reserved": 3.941
      },
      "ap-east-1": {
        "onDemand": 6.702,
        "reserved": 4.222
      },
      "ap-northeast-1": {
        "onDemand": 5.875,
        "reserved": 4.01
      },
      "ap-northeast-2": {
        "onDemand": 5.353,
        "reserved": 3.367
      },
      "ap-northeast-3": {
        "onDemand": 5.875,
        "reserved": 4.01
      },
      "ap-south-1": {
        "onDemand": 4.791,
        "reserved": 3.018
      },
      "ap-southeast-1": {
        "onDemand": 6.089,
        "reserved": 3.836
      },
      "ap-southeast-2": {
        "onDemand": 5.659,
        "reserved": 3.565
      },
      "ca-central-1": {
        "onDemand": 4.832,
        "reserved": 3.044
      },
      "eu-central-1": {
        "onDemand": 5.44,
        "reserved": 3.713
      },
      "eu-north-1": {
        "onDemand": 4.617,
        "reserved": 2.909
      },
      "eu-south-1": {
        "onDemand": 5.095,
        "reserved": 3.477
      },
      "eu-west-1": {
        "onDemand": 4.853,
        "reserved": 3.312
      },
      "eu-west-2": {
        "onDemand": 5.092,
        "reserved": 3.475
      },
      "eu-west-3": {
        "onDemand": 5.088,
        "reserved": 3.206
      },
      "me-south-1": {
        "onDemand": 5.338,
        "reserved": 3.643
      },
      "sa-east-1": {
        "onDemand": 7.397,
        "reserved": 5.048
      },
      "us-east-1": {
        "onDemand": 4.352,
        "reserved": 2.742
      },
      "us-east-2": {
        "onDemand": 4.352,
        "reserved": 2.742
      },
      "us-gov-east-1": {
        "onDemand": 5.486,
        "reserved": 3.456
      },
      "us-gov-west-1": {
        "onDemand": 5.486,
        "reserved": 3.456
      },
      "us-west-1": {
        "onDemand": 5.222,
        "reserved": 3.674
      },
      "us-west-2": {
        "onDemand": 4.352,
        "reserved": 2.742
      },
      "us-west-2-lax-1": {
        "onDemand": 5.222
      }
    },
    "availability": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4dn.2xlarge",
    "apiName": "g4dn.2xlarge",
    "gpu": "NVIDIA T4",
    "gpuCount": 1,
    "gpuMemory": "16 GB GDDR6",
    "vcpu": 8,
    "memory": "32 GB",
    "network": "Up to 25 Gigabit",
    "storage": "225 GB SSD",
    "pricing": {
      "af-south-1": {
        "onDemand": 0.998,
        "reserved": 0.681
      },
      "af-south-1-los-1": {
        "onDemand": 1.247
      },
      "ap-east-1": {
        "onDemand": 1.158,
        "reserved": 0.73
      },
      "ap-northeast-1": {
        "onDemand": 1.015,
        "reserved": 0.693
      },
      "ap-northeast-1-tpe-1": {
        "onDemand": 1.371
      },
      "ap-northeast-1-wl1-kix1": {
        "onDemand": 1.777
      },
      "ap-northeast-1-wl1-nrt1": {
        "onDemand": 1.777
      },
      "ap-northeast-2": {
        "onDemand": 0.925,
        "reserved": 0.582
      },
      "ap-northeast-2-wl1-cjj1": {
        "onDemand": 1.249
      },
      "ap-northeast-2-wl1-sel1": {
        "onDemand": 1.249
      },
      "ap-northeast-3": {
        "onDemand": 1.015,
        "reserved": 0.693
      },
      "ap-south-1": {
        "onDemand": 0.828,
        "reserved": 0.521
      },
      "ap-south-1-ccu-1": {
        "onDemand": 1.2
      },
      "ap-south-1-del-1": {
        "onDemand": 1.2
      },
      "ap-southeast-1": {
        "onDemand": 1.052,
        "reserved": 0.663
      },
      "ap-southeast-1-bkk-1": {
        "onDemand": 1.578
      },
      "ap-southeast-1-mnl-1": {
        "onDemand": 1.368
      },
      "ap-southeast-2": {
        "onDemand": 0.978,
        "reserved": 0.616
      },
      "ap-southeast-2-akl-1": {
        "onDemand": 1.418
      },
      "ap-southeast-2-per-1": {
        "onDemand": 1.418
      },
      "ca-central-1": {
        "onDemand": 0.835,
        "reserved": 0.526
      },
      "ca-central-1-wl1-yto1": {
        "onDemand": 1.252
      },
      "eu-central-1": {
        "onDemand": 0.94,
        "reserved": 0.642
      },
      "eu-central-1-ham-1": {
        "onDemand": 1.363
      },
      "eu-central-1-waw-1": {
        "onDemand": 1.175
      },
      "eu-central-1-wl1-ber1": {
        "onDemand": 1.222
      },
      "eu-central-1-wl1-dtm1": {
        "onDemand": 1.222
      },
      "eu-central-1-wl1-muc1": {
        "onDemand": 1.222
      },
      "eu-north-1": {
        "onDemand": 0.798,
        "reserved": 0.503
      },
      "eu-north-1-cph-1": {
        "onDemand": 1.157
      },
      "eu-north-1-hel-1": {
        "onDemand": 0.997
      },
      "eu-south-1": {
        "onDemand": 0.88,
        "reserved": 0.601
      },
      "eu-west-1": {
        "onDemand": 0.838,
        "reserved": 0.572
      },
      "eu-west-2": {
        "onDemand": 0.88,
        "reserved": 0.6
      },
      "eu-west-2-wl1-lon1": {
        "onDemand": 1.144
      },
      "eu-west-2-wl1-man1": {
        "onDemand": 1.144
      },
      "eu-west-2-wl2-man1": {
        "onDemand": 1.144
      },
      "eu-west-3": {
        "onDemand": 0.879,
        "reserved": 0.554
      },
      "eu-west-3-wl1-cmn1": {
        "onDemand": 1.006
      },
      "eu-west-3-wl1-dss1": {
        "onDemand": 1.006
      },
      "me-south-1": {
        "onDemand": 0.922,
        "reserved": 0.629
      },
      "me-south-1-mct-1": {
        "onDemand": 1.153
      },
      "sa-east-1": {
        "onDemand": 1.278,
        "reserved": 0.872
      },
      "us-east-1": {
        "onDemand": 0.752,
        "reserved": 0.474
      },
      "us-east-1-atl-1": {
        "onDemand": 1.015
      },
      "us-east-1-bos-1": {
        "onDemand": 1.015
      },
      "us-east-1-chi-1": {
        "onDemand": 1.015
      },
      "us-east-1-dfw-1": {
        "onDemand": 1.015
      },
      "us-east-1-iah-1": {
        "onDemand": 1.015
      },
      "us-east-1-lim-1": {
        "onDemand": 1.725
      },
      "us-east-1-mci-1": {
        "onDemand": 1.015
      },
      "us-east-1-mia-1": {
        "onDemand": 1.015
      },
      "us-east-1-msp-1": {
        "onDemand": 1.015
      },
      "us-east-1-nyc-1": {
        "onDemand": 1.015
      },
      "us-east-1-phl-1": {
        "onDemand": 1.015
      },
      "us-east-1-qro-1": {
        "onDemand": 1.09
      },
      "us-east-1-scl-1": {
        "onDemand": 1.47
      },
      "us-east-1-wl1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-atl1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-bna1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-chi1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-clt1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-dfw1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-dtw1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-iah1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-mia1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-msp1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-nyc1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-tpa1": {
        "onDemand": 1.317
      },
      "us-east-1-wl1-was1": {
        "onDemand": 1.317
      },
      "us-east-2": {
        "onDemand": 0.752,
        "reserved": 0.474
      },
      "us-gov-east-1": {
        "onDemand": 0.948,
        "reserved": 0.597
      },
      "us-gov-west-1": {
        "onDemand": 0.948,
        "reserved": 0.597
      },
      "us-west-1": {
        "onDemand": 0.902,
        "reserved": 0.635
      },
      "us-west-2": {
        "onDemand": 0.752,
        "reserved": 0.474
      },
      "us-west-2-den-1": {
        "onDemand": 1.015
      },
      "us-west-2-hnl-1": {
        "onDemand": 1.241
      },
      "us-west-2-las-1": {
        "onDemand": 1.015
      },
      "us-west-2-lax-1": {
        "onDemand": 0.902
      },
      "us-west-2-pdx-1": {
        "onDemand": 1.015
      },
      "us-west-2-phx-1": {
        "onDemand": 1.015
      },
      "us-west-2-sea-1": {
        "onDemand": 1.015
      },
      "us-west-2-wl1": {
        "onDemand": 1.317
      },
      "us-west-2-wl1-den1": {
        "onDemand": 1.317
      },
      "us-west-2-wl1-las1": {
        "onDemand": 1.317
      },
      "us-west-2-wl1-lax1": {
        "onDemand": 1.317
      },
      "us-west-2-wl1-phx1": {
        "onDemand": 1.317
      },
      "us-west-2-wl1-sea1": {
        "onDemand": 1.317
      }
    },
    "availability": [
      "af-south-1",
      "af-south-1-los-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-1-tpe-1",
      "ap-northeast-1-wl1-kix1",
      "ap-northeast-1-wl1-nrt1",
      "ap-northeast-2",
      "ap-northeast-2-wl1-cjj1",
      "ap-northeast-2-wl1-sel1",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-1-ccu-1",
      "ap-south-1-del-1",
      "ap-southeast-1",
      "ap-southeast-1-bkk-1",
      "ap-southeast-1-mnl-1",
      "ap-southeast-2",
      "ap-southeast-2-akl-1",
      "ap-southeast-2-per-1",
      "ca-central-1",
      "ca-central-1-wl1-yto1",
      "eu-central-1",
      "eu-central-1-ham-1",
      "eu-central-1-waw-1",
      "eu-central-1-wl1-ber1",
      "eu-central-1-wl1-dtm1",
      "eu-central-1-wl1-muc1",
      "eu-north-1",
      "eu-north-1-cph-1",
      "eu-north-1-hel-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-2-wl1-lon1",
      "eu-west-2-wl1-man1",
      "eu-west-2-wl2-man1",
      "eu-west-3",
      "eu-west-3-wl1-cmn1",
      "eu-west-3-wl1-dss1",
      "me-south-1",
      "me-south-1-mct-1",
      "sa-east-1",
      "us-east-1",
      "us-east-1-atl-1",
      "us-east-1-bos-1",
      "us-east-1-chi-1",
      "us-east-1-dfw-1",
      "us-east-1-iah-1",
      "us-east-1-lim-1",
      "us-east-1-mci-1",
      "us-east-1-mia-1",
      "us-east-1-msp-1",
      "us-east-1-nyc-1",
      "us-east-1-phl-1",
      "us-east-1-qro-1",
      "us-east-1-scl-1",
      "us-east-1-wl1",
      "us-east-1-wl1-atl1",
      "us-east-1-wl1-bna1",
      "us-east-1-wl1-chi1",
      "us-east-1-wl1-clt1",
      "us-east-1-wl1-dfw1",
      "us-east-1-wl1-dtw1",
      "us-east-1-wl1-iah1",
      "us-east-1-wl1-mia1",
      "us-east-1-wl1-msp1",
      "us-east-1-wl1-nyc1",
      "us-east-1-wl1-tpa1",
      "us-east-1-wl1-was1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2",
      "us-west-2-den-1",
      "us-west-2-hnl-1",
      "us-west-2-las-1",
      "us-west-2-lax-1",
      "us-west-2-pdx-1",
      "us-west-2-phx-1",
      "us-west-2-sea-1",
      "us-west-2-wl1",
      "us-west-2-wl1-den1",
      "us-west-2-wl1-las1",
      "us-west-2-wl1-lax1",
      "us-west-2-wl1-phx1",
      "us-west-2-wl1-sea1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4dn.4xlarge",
    "apiName": "g4dn.4xlarge",
    "gpu": "NVIDIA T4",
    "gpuCount": 1,
    "gpuMemory": "16 GB GDDR6",
    "vcpu": 16,
    "memory": "64 GB",
    "network": "Up to 25 Gigabit",
    "storage": "225 GB SSD",
    "pricing": {
      "af-south-1": {
        "onDemand": 1.597,
        "reserved": 1.09
      },
      "ap-east-1": {
        "onDemand": 1.854,
        "reserved": 1.168
      },
      "ap-northeast-1": {
        "onDemand": 1.625,
        "reserved": 1.109
      },
      "ap-northeast-2": {
        "onDemand": 1.481,
        "reserved": 0.931
      },
      "ap-northeast-3": {
        "onDemand": 1.625,
        "reserved": 1.109
      },
      "ap-south-1": {
        "onDemand": 1.325,
        "reserved": 0.835
      },
      "ap-southeast-1": {
        "onDemand": 1.685,
        "reserved": 1.061
      },
      "ap-southeast-2": {
        "onDemand": 1.566,
        "reserved": 0.986
      },
      "ca-central-1": {
        "onDemand": 1.337,
        "reserved": 0.842
      },
      "eu-central-1": {
        "onDemand": 1.505,
        "reserved": 1.027
      },
      "eu-north-1": {
        "onDemand": 1.277,
        "reserved": 0.805
      },
      "eu-south-1": {
        "onDemand": 1.41,
        "reserved": 0.962
      },
      "eu-west-1": {
        "onDemand": 1.342,
        "reserved": 0.916
      },
      "eu-west-2": {
        "onDemand": 1.409,
        "reserved": 0.961
      },
      "eu-west-3": {
        "onDemand": 1.408,
        "reserved": 0.887
      },
      "me-south-1": {
        "onDemand": 1.477,
        "reserved": 1.008
      },
      "sa-east-1": {
        "onDemand": 2.046,
        "reserved": 1.397
      },
      "us-east-1": {
        "onDemand": 1.204,
        "reserved": 0.759
      },
      "us-east-1-bos-1": {
        "onDemand": 1.625
      },
      "us-east-1-chi-1": {
        "onDemand": 1.625
      },
      "us-east-1-dfw-1": {
        "onDemand": 1.625
      },
      "us-east-1-iah-1": {
        "onDemand": 1.625
      },
      "us-east-1-nyc-1": {
        "onDemand": 1.625
      },
      "us-east-1-phl-1": {
        "onDemand": 1.625
      },
      "us-east-1-qro-1": {
        "onDemand": 1.746
      },
      "us-east-2": {
        "onDemand": 1.204,
        "reserved": 0.759
      },
      "us-gov-east-1": {
        "onDemand": 1.518,
        "reserved": 0.956
      },
      "us-gov-west-1": {
        "onDemand": 1.518,
        "reserved": 0.956
      },
      "us-west-1": {
        "onDemand": 1.445,
        "reserved": 1.016
      },
      "us-west-2": {
        "onDemand": 1.204,
        "reserved": 0.759
      },
      "us-west-2-den-1": {
        "onDemand": 1.625
      },
      "us-west-2-hnl-1": {
        "onDemand": 1.987
      },
      "us-west-2-lax-1": {
        "onDemand": 1.445
      },
      "us-west-2-phx-1": {
        "onDemand": 1.625
      }
    },
    "availability": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-1-bos-1",
      "us-east-1-chi-1",
      "us-east-1-dfw-1",
      "us-east-1-iah-1",
      "us-east-1-nyc-1",
      "us-east-1-phl-1",
      "us-east-1-qro-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2",
      "us-west-2-den-1",
      "us-west-2-hnl-1",
      "us-west-2-lax-1",
      "us-west-2-phx-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4dn.8xlarge",
    "apiName": "g4dn.8xlarge",
    "gpu": "NVIDIA T4",
    "gpuCount": 1,
    "gpuMemory": "16 GB GDDR6",
    "vcpu": 32,
    "memory": "128 GB",
    "network": "50 Gigabit",
    "storage": "900 GB SSD",
    "pricing": {
      "af-south-1": {
        "onDemand": 2.887,
        "reserved": 1.97
      },
      "ap-east-1": {
        "onDemand": 3.351,
        "reserved": 2.111
      },
      "ap-northeast-1": {
        "onDemand": 2.938,
        "reserved": 2.005
      },
      "ap-northeast-2": {
        "onDemand": 2.677,
        "reserved": 1.683
      },
      "ap-northeast-3": {
        "onDemand": 2.938,
        "reserved": 2.005
      },
      "ap-south-1": {
        "onDemand": 2.395,
        "reserved": 1.509
      },
      "ap-southeast-1": {
        "onDemand": 3.045,
        "reserved": 1.918
      },
      "ap-southeast-2": {
        "onDemand": 2.83,
        "reserved": 1.783
      },
      "ca-central-1": {
        "onDemand": 2.416,
        "reserved": 1.522
      },
      "eu-central-1": {
        "onDemand": 2.72,
        "reserved": 1.856
      },
      "eu-north-1": {
        "onDemand": 2.308,
        "reserved": 1.454
      },
      "eu-south-1": {
        "onDemand": 2.547,
        "reserved": 1.739
      },
      "eu-west-1": {
        "onDemand": 2.426,
        "reserved": 1.656
      },
      "eu-west-2": {
        "onDemand": 2.546,
        "reserved": 1.738
      },
      "eu-west-3": {
        "onDemand": 2.544,
        "reserved": 1.603
      },
      "me-south-1": {
        "onDemand": 2.669,
        "reserved": 1.822
      },
      "sa-east-1": {
        "onDemand": 3.698,
        "reserved": 2.524
      },
      "us-east-1": {
        "onDemand": 2.176,
        "reserved": 1.371
      },
      "us-east-2": {
        "onDemand": 2.176,
        "reserved": 1.371
      },
      "us-gov-east-1": {
        "onDemand": 2.743,
        "reserved": 1.728
      },
      "us-gov-west-1": {
        "onDemand": 2.743,
        "reserved": 1.728
      },
      "us-west-1": {
        "onDemand": 2.611,
        "reserved": 1.837
      },
      "us-west-2": {
        "onDemand": 2.176,
        "reserved": 1.371
      },
      "us-west-2-lax-1": {
        "onDemand": 2.611
      }
    },
    "availability": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4dn.metal",
    "apiName": "g4dn.metal",
    "gpu": "NVIDIA T4",
    "gpuCount": 8,
    "gpuMemory": "16 GB GDDR6",
    "vcpu": 96,
    "memory": "384 GB",
    "network": "100 Gigabit",
    "storage": "900 GB (2 × 450 GB SSD)",
    "pricing": {
      "af-south-1": {
        "onDemand": 10.381,
        "reserved": 7.085
      },
      "ap-east-1": {
        "onDemand": 12.048,
        "reserved": 7.59
      },
      "ap-northeast-1": {
        "onDemand": 10.562,
        "reserved": 7.209
      },
      "ap-northeast-2": {
        "onDemand": 9.624,
        "reserved": 6.053
      },
      "ap-northeast-3": {
        "onDemand": 10.562,
        "reserved": 7.209
      },
      "ap-south-1": {
        "onDemand": 8.612,
        "reserved": 5.426
      },
      "ap-southeast-1": {
        "onDemand": 10.948,
        "reserved": 6.897
      },
      "ap-southeast-2": {
        "onDemand": 10.174,
        "reserved": 6.41
      },
      "ca-central-1": {
        "onDemand": 8.687,
        "reserved": 5.473
      },
      "eu-central-1": {
        "onDemand": 9.78,
        "reserved": 6.675
      },
      "eu-north-1": {
        "onDemand": 8.3,
        "reserved": 5.229
      },
      "eu-south-1": {
        "onDemand": 9.16,
        "reserved": 6.252
      },
      "eu-west-1": {
        "onDemand": 8.724,
        "reserved": 5.954
      },
      "eu-west-2": {
        "onDemand": 9.154,
        "reserved": 6.247
      },
      "eu-west-3": {
        "onDemand": 9.148,
        "reserved": 5.763
      },
      "me-south-1": {
        "onDemand": 9.596,
        "reserved": 6.549
      },
      "sa-east-1": {
        "onDemand": 13.298,
        "reserved": 9.076
      },
      "us-east-1": {
        "onDemand": 7.824,
        "reserved": 4.929
      },
      "us-east-2": {
        "onDemand": 7.824,
        "reserved": 4.929
      },
      "us-gov-west-1": {
        "onDemand": 9.862
      },
      "us-west-1": {
        "onDemand": 9.389,
        "reserved": 6.605
      },
      "us-west-2": {
        "onDemand": 7.824,
        "reserved": 4.929
      },
      "us-west-2-lax-1": {
        "onDemand": 9.389
      }
    },
    "availability": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g4dn.xlarge",
    "apiName": "g4dn.xlarge",
    "gpu": "NVIDIA T4",
    "gpuCount": 1,
    "gpuMemory": "16 GB GDDR6",
    "vcpu": 4,
    "memory": "16 GB",
    "network": "Up to 25 Gigabit",
    "storage": "125 GB SSD",
    "pricing": {
      "af-south-1": {
        "onDemand": 0.698,
        "reserved": 0.476
      },
      "ap-east-1": {
        "onDemand": 0.81,
        "reserved": 0.51
      },
      "ap-northeast-1": {
        "onDemand": 0.71,
        "reserved": 0.485
      },
      "ap-northeast-2": {
        "onDemand": 0.647,
        "reserved": 0.407
      },
      "ap-northeast-3": {
        "onDemand": 0.71,
        "reserved": 0.485
      },
      "ap-south-1": {
        "onDemand": 0.579,
        "reserved": 0.365
      },
      "ap-southeast-1": {
        "onDemand": 0.736,
        "reserved": 0.464
      },
      "ap-southeast-2": {
        "onDemand": 0.684,
        "reserved": 0.431
      },
      "ca-central-1": {
        "onDemand": 0.584,
        "reserved": 0.368
      },
      "eu-central-1": {
        "onDemand": 0.658,
        "reserved": 0.449
      },
      "eu-north-1": {
        "onDemand": 0.558,
        "reserved": 0.352
      },
      "eu-south-1": {
        "onDemand": 0.616,
        "reserved": 0.42
      },
      "eu-west-1": {
        "onDemand": 0.587,
        "reserved": 0.4
      },
      "eu-west-2": {
        "onDemand": 0.615,
        "reserved": 0.42
      },
      "eu-west-3": {
        "onDemand": 0.615,
        "reserved": 0.387
      },
      "me-south-1": {
        "onDemand": 0.645,
        "reserved": 0.44
      },
      "sa-east-1": {
        "onDemand": 0.894,
        "reserved": 0.61
      },
      "us-east-1": {
        "onDemand": 0.526,
        "reserved": 0.331
      },
      "us-east-2": {
        "onDemand": 0.526,
        "reserved": 0.331
      },
      "us-gov-east-1": {
        "onDemand": 0.663,
        "reserved": 0.418
      },
      "us-gov-west-1": {
        "onDemand": 0.663,
        "reserved": 0.418
      },
      "us-west-1": {
        "onDemand": 0.631,
        "reserved": 0.444
      },
      "us-west-2": {
        "onDemand": 0.526,
        "reserved": 0.331
      },
      "us-west-2-lax-1": {
        "onDemand": 0.631
      }
    },
    "availability": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5.12xlarge",
    "apiName": "g5.12xlarge",
    "gpu": "NVIDIA A10G",
    "gpuCount": 4,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 48,
    "memory": "192 GB",
    "network": "40 Gigabit",
    "storage": "3800 GB SSD",
    "pricing": {
      "ap-east-1": {
        "onDemand": 8.7324,
        "reserved": 5.50141
      },
      "ap-northeast-1": {
        "onDemand": 8.22609,
        "reserved": 5.18244
      },
      "ap-northeast-2": {
        "onDemand": 6.97442,
        "reserved": 4.39388
      },
      "ap-south-1": {
        "onDemand": 6.81091,
        "reserved": 4.29087
      },
      "ap-southeast-2": {
        "onDemand": 7.37473,
        "reserved": 4.64608
      },
      "ap-southeast-3": {
        "onDemand": 7.93854,
        "reserved": 5.00128
      },
      "ca-central-1": {
        "onDemand": 6.29784,
        "reserved": 3.96764
      },
      "eu-central-1": {
        "onDemand": 7.09282,
        "reserved": 4.46848
      },
      "eu-north-1": {
        "onDemand": 6.01593,
        "reserved": 3.79003
      },
      "eu-south-2": {
        "onDemand": 5.97646
      },
      "eu-west-1": {
        "onDemand": 6.33167,
        "reserved": 3.98895
      },
      "eu-west-2": {
        "onDemand": 7.19994,
        "reserved": 4.53596
      },
      "eu-west-3": {
        "onDemand": 7.19994
      },
      "il-central-1": {
        "onDemand": 6.64825,
        "reserved": 4.1884
      },
      "me-central-1": {
        "onDemand": 6.9575,
        "reserved": 4.38323
      },
      "sa-east-1": {
        "onDemand": 9.64127,
        "reserved": 6.074
      },
      "us-east-1": {
        "onDemand": 5.672,
        "reserved": 3.57336
      },
      "us-east-2": {
        "onDemand": 5.672,
        "reserved": 3.57336
      },
      "us-west-2": {
        "onDemand": 5.672,
        "reserved": 3.57336
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5.16xlarge",
    "apiName": "g5.16xlarge",
    "gpu": "NVIDIA A10G",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 64,
    "memory": "256 GB",
    "network": "25 Gigabit",
    "storage": "1900 GB SSD",
    "pricing": {
      "ap-east-1": {
        "onDemand": 6.30605,
        "reserved": 3.97281
      },
      "ap-northeast-1": {
        "onDemand": 5.94042,
        "reserved": 3.74247
      },
      "ap-northeast-2": {
        "onDemand": 5.03653,
        "reserved": 3.17302
      },
      "ap-south-1": {
        "onDemand": 4.91846,
        "reserved": 3.09863
      },
      "ap-southeast-2": {
        "onDemand": 5.32561,
        "reserved": 3.35514
      },
      "ap-southeast-3": {
        "onDemand": 5.73277,
        "reserved": 3.61165
      },
      "ca-central-1": {
        "onDemand": 4.54794,
        "reserved": 2.8652
      },
      "eu-central-1": {
        "onDemand": 5.12204,
        "reserved": 3.22688
      },
      "eu-north-1": {
        "onDemand": 4.34437,
        "reserved": 2.73695
      },
      "eu-south-2": {
        "onDemand": 4.31586
      },
      "eu-west-1": {
        "onDemand": 4.57237,
        "reserved": 2.8806
      },
      "eu-west-2": {
        "onDemand": 5.1994,
        "reserved": 3.27562
      },
      "eu-west-3": {
        "onDemand": 5.1994
      },
      "il-central-1": {
        "onDemand": 4.80099,
        "reserved": 3.02463
      },
      "me-central-1": {
        "onDemand": 5.02432,
        "reserved": 3.16532
      },
      "sa-east-1": {
        "onDemand": 6.96239,
        "reserved": 4.3863
      },
      "us-east-1": {
        "onDemand": 4.096,
        "reserved": 2.58048
      },
      "us-east-2": {
        "onDemand": 4.096,
        "reserved": 2.58048
      },
      "us-west-2": {
        "onDemand": 4.096,
        "reserved": 2.58048
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5.24xlarge",
    "apiName": "g5.24xlarge",
    "gpu": "NVIDIA A10G",
    "gpuCount": 4,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 96,
    "memory": "384 GB",
    "network": "50 Gigabit",
    "storage": "3800 GB SSD",
    "pricing": {
      "ap-east-1": {
        "onDemand": 12.5382,
        "reserved": 7.89906
      },
      "ap-northeast-1": {
        "onDemand": 11.81123,
        "reserved": 7.44107
      },
      "ap-northeast-2": {
        "onDemand": 10.01404,
        "reserved": 6.30885
      },
      "ap-south-1": {
        "onDemand": 9.77928,
        "reserved": 6.16094
      },
      "ap-southeast-2": {
        "onDemand": 10.58882,
        "reserved": 6.67096
      },
      "ap-southeast-3": {
        "onDemand": 11.39836,
        "reserved": 7.18097
      },
      "ca-central-1": {
        "onDemand": 9.04259,
        "reserved": 5.69683
      },
      "eu-central-1": {
        "onDemand": 10.18405,
        "reserved": 6.41595
      },
      "eu-north-1": {
        "onDemand": 8.63782,
        "reserved": 5.44183
      },
      "eu-south-2": {
        "onDemand": 8.58115
      },
      "eu-west-1": {
        "onDemand": 9.09117,
        "reserved": 5.72743
      },
      "eu-west-2": {
        "onDemand": 10.33786,
        "reserved": 6.51285
      },
      "eu-west-3": {
        "onDemand": 10.33786
      },
      "il-central-1": {
        "onDemand": 9.54572,
        "reserved": 6.01381
      },
      "me-central-1": {
        "onDemand": 9.98976,
        "reserved": 6.29355
      },
      "sa-east-1": {
        "onDemand": 13.84318,
        "reserved": 8.7212
      },
      "us-east-1": {
        "onDemand": 8.144,
        "reserved": 5.13072
      },
      "us-east-2": {
        "onDemand": 8.144,
        "reserved": 5.13072
      },
      "us-west-2": {
        "onDemand": 8.144,
        "reserved": 5.13072
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5.2xlarge",
    "apiName": "g5.2xlarge",
    "gpu": "NVIDIA A10G",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 8,
    "memory": "32 GB",
    "network": "Up to 10 Gigabit",
    "storage": "450 GB SSD",
    "pricing": {
      "ap-east-1": {
        "onDemand": 1.86595,
        "reserved": 1.17555
      },
      "ap-northeast-1": {
        "onDemand": 1.75776,
        "reserved": 1.10739
      },
      "ap-northeast-2": {
        "onDemand": 1.4903,
        "reserved": 0.93889
      },
      "ap-south-1": {
        "onDemand": 1.45536,
        "reserved": 0.91688
      },
      "ap-southeast-2": {
        "onDemand": 1.57584,
        "reserved": 0.99278
      },
      "ap-southeast-3": {
        "onDemand": 1.69632,
        "reserved": 1.06868
      },
      "ca-central-1": {
        "onDemand": 1.34573,
        "reserved": 0.84781
      },
      "eu-central-1": {
        "onDemand": 1.5156,
        "reserved": 0.95483
      },
      "eu-north-1": {
        "onDemand": 1.28549,
        "reserved": 0.80986
      },
      "eu-south-2": {
        "onDemand": 1.27706
      },
      "eu-west-1": {
        "onDemand": 1.35296,
        "reserved": 0.85236
      },
      "eu-west-2": {
        "onDemand": 1.53849,
        "reserved": 0.96925
      },
      "eu-west-3": {
        "onDemand": 1.53849
      },
      "il-central-1": {
        "onDemand": 1.42061,
        "reserved": 0.89498
      },
      "me-central-1": {
        "onDemand": 1.48669,
        "reserved": 0.93661
      },
      "sa-east-1": {
        "onDemand": 2.06016,
        "reserved": 1.2979
      },
      "us-east-1": {
        "onDemand": 1.212,
        "reserved": 0.76356
      },
      "us-east-2": {
        "onDemand": 1.212,
        "reserved": 0.76356
      },
      "us-west-2": {
        "onDemand": 1.212,
        "reserved": 0.76356
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5.48xlarge",
    "apiName": "g5.48xlarge",
    "gpu": "NVIDIA A10G",
    "gpuCount": 8,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 192,
    "memory": "768 GB",
    "network": "100 Gigabit",
    "storage": "3800 GB (2 × 1900 GB SSD)",
    "pricing": {
      "ap-east-1": {
        "onDemand": 25.0764,
        "reserved": 15.79813
      },
      "ap-northeast-1": {
        "onDemand": 23.62246,
        "reserved": 14.88215
      },
      "ap-northeast-2": {
        "onDemand": 20.02809,
        "reserved": 12.6177
      },
      "ap-south-1": {
        "onDemand": 19.55855,
        "reserved": 12.32189
      },
      "ap-southeast-2": {
        "onDemand": 21.17764,
        "reserved": 13.34191
      },
      "ap-southeast-3": {
        "onDemand": 22.79672,
        "reserved": 14.36194
      },
      "ca-central-1": {
        "onDemand": 18.08518,
        "reserved": 11.39367
      },
      "eu-central-1": {
        "onDemand": 20.3681,
        "reserved": 12.8319
      },
      "eu-north-1": {
        "onDemand": 17.27564,
        "reserved": 10.88365
      },
      "eu-south-2": {
        "onDemand": 17.16231
      },
      "eu-west-1": {
        "onDemand": 18.18233,
        "reserved": 11.45487
      },
      "eu-west-2": {
        "onDemand": 20.67572,
        "reserved": 13.0257
      },
      "eu-west-3": {
        "onDemand": 20.67572
      },
      "il-central-1": {
        "onDemand": 19.09145,
        "reserved": 12.02761
      },
      "me-central-1": {
        "onDemand": 19.97951,
        "reserved": 12.58709
      },
      "sa-east-1": {
        "onDemand": 27.68636,
        "reserved": 17.44241
      },
      "us-east-1": {
        "onDemand": 16.288,
        "reserved": 10.26144
      },
      "us-east-2": {
        "onDemand": 16.288,
        "reserved": 10.26144
      },
      "us-west-2": {
        "onDemand": 16.288,
        "reserved": 10.26144
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5.4xlarge",
    "apiName": "g5.4xlarge",
    "gpu": "NVIDIA A10G",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 16,
    "memory": "64 GB",
    "network": "Up to 25 Gigabit",
    "storage": "600 GB SSD",
    "pricing": {
      "ap-east-1": {
        "onDemand": 2.50025,
        "reserved": 1.57516
      },
      "ap-northeast-1": {
        "onDemand": 2.35528,
        "reserved": 1.48383
      },
      "ap-northeast-2": {
        "onDemand": 1.99691,
        "reserved": 1.25805
      },
      "ap-south-1": {
        "onDemand": 1.95009,
        "reserved": 1.22856
      },
      "ap-southeast-2": {
        "onDemand": 2.11152,
        "reserved": 1.33026
      },
      "ap-southeast-3": {
        "onDemand": 2.27295,
        "reserved": 1.43196
      },
      "ca-central-1": {
        "onDemand": 1.80319,
        "reserved": 1.13601
      },
      "eu-central-1": {
        "onDemand": 2.03081,
        "reserved": 1.27941
      },
      "eu-north-1": {
        "onDemand": 1.72247,
        "reserved": 1.08516
      },
      "eu-south-2": {
        "onDemand": 1.71117
      },
      "eu-west-1": {
        "onDemand": 1.81287,
        "reserved": 1.14211
      },
      "eu-west-2": {
        "onDemand": 2.06148,
        "reserved": 1.29873
      },
      "eu-west-3": {
        "onDemand": 2.06148
      },
      "il-central-1": {
        "onDemand": 1.90352,
        "reserved": 1.19922
      },
      "me-central-1": {
        "onDemand": 1.99206,
        "reserved": 1.255
      },
      "sa-east-1": {
        "onDemand": 2.76048,
        "reserved": 1.7391
      },
      "us-east-1": {
        "onDemand": 1.624,
        "reserved": 1.02312
      },
      "us-east-2": {
        "onDemand": 1.624,
        "reserved": 1.02312
      },
      "us-west-2": {
        "onDemand": 1.624,
        "reserved": 1.02312
      },
      "us-west-2-lax-1": {
        "onDemand": 2.23098
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5.8xlarge",
    "apiName": "g5.8xlarge",
    "gpu": "NVIDIA A10G",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 32,
    "memory": "128 GB",
    "network": "25 Gigabit",
    "storage": "900 GB SSD",
    "pricing": {
      "ap-east-1": {
        "onDemand": 3.76885,
        "reserved": 2.37438
      },
      "ap-northeast-1": {
        "onDemand": 3.55033,
        "reserved": 2.23671
      },
      "ap-northeast-2": {
        "onDemand": 3.01012,
        "reserved": 1.89637
      },
      "ap-south-1": {
        "onDemand": 2.93955,
        "reserved": 1.85191
      },
      "ap-southeast-2": {
        "onDemand": 3.18289,
        "reserved": 2.00522
      },
      "ap-southeast-3": {
        "onDemand": 3.42623,
        "reserved": 2.15852
      },
      "ca-central-1": {
        "onDemand": 2.71811,
        "reserved": 1.71241
      },
      "eu-central-1": {
        "onDemand": 3.06122,
        "reserved": 1.92857
      },
      "eu-north-1": {
        "onDemand": 2.59644,
        "reserved": 1.63576
      },
      "eu-south-2": {
        "onDemand": 2.5794
      },
      "eu-west-1": {
        "onDemand": 2.73271,
        "reserved": 1.72161
      },
      "eu-west-2": {
        "onDemand": 3.10745,
        "reserved": 1.95769
      },
      "eu-west-3": {
        "onDemand": 3.10745
      },
      "il-central-1": {
        "onDemand": 2.86934,
        "reserved": 1.80769
      },
      "me-central-1": {
        "onDemand": 3.00282,
        "reserved": 1.89177
      },
      "sa-east-1": {
        "onDemand": 4.16111,
        "reserved": 2.6215
      },
      "us-east-1": {
        "onDemand": 2.448,
        "reserved": 1.54224
      },
      "us-east-2": {
        "onDemand": 2.448,
        "reserved": 1.54224
      },
      "us-west-2": {
        "onDemand": 2.448,
        "reserved": 1.54224
      },
      "us-west-2-lax-1": {
        "onDemand": 3.36296
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5.xlarge",
    "apiName": "g5.xlarge",
    "gpu": "NVIDIA A10G",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 4,
    "memory": "16 GB",
    "network": "Up to 10 Gigabit",
    "storage": "250 GB SSD",
    "pricing": {
      "ap-east-1": {
        "onDemand": 1.5488,
        "reserved": 0.97574
      },
      "ap-northeast-1": {
        "onDemand": 1.459,
        "reserved": 0.91917
      },
      "ap-northeast-2": {
        "onDemand": 1.237,
        "reserved": 0.77931
      },
      "ap-south-1": {
        "onDemand": 1.208,
        "reserved": 0.76104
      },
      "ap-southeast-2": {
        "onDemand": 1.308,
        "reserved": 0.82404
      },
      "ap-southeast-3": {
        "onDemand": 1.408,
        "reserved": 0.88704
      },
      "ca-central-1": {
        "onDemand": 1.117,
        "reserved": 0.70371
      },
      "eu-central-1": {
        "onDemand": 1.258,
        "reserved": 0.79254
      },
      "eu-north-1": {
        "onDemand": 1.067,
        "reserved": 0.67221
      },
      "eu-south-2": {
        "onDemand": 1.06
      },
      "eu-west-1": {
        "onDemand": 1.123,
        "reserved": 0.70749
      },
      "eu-west-2": {
        "onDemand": 1.277,
        "reserved": 0.80451
      },
      "eu-west-3": {
        "onDemand": 1.277
      },
      "il-central-1": {
        "onDemand": 1.17915,
        "reserved": 0.74286
      },
      "me-central-1": {
        "onDemand": 1.234,
        "reserved": 0.77742
      },
      "sa-east-1": {
        "onDemand": 1.71,
        "reserved": 1.0773
      },
      "us-east-1": {
        "onDemand": 1.006,
        "reserved": 0.63378
      },
      "us-east-2": {
        "onDemand": 1.006,
        "reserved": 0.63378
      },
      "us-west-2": {
        "onDemand": 1.006,
        "reserved": 0.63378
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5g.16xlarge",
    "apiName": "g5g.16xlarge",
    "gpu": "ARM Mali-G78MP12",
    "gpuCount": 2,
    "gpuMemory": "4 GB",
    "vcpu": 64,
    "memory": "128 GB",
    "network": "25 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 3.7039,
        "reserved": 2.5279
      },
      "ap-northeast-2": {
        "onDemand": 3.3752,
        "reserved": 2.1223
      },
      "ap-southeast-1": {
        "onDemand": 3.8395,
        "reserved": 2.4185
      },
      "eu-central-1": {
        "onDemand": 3.4326,
        "reserved": 2.3413
      },
      "eu-south-2": {
        "onDemand": 3.0622,
        "reserved": 2.0889
      },
      "us-east-1": {
        "onDemand": 2.744,
        "reserved": 1.7287
      },
      "us-west-2": {
        "onDemand": 2.744,
        "reserved": 1.7287
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "eu-central-1",
      "eu-south-2",
      "us-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5g.2xlarge",
    "apiName": "g5g.2xlarge",
    "gpu": "ARM Mali-G78MP12",
    "gpuCount": 1,
    "gpuMemory": "4 GB",
    "vcpu": 8,
    "memory": "16 GB",
    "network": "Up to 10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 0.7505,
        "reserved": 0.5122
      },
      "ap-northeast-2": {
        "onDemand": 0.6839,
        "reserved": 0.43
      },
      "ap-southeast-1": {
        "onDemand": 0.778,
        "reserved": 0.49
      },
      "eu-central-1": {
        "onDemand": 0.6955,
        "reserved": 0.4744
      },
      "eu-south-2": {
        "onDemand": 0.6205,
        "reserved": 0.4233
      },
      "us-east-1": {
        "onDemand": 0.556,
        "reserved": 0.3503
      },
      "us-west-2": {
        "onDemand": 0.556,
        "reserved": 0.3503
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "eu-central-1",
      "eu-south-2",
      "us-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5g.4xlarge",
    "apiName": "g5g.4xlarge",
    "gpu": "ARM Mali-G78MP12",
    "gpuCount": 1,
    "gpuMemory": "4 GB",
    "vcpu": 16,
    "memory": "32 GB",
    "network": "Up to 10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.1176,
        "reserved": 0.7628
      },
      "ap-northeast-2": {
        "onDemand": 1.0185,
        "reserved": 0.6404
      },
      "ap-southeast-1": {
        "onDemand": 1.1586,
        "reserved": 0.7298
      },
      "eu-central-1": {
        "onDemand": 1.0358,
        "reserved": 0.7065
      },
      "eu-south-2": {
        "onDemand": 0.924,
        "reserved": 0.6303
      },
      "us-east-1": {
        "onDemand": 0.828,
        "reserved": 0.5216
      },
      "us-west-2": {
        "onDemand": 0.828,
        "reserved": 0.5216
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "eu-central-1",
      "eu-south-2",
      "us-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5g.8xlarge",
    "apiName": "g5g.8xlarge",
    "gpu": "ARM Mali-G78MP12",
    "gpuCount": 1,
    "gpuMemory": "4 GB",
    "vcpu": 32,
    "memory": "64 GB",
    "network": "12 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.8519,
        "reserved": 1.264
      },
      "ap-northeast-2": {
        "onDemand": 1.6876,
        "reserved": 1.0612
      },
      "ap-southeast-1": {
        "onDemand": 1.9198,
        "reserved": 1.2092
      },
      "eu-central-1": {
        "onDemand": 1.7163,
        "reserved": 1.1706
      },
      "eu-south-2": {
        "onDemand": 1.5311,
        "reserved": 1.0445
      },
      "us-east-1": {
        "onDemand": 1.372,
        "reserved": 0.8644
      },
      "us-west-2": {
        "onDemand": 1.372,
        "reserved": 0.8644
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "eu-central-1",
      "eu-south-2",
      "us-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5g.metal",
    "apiName": "g5g.metal",
    "gpu": "ARM Mali-G78MP12",
    "gpuCount": 2,
    "gpuMemory": "4 GB",
    "vcpu": 64,
    "memory": "128 GB",
    "network": "25 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 3.7039,
        "reserved": 2.5279
      },
      "ap-northeast-2": {
        "onDemand": 3.3752,
        "reserved": 2.1223
      },
      "ap-southeast-1": {
        "onDemand": 3.8395,
        "reserved": 2.4185
      },
      "ap-southeast-3": {
        "onDemand": 3.8395
      },
      "eu-central-1": {
        "onDemand": 3.4326,
        "reserved": 2.3413
      },
      "eu-south-2": {
        "onDemand": 3.0622,
        "reserved": 2.0889
      },
      "us-east-1": {
        "onDemand": 2.744,
        "reserved": 1.7287
      },
      "us-west-2": {
        "onDemand": 2.744,
        "reserved": 1.7287
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-3",
      "eu-central-1",
      "eu-south-2",
      "us-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g5g.xlarge",
    "apiName": "g5g.xlarge",
    "gpu": "ARM Mali-G78MP12",
    "gpuCount": 1,
    "gpuMemory": "4 GB",
    "vcpu": 4,
    "memory": "8 GB",
    "network": "Up to 10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 0.5669,
        "reserved": 0.3869
      },
      "ap-northeast-2": {
        "onDemand": 0.5166,
        "reserved": 0.3248
      },
      "ap-southeast-1": {
        "onDemand": 0.5877,
        "reserved": 0.3702
      },
      "eu-central-1": {
        "onDemand": 0.5254,
        "reserved": 0.3584
      },
      "eu-south-2": {
        "onDemand": 0.4687,
        "reserved": 0.3197
      },
      "us-east-1": {
        "onDemand": 0.42,
        "reserved": 0.2646
      },
      "us-west-2": {
        "onDemand": 0.42,
        "reserved": 0.2646
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "eu-central-1",
      "eu-south-2",
      "us-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6.12xlarge",
    "apiName": "g6.12xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 4,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 48,
    "memory": "192 GB",
    "network": "40 Gigabit",
    "storage": "940 GB (4 × 235 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 6.67369,
        "reserved": 4.34457
      },
      "ap-northeast-2": {
        "onDemand": 5.65823,
        "reserved": 3.68351
      },
      "ap-south-1": {
        "onDemand": 5.52558,
        "reserved": 3.59715
      },
      "ap-south-2": {
        "onDemand": 5.52558,
        "reserved": 3.59715
      },
      "ap-southeast-2": {
        "onDemand": 5.98299,
        "reserved": 3.89493
      },
      "ap-southeast-5": {
        "onDemand": 5.7966,
        "reserved": 3.77359
      },
      "ca-central-1": {
        "onDemand": 5.10933,
        "reserved": 3.32617
      },
      "eu-central-1": {
        "onDemand": 5.75429,
        "reserved": 3.74604
      },
      "eu-central-2": {
        "onDemand": 6.2037,
        "reserved": 4.03861
      },
      "eu-north-1": {
        "onDemand": 4.88062,
        "reserved": 3.17729
      },
      "eu-south-2": {
        "onDemand": 4.8486,
        "reserved": 3.15644
      },
      "eu-west-2": {
        "onDemand": 5.8412,
        "reserved": 3.80262
      },
      "eu-west-3": {
        "onDemand": 5.8412,
        "reserved": 3.80262
      },
      "me-central-1": {
        "onDemand": 5.65045,
        "reserved": 3.67845
      },
      "sa-east-1": {
        "onDemand": 7.82181,
        "reserved": 5.092
      },
      "us-east-1": {
        "onDemand": 4.6016,
        "reserved": 2.99564
      },
      "us-east-2": {
        "onDemand": 4.6016,
        "reserved": 2.99564
      },
      "us-gov-east-1": {
        "onDemand": 5.80003
      },
      "us-gov-west-1": {
        "onDemand": 5.80003,
        "reserved": 3.77582
      },
      "us-west-2": {
        "onDemand": 4.6016,
        "reserved": 2.99564
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6.16xlarge",
    "apiName": "g6.16xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 64,
    "memory": "256 GB",
    "network": "25 Gigabit",
    "storage": "940 GB (2 × 470 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 4.92637,
        "reserved": 3.20707
      },
      "ap-northeast-2": {
        "onDemand": 4.17678,
        "reserved": 2.71908
      },
      "ap-south-1": {
        "onDemand": 4.07886,
        "reserved": 2.65534
      },
      "ap-south-2": {
        "onDemand": 4.07886,
        "reserved": 2.65534
      },
      "ap-southeast-2": {
        "onDemand": 4.41652,
        "reserved": 2.87515
      },
      "ap-southeast-5": {
        "onDemand": 4.27892,
        "reserved": 2.78558
      },
      "ca-central-1": {
        "onDemand": 3.7716,
        "reserved": 2.45531
      },
      "eu-central-1": {
        "onDemand": 4.24769,
        "reserved": 2.76525
      },
      "eu-central-2": {
        "onDemand": 4.57943,
        "reserved": 2.98121
      },
      "eu-north-1": {
        "onDemand": 3.60277,
        "reserved": 2.3454
      },
      "eu-south-2": {
        "onDemand": 3.57913,
        "reserved": 2.33002
      },
      "eu-west-2": {
        "onDemand": 4.31184,
        "reserved": 2.80701
      },
      "eu-west-3": {
        "onDemand": 4.31184,
        "reserved": 2.80701
      },
      "me-central-1": {
        "onDemand": 4.17104,
        "reserved": 2.71535
      },
      "sa-east-1": {
        "onDemand": 5.77388,
        "reserved": 3.7588
      },
      "us-east-1": {
        "onDemand": 3.3968,
        "reserved": 2.21132
      },
      "us-east-2": {
        "onDemand": 3.3968,
        "reserved": 2.21132
      },
      "us-gov-east-1": {
        "onDemand": 4.28145
      },
      "us-gov-west-1": {
        "onDemand": 4.28145,
        "reserved": 2.78723
      },
      "us-west-2": {
        "onDemand": 3.3968,
        "reserved": 2.21132
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6.24xlarge",
    "apiName": "g6.24xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 4,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 96,
    "memory": "384 GB",
    "network": "50 Gigabit",
    "storage": "940 GB (4 × 235 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 9.68103,
        "reserved": 6.30235
      },
      "ap-northeast-2": {
        "onDemand": 8.20797,
        "reserved": 5.34339
      },
      "ap-south-1": {
        "onDemand": 8.01555,
        "reserved": 5.21812
      },
      "ap-south-2": {
        "onDemand": 8.01555,
        "reserved": 5.21812
      },
      "ap-southeast-2": {
        "onDemand": 8.67909,
        "reserved": 5.65009
      },
      "ap-southeast-5": {
        "onDemand": 8.4087,
        "reserved": 5.47406
      },
      "ca-central-1": {
        "onDemand": 7.41173,
        "reserved": 4.82503
      },
      "eu-central-1": {
        "onDemand": 8.34732,
        "reserved": 5.4341
      },
      "eu-central-2": {
        "onDemand": 8.99924,
        "reserved": 5.85851
      },
      "eu-north-1": {
        "onDemand": 7.07996,
        "reserved": 4.60905
      },
      "eu-south-2": {
        "onDemand": 7.03351,
        "reserved": 4.57882
      },
      "eu-west-2": {
        "onDemand": 8.47339,
        "reserved": 5.51618
      },
      "eu-west-3": {
        "onDemand": 8.47339,
        "reserved": 5.51618
      },
      "me-central-1": {
        "onDemand": 8.19669,
        "reserved": 5.33605
      },
      "sa-east-1": {
        "onDemand": 11.34651,
        "reserved": 7.38658
      },
      "us-east-1": {
        "onDemand": 6.6752,
        "reserved": 4.34556
      },
      "us-east-2": {
        "onDemand": 6.6752,
        "reserved": 4.34556
      },
      "us-gov-east-1": {
        "onDemand": 8.41367
      },
      "us-gov-west-1": {
        "onDemand": 8.41367,
        "reserved": 5.4773
      },
      "us-west-2": {
        "onDemand": 6.6752,
        "reserved": 4.34556
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6.2xlarge",
    "apiName": "g6.2xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 8,
    "memory": "32 GB",
    "network": "Up to 10 Gigabit",
    "storage": "450 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.41781,
        "reserved": 0.923
      },
      "ap-northeast-2": {
        "onDemand": 1.20208,
        "reserved": 0.78255
      },
      "ap-south-1": {
        "onDemand": 1.1739,
        "reserved": 0.76421
      },
      "ap-south-2": {
        "onDemand": 1.1739,
        "reserved": 0.76421
      },
      "ap-southeast-2": {
        "onDemand": 1.27107,
        "reserved": 0.82747
      },
      "ap-southeast-5": {
        "onDemand": 1.23147,
        "reserved": 0.80169
      },
      "ca-central-1": {
        "onDemand": 1.08547,
        "reserved": 0.70664
      },
      "eu-central-1": {
        "onDemand": 1.22249,
        "reserved": 0.79584
      },
      "eu-central-2": {
        "onDemand": 1.31796,
        "reserved": 0.85799
      },
      "eu-north-1": {
        "onDemand": 1.03688,
        "reserved": 0.67501
      },
      "eu-south-2": {
        "onDemand": 1.03008,
        "reserved": 0.67058
      },
      "eu-west-2": {
        "onDemand": 1.24095,
        "reserved": 0.80786
      },
      "eu-west-3": {
        "onDemand": 1.24095,
        "reserved": 0.80786
      },
      "me-central-1": {
        "onDemand": 1.20043,
        "reserved": 0.78148
      },
      "sa-east-1": {
        "onDemand": 1.66173,
        "reserved": 1.08178
      },
      "us-east-1": {
        "onDemand": 0.9776,
        "reserved": 0.63642
      },
      "us-east-2": {
        "onDemand": 0.9776,
        "reserved": 0.63642
      },
      "us-gov-east-1": {
        "onDemand": 1.2322
      },
      "us-gov-west-1": {
        "onDemand": 1.2322,
        "reserved": 0.80216
      },
      "us-west-2": {
        "onDemand": 0.9776,
        "reserved": 0.63642
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6.48xlarge",
    "apiName": "g6.48xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 8,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 192,
    "memory": "768 GB",
    "network": "100 Gigabit",
    "storage": "940 GB (8 × 117 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 19.36206,
        "reserved": 12.6047
      },
      "ap-northeast-2": {
        "onDemand": 16.41595,
        "reserved": 10.68678
      },
      "ap-south-1": {
        "onDemand": 16.0311,
        "reserved": 10.43624
      },
      "ap-south-2": {
        "onDemand": 16.0311,
        "reserved": 10.43624
      },
      "ap-southeast-2": {
        "onDemand": 17.35817,
        "reserved": 11.30017
      },
      "ap-southeast-5": {
        "onDemand": 16.81739,
        "reserved": 10.94812
      },
      "ca-central-1": {
        "onDemand": 14.82346,
        "reserved": 9.65007
      },
      "eu-central-1": {
        "onDemand": 16.69464,
        "reserved": 10.86821
      },
      "eu-central-2": {
        "onDemand": 17.99849,
        "reserved": 11.71702
      },
      "eu-north-1": {
        "onDemand": 14.15992,
        "reserved": 9.21811
      },
      "eu-south-2": {
        "onDemand": 14.06702,
        "reserved": 9.15763
      },
      "eu-west-2": {
        "onDemand": 16.94678,
        "reserved": 11.03235
      },
      "eu-west-3": {
        "onDemand": 16.94678,
        "reserved": 11.03235
      },
      "me-central-1": {
        "onDemand": 16.39339,
        "reserved": 10.6721
      },
      "sa-east-1": {
        "onDemand": 22.69303,
        "reserved": 14.77316
      },
      "us-east-1": {
        "onDemand": 13.3504,
        "reserved": 8.69111
      },
      "us-east-2": {
        "onDemand": 13.3504,
        "reserved": 8.69111
      },
      "us-gov-east-1": {
        "onDemand": 16.82734
      },
      "us-gov-west-1": {
        "onDemand": 16.82734,
        "reserved": 10.9546
      },
      "us-west-2": {
        "onDemand": 13.3504,
        "reserved": 8.69111
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6.4xlarge",
    "apiName": "g6.4xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 16,
    "memory": "64 GB",
    "network": "Up to 25 Gigabit",
    "storage": "600 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.91903,
        "reserved": 1.24929
      },
      "ap-northeast-2": {
        "onDemand": 1.62704,
        "reserved": 1.0592
      },
      "ap-south-1": {
        "onDemand": 1.58889,
        "reserved": 1.03437
      },
      "ap-south-2": {
        "onDemand": 1.58889,
        "reserved": 1.03437
      },
      "ap-southeast-2": {
        "onDemand": 1.72042,
        "reserved": 1.12
      },
      "ap-southeast-5": {
        "onDemand": 1.66682,
        "reserved": 1.0851
      },
      "ca-central-1": {
        "onDemand": 1.4692,
        "reserved": 0.95645
      },
      "eu-central-1": {
        "onDemand": 1.65466,
        "reserved": 1.07718
      },
      "eu-central-2": {
        "onDemand": 1.78389,
        "reserved": 1.16131
      },
      "eu-north-1": {
        "onDemand": 1.40343,
        "reserved": 0.91364
      },
      "eu-south-2": {
        "onDemand": 1.39423,
        "reserved": 0.90764
      },
      "eu-west-2": {
        "onDemand": 1.67965,
        "reserved": 1.09345
      },
      "eu-west-3": {
        "onDemand": 1.67965,
        "reserved": 1.09345
      },
      "me-central-1": {
        "onDemand": 1.6248,
        "reserved": 1.05774
      },
      "sa-east-1": {
        "onDemand": 2.24918,
        "reserved": 1.46421
      },
      "us-east-1": {
        "onDemand": 1.3232,
        "reserved": 0.8614
      },
      "us-east-2": {
        "onDemand": 1.3232,
        "reserved": 0.8614
      },
      "us-gov-east-1": {
        "onDemand": 1.66781
      },
      "us-gov-west-1": {
        "onDemand": 1.66781,
        "reserved": 1.08574
      },
      "us-west-2": {
        "onDemand": 1.3232,
        "reserved": 0.8614
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6.8xlarge",
    "apiName": "g6.8xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 32,
    "memory": "128 GB",
    "network": "25 Gigabit",
    "storage": "450 GB (2 × 225 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 2.92148,
        "reserved": 1.90188
      },
      "ap-northeast-2": {
        "onDemand": 2.47695,
        "reserved": 1.6125
      },
      "ap-south-1": {
        "onDemand": 2.41888,
        "reserved": 1.57469
      },
      "ap-south-2": {
        "onDemand": 2.41888,
        "reserved": 1.57469
      },
      "ap-southeast-2": {
        "onDemand": 2.61912,
        "reserved": 1.70505
      },
      "ap-southeast-5": {
        "onDemand": 2.53752,
        "reserved": 1.65193
      },
      "ca-central-1": {
        "onDemand": 2.23666,
        "reserved": 1.45607
      },
      "eu-central-1": {
        "onDemand": 2.519,
        "reserved": 1.63987
      },
      "eu-central-2": {
        "onDemand": 2.71574,
        "reserved": 1.76794
      },
      "eu-north-1": {
        "onDemand": 2.13655,
        "reserved": 1.39089
      },
      "eu-south-2": {
        "onDemand": 2.12253,
        "reserved": 1.38177
      },
      "eu-west-2": {
        "onDemand": 2.55705,
        "reserved": 1.66464
      },
      "eu-west-3": {
        "onDemand": 2.55705,
        "reserved": 1.66464
      },
      "me-central-1": {
        "onDemand": 2.47355,
        "reserved": 1.61028
      },
      "sa-east-1": {
        "onDemand": 3.42408,
        "reserved": 2.22908
      },
      "us-east-1": {
        "onDemand": 2.0144,
        "reserved": 1.31137
      },
      "us-east-2": {
        "onDemand": 2.0144,
        "reserved": 1.31137
      },
      "us-gov-east-1": {
        "onDemand": 2.53903
      },
      "us-gov-west-1": {
        "onDemand": 2.53903,
        "reserved": 1.65291
      },
      "us-west-2": {
        "onDemand": 2.0144,
        "reserved": 1.31137
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6.xlarge",
    "apiName": "g6.xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 4,
    "memory": "16 GB",
    "network": "Up to 10 Gigabit",
    "storage": "250 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.1672,
        "reserved": 0.75985
      },
      "ap-northeast-2": {
        "onDemand": 0.9896,
        "reserved": 0.64423
      },
      "ap-south-1": {
        "onDemand": 0.9664,
        "reserved": 0.62913
      },
      "ap-south-2": {
        "onDemand": 0.9664,
        "reserved": 0.62913
      },
      "ap-southeast-2": {
        "onDemand": 1.0464,
        "reserved": 0.68121
      },
      "ap-southeast-5": {
        "onDemand": 1.0138,
        "reserved": 0.65998
      },
      "ca-central-1": {
        "onDemand": 0.8936,
        "reserved": 0.58173
      },
      "eu-central-1": {
        "onDemand": 1.0064,
        "reserved": 0.65517
      },
      "eu-central-2": {
        "onDemand": 1.085,
        "reserved": 0.70634
      },
      "eu-north-1": {
        "onDemand": 0.8536,
        "reserved": 0.55569
      },
      "eu-south-2": {
        "onDemand": 0.848,
        "reserved": 0.55205
      },
      "eu-west-2": {
        "onDemand": 1.0216,
        "reserved": 0.66506
      },
      "eu-west-3": {
        "onDemand": 1.0216,
        "reserved": 0.66506
      },
      "me-central-1": {
        "onDemand": 0.98824,
        "reserved": 0.64334
      },
      "sa-east-1": {
        "onDemand": 1.368,
        "reserved": 0.89057
      },
      "us-east-1": {
        "onDemand": 0.8048,
        "reserved": 0.52392
      },
      "us-east-2": {
        "onDemand": 0.8048,
        "reserved": 0.52392
      },
      "us-gov-east-1": {
        "onDemand": 1.0144
      },
      "us-gov-west-1": {
        "onDemand": 1.0144,
        "reserved": 0.66037
      },
      "us-west-2": {
        "onDemand": 0.8048,
        "reserved": 0.52392
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6e.12xlarge",
    "apiName": "g6e.12xlarge",
    "gpu": "NVIDIA L40S",
    "gpuCount": 4,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 48,
    "memory": "384 GB",
    "network": "100 Gigabit",
    "storage": "1900 GB (2 × 950 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 15.21742,
        "reserved": 9.58698
      },
      "ap-northeast-2": {
        "onDemand": 12.90014,
        "reserved": 8.12709
      },
      "ap-northeast-3": {
        "onDemand": 15.21742,
        "reserved": 9.58698
      },
      "ap-south-1": {
        "onDemand": 12.60131,
        "reserved": 7.93883
      },
      "ap-south-2": {
        "onDemand": 12.60131,
        "reserved": 7.93883
      },
      "eu-central-1": {
        "onDemand": 13.12002,
        "reserved": 8.26562
      },
      "eu-north-1": {
        "onDemand": 11.12975,
        "reserved": 7.01174
      },
      "eu-south-2": {
        "onDemand": 11.05645,
        "reserved": 6.96557
      },
      "me-central-1": {
        "onDemand": 12.87194,
        "reserved": 8.10932
      },
      "us-east-1": {
        "onDemand": 10.49264,
        "reserved": 6.61036
      },
      "us-east-2": {
        "onDemand": 10.49264,
        "reserved": 6.61036
      },
      "us-west-2": {
        "onDemand": 10.49264,
        "reserved": 6.61036
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6e.16xlarge",
    "apiName": "g6e.16xlarge",
    "gpu": "NVIDIA L40S",
    "gpuCount": 1,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 64,
    "memory": "512 GB",
    "network": "35 Gigabit",
    "storage": "950 GB (2 × 475 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 10.98917,
        "reserved": 6.92318
      },
      "ap-northeast-2": {
        "onDemand": 9.31575,
        "reserved": 5.86892
      },
      "ap-northeast-3": {
        "onDemand": 10.98917,
        "reserved": 6.92318
      },
      "ap-south-1": {
        "onDemand": 9.09996,
        "reserved": 5.73297
      },
      "ap-south-2": {
        "onDemand": 9.09996,
        "reserved": 5.73297
      },
      "eu-central-1": {
        "onDemand": 9.47454,
        "reserved": 5.96896
      },
      "eu-north-1": {
        "onDemand": 8.03728,
        "reserved": 5.06349
      },
      "eu-south-2": {
        "onDemand": 7.98435,
        "reserved": 5.03014
      },
      "me-central-1": {
        "onDemand": 9.2954,
        "reserved": 5.8561
      },
      "us-east-1": {
        "onDemand": 7.57719,
        "reserved": 4.77363
      },
      "us-east-2": {
        "onDemand": 7.57719,
        "reserved": 4.77363
      },
      "us-west-2": {
        "onDemand": 7.57719,
        "reserved": 4.77363
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6e.24xlarge",
    "apiName": "g6e.24xlarge",
    "gpu": "NVIDIA L40S",
    "gpuCount": 4,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 96,
    "memory": "768 GB",
    "network": "200 Gigabit",
    "storage": "1900 GB (2 × 950 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 21.84956,
        "reserved": 13.76522
      },
      "ap-northeast-2": {
        "onDemand": 18.52234,
        "reserved": 11.66907
      },
      "ap-northeast-3": {
        "onDemand": 21.84956,
        "reserved": 13.76522
      },
      "ap-south-1": {
        "onDemand": 18.09328,
        "reserved": 11.39877
      },
      "ap-south-2": {
        "onDemand": 18.09328,
        "reserved": 11.39877
      },
      "eu-central-1": {
        "onDemand": 18.83806,
        "reserved": 11.86798
      },
      "eu-north-1": {
        "onDemand": 15.98037,
        "reserved": 10.06764
      },
      "eu-south-2": {
        "onDemand": 15.87513,
        "reserved": 10.00133
      },
      "me-central-1": {
        "onDemand": 18.48186,
        "reserved": 11.64357
      },
      "us-east-1": {
        "onDemand": 15.06559,
        "reserved": 9.49132
      },
      "us-east-2": {
        "onDemand": 15.06559,
        "reserved": 9.49132
      },
      "us-west-2": {
        "onDemand": 15.06559,
        "reserved": 9.49132
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6e.2xlarge",
    "apiName": "g6e.2xlarge",
    "gpu": "NVIDIA L40S",
    "gpuCount": 1,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 8,
    "memory": "64 GB",
    "network": "Up to 20 Gigabit",
    "storage": "450 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 3.25168,
        "reserved": 2.04856
      },
      "ap-northeast-2": {
        "onDemand": 2.75652,
        "reserved": 1.73661
      },
      "ap-northeast-3": {
        "onDemand": 3.25168,
        "reserved": 2.04856
      },
      "ap-south-1": {
        "onDemand": 2.69266,
        "reserved": 1.69638
      },
      "ap-south-2": {
        "onDemand": 2.69266,
        "reserved": 1.69638
      },
      "eu-central-1": {
        "onDemand": 2.8035,
        "reserved": 1.76621
      },
      "eu-north-1": {
        "onDemand": 2.37822,
        "reserved": 1.49828
      },
      "eu-south-2": {
        "onDemand": 2.36256,
        "reserved": 1.48841
      },
      "me-central-1": {
        "onDemand": 2.75049,
        "reserved": 1.73281
      },
      "us-east-1": {
        "onDemand": 2.24208,
        "reserved": 1.41251
      },
      "us-east-2": {
        "onDemand": 2.24208,
        "reserved": 1.41251
      },
      "us-west-2": {
        "onDemand": 2.24208,
        "reserved": 1.41251
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6e.48xlarge",
    "apiName": "g6e.48xlarge",
    "gpu": "NVIDIA L40S",
    "gpuCount": 8,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 192,
    "memory": "1536 GB",
    "network": "400 Gigabit",
    "storage": "1900 GB (4 × 475 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 43.69912,
        "reserved": 27.53044
      },
      "ap-northeast-2": {
        "onDemand": 37.04468,
        "reserved": 23.33815
      },
      "ap-northeast-3": {
        "onDemand": 43.69912,
        "reserved": 27.53044
      },
      "ap-south-1": {
        "onDemand": 36.18656,
        "reserved": 22.79753
      },
      "ap-south-2": {
        "onDemand": 36.18656,
        "reserved": 22.79753
      },
      "eu-central-1": {
        "onDemand": 37.67612,
        "reserved": 23.73596
      },
      "eu-north-1": {
        "onDemand": 31.96075,
        "reserved": 20.13527
      },
      "eu-south-2": {
        "onDemand": 31.75027,
        "reserved": 20.00267
      },
      "me-central-1": {
        "onDemand": 36.96372,
        "reserved": 23.28714
      },
      "us-east-1": {
        "onDemand": 30.13118,
        "reserved": 18.98264
      },
      "us-east-2": {
        "onDemand": 30.13118,
        "reserved": 18.98264
      },
      "us-west-2": {
        "onDemand": 30.13118,
        "reserved": 18.98264
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6e.4xlarge",
    "apiName": "g6e.4xlarge",
    "gpu": "NVIDIA L40S",
    "gpuCount": 1,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 16,
    "memory": "128 GB",
    "network": "20 Gigabit",
    "storage": "600 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 4.35703,
        "reserved": 2.74493
      },
      "ap-northeast-2": {
        "onDemand": 3.69355,
        "reserved": 2.32694
      },
      "ap-northeast-3": {
        "onDemand": 4.35703,
        "reserved": 2.74493
      },
      "ap-south-1": {
        "onDemand": 3.60799,
        "reserved": 2.27303
      },
      "ap-south-2": {
        "onDemand": 3.60799,
        "reserved": 2.27303
      },
      "eu-central-1": {
        "onDemand": 3.75651,
        "reserved": 2.3666
      },
      "eu-north-1": {
        "onDemand": 3.18666,
        "reserved": 2.00759
      },
      "eu-south-2": {
        "onDemand": 3.16567,
        "reserved": 1.99437
      },
      "me-central-1": {
        "onDemand": 3.68548,
        "reserved": 2.32185
      },
      "us-east-1": {
        "onDemand": 3.00424,
        "reserved": 1.89267
      },
      "us-east-2": {
        "onDemand": 3.00424,
        "reserved": 1.89267
      },
      "us-west-2": {
        "onDemand": 3.00424,
        "reserved": 1.89267
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6e.8xlarge",
    "apiName": "g6e.8xlarge",
    "gpu": "NVIDIA L40S",
    "gpuCount": 1,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 32,
    "memory": "256 GB",
    "network": "25 Gigabit",
    "storage": "450 GB (2 × 225 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 6.56775,
        "reserved": 4.13768
      },
      "ap-northeast-2": {
        "onDemand": 5.56762,
        "reserved": 3.5076
      },
      "ap-northeast-3": {
        "onDemand": 6.56775,
        "reserved": 4.13768
      },
      "ap-south-1": {
        "onDemand": 5.43865,
        "reserved": 3.42635
      },
      "ap-south-2": {
        "onDemand": 5.43865,
        "reserved": 3.42635
      },
      "eu-central-1": {
        "onDemand": 5.66252,
        "reserved": 3.56739
      },
      "eu-north-1": {
        "onDemand": 4.80353,
        "reserved": 3.02622
      },
      "eu-south-2": {
        "onDemand": 4.7719,
        "reserved": 3.00629
      },
      "me-central-1": {
        "onDemand": 5.55545,
        "reserved": 3.49993
      },
      "us-east-1": {
        "onDemand": 4.52856,
        "reserved": 2.85299
      },
      "us-east-2": {
        "onDemand": 4.52856,
        "reserved": 2.85299
      },
      "us-west-2": {
        "onDemand": 4.52856,
        "reserved": 2.85299
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6e.xlarge",
    "apiName": "g6e.xlarge",
    "gpu": "NVIDIA L40S",
    "gpuCount": 1,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 4,
    "memory": "32 GB",
    "network": "Up to 20 Gigabit",
    "storage": "250 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 2.699,
        "reserved": 1.70037
      },
      "ap-northeast-2": {
        "onDemand": 2.288,
        "reserved": 1.44144
      },
      "ap-northeast-3": {
        "onDemand": 2.699,
        "reserved": 1.70037
      },
      "ap-south-1": {
        "onDemand": 2.235,
        "reserved": 1.40805
      },
      "ap-south-2": {
        "onDemand": 2.235,
        "reserved": 1.40805
      },
      "eu-central-1": {
        "onDemand": 2.327,
        "reserved": 1.46601
      },
      "eu-north-1": {
        "onDemand": 1.974,
        "reserved": 1.24362
      },
      "eu-south-2": {
        "onDemand": 1.961,
        "reserved": 1.23543
      },
      "me-central-1": {
        "onDemand": 2.283,
        "reserved": 1.43829
      },
      "us-east-1": {
        "onDemand": 1.861,
        "reserved": 1.17243
      },
      "us-east-2": {
        "onDemand": 1.861,
        "reserved": 1.17243
      },
      "us-west-2": {
        "onDemand": 1.861,
        "reserved": 1.17243
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6f.2xlarge",
    "apiName": "g6f.2xlarge",
    "gpu": "NVIDIA L40",
    "gpuCount": 0.25,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 8,
    "memory": "32 GB",
    "network": "Up to 10 Gigabit",
    "storage": "200 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 0.68888
      },
      "ap-northeast-2": {
        "onDemand": 0.58406
      },
      "ap-south-1": {
        "onDemand": 0.57038
      },
      "ap-southeast-2": {
        "onDemand": 0.61759
      },
      "ca-central-1": {
        "onDemand": 0.52741
      },
      "eu-central-1": {
        "onDemand": 0.594
      },
      "eu-north-1": {
        "onDemand": 0.50379
      },
      "eu-south-2": {
        "onDemand": 0.53438
      },
      "eu-west-2": {
        "onDemand": 0.60298
      },
      "sa-east-1": {
        "onDemand": 0.80742
      },
      "us-east-1": {
        "onDemand": 0.475
      },
      "us-east-2": {
        "onDemand": 0.475
      },
      "us-west-2": {
        "onDemand": 0.475
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6f.4xlarge",
    "apiName": "g6f.4xlarge",
    "gpu": "NVIDIA L40",
    "gpuCount": 0.5,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 16,
    "memory": "64 GB",
    "network": "Up to 25 Gigabit",
    "storage": "450 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.37776
      },
      "ap-northeast-2": {
        "onDemand": 1.16812
      },
      "ap-south-1": {
        "onDemand": 1.14076
      },
      "ap-southeast-2": {
        "onDemand": 1.23517
      },
      "ca-central-1": {
        "onDemand": 1.05482
      },
      "eu-central-1": {
        "onDemand": 1.188
      },
      "eu-north-1": {
        "onDemand": 1.00758
      },
      "eu-south-2": {
        "onDemand": 1.06875
      },
      "eu-west-2": {
        "onDemand": 1.20595
      },
      "sa-east-1": {
        "onDemand": 1.61483
      },
      "us-east-1": {
        "onDemand": 0.95
      },
      "us-east-2": {
        "onDemand": 0.95
      },
      "us-west-2": {
        "onDemand": 0.95
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6f.large",
    "apiName": "g6f.large",
    "gpu": "NVIDIA L40",
    "gpuCount": 0.125,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 2,
    "memory": "8 GB",
    "network": "Up to 10 Gigabit",
    "storage": "100 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 0.29296
      },
      "ap-northeast-2": {
        "onDemand": 0.24838
      },
      "ap-south-1": {
        "onDemand": 0.24256
      },
      "ap-southeast-2": {
        "onDemand": 0.26264
      },
      "ca-central-1": {
        "onDemand": 0.22429
      },
      "eu-central-1": {
        "onDemand": 0.25261
      },
      "eu-north-1": {
        "onDemand": 0.21424
      },
      "eu-south-2": {
        "onDemand": 0.22725
      },
      "eu-west-2": {
        "onDemand": 0.25642
      },
      "sa-east-1": {
        "onDemand": 0.34336
      },
      "us-east-1": {
        "onDemand": 0.202
      },
      "us-east-2": {
        "onDemand": 0.202
      },
      "us-west-2": {
        "onDemand": 0.202
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g6f.xlarge",
    "apiName": "g6f.xlarge",
    "gpu": "NVIDIA L40",
    "gpuCount": 0.125,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 4,
    "memory": "16 GB",
    "network": "Up to 10 Gigabit",
    "storage": "100 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 0.34444
      },
      "ap-northeast-2": {
        "onDemand": 0.29203
      },
      "ap-south-1": {
        "onDemand": 0.28519
      },
      "ap-southeast-2": {
        "onDemand": 0.30879
      },
      "ca-central-1": {
        "onDemand": 0.26371
      },
      "eu-central-1": {
        "onDemand": 0.297
      },
      "eu-north-1": {
        "onDemand": 0.2519
      },
      "eu-south-2": {
        "onDemand": 0.26719
      },
      "eu-west-2": {
        "onDemand": 0.30149
      },
      "sa-east-1": {
        "onDemand": 0.40371
      },
      "us-east-1": {
        "onDemand": 0.2375
      },
      "us-east-2": {
        "onDemand": 0.2375
      },
      "us-west-2": {
        "onDemand": 0.2375
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7.12xlarge",
    "apiName": "g7.12xlarge",
    "gpu": "NVIDIA RTX PRO 4500 Blackwell",
    "gpuCount": 2,
    "gpuMemory": "32 GB GDDR7",
    "vcpu": 48,
    "memory": "192 GB",
    "network": "175 Gigabit",
    "storage": "1900 GB SSD",
    "pricing": {
      "eu-south-2": {
        "onDemand": 7.48474
      },
      "us-east-1": {
        "onDemand": 7.12832
      },
      "us-east-2": {
        "onDemand": 7.12832
      },
      "us-west-2": {
        "onDemand": 7.12832
      }
    },
    "availability": [
      "eu-south-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7.24xlarge",
    "apiName": "g7.24xlarge",
    "gpu": "NVIDIA RTX PRO 4500 Blackwell",
    "gpuCount": 4,
    "gpuMemory": "32 GB GDDR7",
    "vcpu": 96,
    "memory": "384 GB",
    "network": "350 Gigabit",
    "storage": "3800 GB SSD",
    "pricing": {
      "eu-south-2": {
        "onDemand": 14.96947
      },
      "us-east-1": {
        "onDemand": 14.25664
      },
      "us-east-2": {
        "onDemand": 14.25664
      },
      "us-west-2": {
        "onDemand": 14.25664
      }
    },
    "availability": [
      "eu-south-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7.2xlarge",
    "apiName": "g7.2xlarge",
    "gpu": "NVIDIA RTX PRO 4500 Blackwell",
    "gpuCount": 1,
    "gpuMemory": "32 GB GDDR7",
    "vcpu": 8,
    "memory": "32 GB",
    "network": "Up to 60 Gigabit",
    "storage": "440 GB SSD",
    "pricing": {
      "eu-south-2": {
        "onDemand": 2.646
      },
      "us-east-1": {
        "onDemand": 2.52
      },
      "us-east-2": {
        "onDemand": 2.52
      },
      "us-west-2": {
        "onDemand": 2.52
      }
    },
    "availability": [
      "eu-south-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7.48xlarge",
    "apiName": "g7.48xlarge",
    "gpu": "NVIDIA RTX PRO 4500 Blackwell",
    "gpuCount": 8,
    "gpuMemory": "32 GB GDDR7",
    "vcpu": 192,
    "memory": "768 GB",
    "network": "700 Gigabit",
    "storage": "3800 GB (2 × 1900 GB SSD)",
    "pricing": {
      "eu-south-2": {
        "onDemand": 29.93894
      },
      "us-east-1": {
        "onDemand": 28.51328
      },
      "us-east-2": {
        "onDemand": 28.51328
      },
      "us-west-2": {
        "onDemand": 28.51328
      }
    },
    "availability": [
      "eu-south-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7.4xlarge",
    "apiName": "g7.4xlarge",
    "gpu": "NVIDIA RTX PRO 4500 Blackwell",
    "gpuCount": 1,
    "gpuMemory": "32 GB GDDR7",
    "vcpu": 16,
    "memory": "64 GB",
    "network": "Up to 100 Gigabit",
    "storage": "875 GB SSD",
    "pricing": {
      "eu-south-2": {
        "onDemand": 3.19418
      },
      "us-east-1": {
        "onDemand": 3.04208
      },
      "us-east-2": {
        "onDemand": 3.04208
      },
      "us-west-2": {
        "onDemand": 3.04208
      }
    },
    "availability": [
      "eu-south-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7.8xlarge",
    "apiName": "g7.8xlarge",
    "gpu": "NVIDIA RTX PRO 4500 Blackwell",
    "gpuCount": 1,
    "gpuMemory": "32 GB GDDR7",
    "vcpu": 32,
    "memory": "128 GB",
    "network": "100 Gigabit",
    "storage": "930 GB SSD",
    "pricing": {
      "eu-south-2": {
        "onDemand": 4.29055
      },
      "us-east-1": {
        "onDemand": 4.08624
      },
      "us-east-2": {
        "onDemand": 4.08624
      },
      "us-west-2": {
        "onDemand": 4.08624
      }
    },
    "availability": [
      "eu-south-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7e.12xlarge",
    "apiName": "g7e.12xlarge",
    "gpu": "NVIDIA RTX PRO 6000 Blackwell",
    "gpuCount": 2,
    "gpuMemory": "96 GB GDDR7",
    "vcpu": 48,
    "memory": "512 GB",
    "network": "400 Gigabit",
    "storage": "3800 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 12.01727
      },
      "ap-northeast-2": {
        "onDemand": 10.1873
      },
      "ap-south-1": {
        "onDemand": 13.53377
      },
      "eu-central-1": {
        "onDemand": 14.09088
      },
      "eu-north-1": {
        "onDemand": 11.95333
      },
      "eu-south-2": {
        "onDemand": 8.73134
      },
      "eu-west-2": {
        "onDemand": 14.40172
      },
      "us-east-1": {
        "onDemand": 8.28608
      },
      "us-east-2": {
        "onDemand": 8.28608
      },
      "us-west-2": {
        "onDemand": 8.28608
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7e.24xlarge",
    "apiName": "g7e.24xlarge",
    "gpu": "NVIDIA RTX PRO 6000 Blackwell",
    "gpuCount": 4,
    "gpuMemory": "96 GB GDDR7",
    "vcpu": 96,
    "memory": "1024 GB",
    "network": "800 Gigabit",
    "storage": "3800 GB (2 × 1900 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 24.03454
      },
      "ap-northeast-2": {
        "onDemand": 20.3746
      },
      "ap-south-1": {
        "onDemand": 27.06754
      },
      "eu-central-1": {
        "onDemand": 28.18177
      },
      "eu-north-1": {
        "onDemand": 23.90667
      },
      "eu-south-2": {
        "onDemand": 17.46268
      },
      "eu-west-2": {
        "onDemand": 28.80344
      },
      "us-east-1": {
        "onDemand": 16.57216
      },
      "us-east-2": {
        "onDemand": 16.57216
      },
      "us-west-2": {
        "onDemand": 16.57216
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7e.2xlarge",
    "apiName": "g7e.2xlarge",
    "gpu": "NVIDIA RTX PRO 6000 Blackwell",
    "gpuCount": 1,
    "gpuMemory": "96 GB GDDR7",
    "vcpu": 8,
    "memory": "64 GB",
    "network": "50 Gigabit",
    "storage": "1900 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 4.87752
      },
      "ap-northeast-2": {
        "onDemand": 4.13478
      },
      "ap-south-1": {
        "onDemand": 5.49303
      },
      "eu-central-1": {
        "onDemand": 5.71915
      },
      "eu-north-1": {
        "onDemand": 4.85157
      },
      "eu-south-2": {
        "onDemand": 3.54384
      },
      "eu-west-2": {
        "onDemand": 5.84531
      },
      "us-east-1": {
        "onDemand": 3.36312
      },
      "us-east-2": {
        "onDemand": 3.36312
      },
      "us-west-2": {
        "onDemand": 3.36312
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7e.48xlarge",
    "apiName": "g7e.48xlarge",
    "gpu": "NVIDIA RTX PRO 6000 Blackwell",
    "gpuCount": 8,
    "gpuMemory": "96 GB GDDR7",
    "vcpu": 192,
    "memory": "2048 GB",
    "network": "1600 Gigabit",
    "storage": "3800 GB (4 × 950 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 48.06908
      },
      "ap-northeast-2": {
        "onDemand": 40.74921
      },
      "ap-south-1": {
        "onDemand": 54.13507
      },
      "eu-central-1": {
        "onDemand": 56.36354
      },
      "eu-north-1": {
        "onDemand": 47.81334
      },
      "eu-south-2": {
        "onDemand": 34.92536
      },
      "eu-west-2": {
        "onDemand": 57.60687
      },
      "us-east-1": {
        "onDemand": 33.14432
      },
      "us-east-2": {
        "onDemand": 33.14432
      },
      "us-west-2": {
        "onDemand": 33.14432
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7e.4xlarge",
    "apiName": "g7e.4xlarge",
    "gpu": "NVIDIA RTX PRO 6000 Blackwell",
    "gpuCount": 1,
    "gpuMemory": "96 GB GDDR7",
    "vcpu": 16,
    "memory": "128 GB",
    "network": "50 Gigabit",
    "storage": "1900 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 5.79852
      },
      "ap-northeast-2": {
        "onDemand": 4.91553
      },
      "ap-south-1": {
        "onDemand": 6.53025
      },
      "eu-central-1": {
        "onDemand": 6.79907
      },
      "eu-north-1": {
        "onDemand": 5.76767
      },
      "eu-south-2": {
        "onDemand": 4.213
      },
      "eu-west-2": {
        "onDemand": 6.94905
      },
      "us-east-1": {
        "onDemand": 3.99816
      },
      "us-east-2": {
        "onDemand": 3.99816
      },
      "us-west-2": {
        "onDemand": 3.99816
      },
      "us-west-2-lax-1": {
        "onDemand": 5.35803
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "g7e.8xlarge",
    "apiName": "g7e.8xlarge",
    "gpu": "NVIDIA RTX PRO 6000 Blackwell",
    "gpuCount": 1,
    "gpuMemory": "96 GB GDDR7",
    "vcpu": 32,
    "memory": "256 GB",
    "network": "100 Gigabit",
    "storage": "1900 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 7.64051
      },
      "ap-northeast-2": {
        "onDemand": 6.47703
      },
      "ap-south-1": {
        "onDemand": 8.60469
      },
      "eu-central-1": {
        "onDemand": 8.9589
      },
      "eu-north-1": {
        "onDemand": 7.59986
      },
      "eu-south-2": {
        "onDemand": 5.55133
      },
      "eu-west-2": {
        "onDemand": 9.15653
      },
      "us-east-1": {
        "onDemand": 5.26824
      },
      "us-east-2": {
        "onDemand": 5.26824
      },
      "us-west-2": {
        "onDemand": 5.26824
      },
      "us-west-2-lax-1": {
        "onDemand": 7.0601
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2",
      "us-west-2-lax-1"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "gr6.4xlarge",
    "apiName": "gr6.4xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 16,
    "memory": "128 GB",
    "network": "Up to 25 Gigabit",
    "storage": "600 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 2.2323,
        "reserved": 1.45323
      },
      "ap-northeast-2": {
        "onDemand": 1.8926,
        "reserved": 1.23208
      },
      "ap-south-1": {
        "onDemand": 1.8483,
        "reserved": 1.20324
      },
      "ap-southeast-2": {
        "onDemand": 2.0012,
        "reserved": 1.30278
      },
      "ap-southeast-5": {
        "onDemand": 1.9388,
        "reserved": 1.26216
      },
      "ca-central-1": {
        "onDemand": 1.709,
        "reserved": 1.11256
      },
      "eu-central-1": {
        "onDemand": 1.9248,
        "reserved": 1.25304
      },
      "eu-central-2": {
        "onDemand": 2.1649,
        "reserved": 1.40935
      },
      "eu-north-1": {
        "onDemand": 1.6326,
        "reserved": 1.06282
      },
      "eu-south-2": {
        "onDemand": 1.6218,
        "reserved": 1.05579
      },
      "eu-west-2": {
        "onDemand": 1.9539,
        "reserved": 1.27199
      },
      "eu-west-3": {
        "onDemand": 1.9538,
        "reserved": 1.27192
      },
      "sa-east-1": {
        "onDemand": 2.6164,
        "reserved": 1.70328
      },
      "us-east-1": {
        "onDemand": 1.5392,
        "reserved": 1.00202
      },
      "us-east-2": {
        "onDemand": 1.5392,
        "reserved": 1.00202
      },
      "us-gov-east-1": {
        "onDemand": 1.9401,
        "reserved": 1.26301
      },
      "us-gov-west-1": {
        "onDemand": 1.9401,
        "reserved": 1.26301
      },
      "us-west-2": {
        "onDemand": 1.5392,
        "reserved": 1.00202
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "gr6.8xlarge",
    "apiName": "gr6.8xlarge",
    "gpu": "NVIDIA L4",
    "gpuCount": 1,
    "gpuMemory": "24 GB GDDR6",
    "vcpu": 32,
    "memory": "256 GB",
    "network": "25 Gigabit",
    "storage": "450 GB (2 × 225 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 3.54801,
        "reserved": 2.30976
      },
      "ap-northeast-2": {
        "onDemand": 3.00809,
        "reserved": 1.95827
      },
      "ap-south-1": {
        "onDemand": 2.93768,
        "reserved": 1.91243
      },
      "ap-southeast-2": {
        "onDemand": 3.1807,
        "reserved": 2.07064
      },
      "ap-southeast-5": {
        "onDemand": 3.08152,
        "reserved": 2.00607
      },
      "ca-central-1": {
        "onDemand": 2.71628,
        "reserved": 1.7683
      },
      "eu-central-1": {
        "onDemand": 3.05927,
        "reserved": 1.99159
      },
      "eu-central-2": {
        "onDemand": 3.44089,
        "reserved": 2.24002
      },
      "eu-north-1": {
        "onDemand": 2.59485,
        "reserved": 1.68925
      },
      "eu-south-2": {
        "onDemand": 2.57768,
        "reserved": 1.67807
      },
      "eu-west-2": {
        "onDemand": 3.10552,
        "reserved": 2.0217
      },
      "eu-west-3": {
        "onDemand": 3.10536,
        "reserved": 2.02159
      },
      "sa-east-1": {
        "onDemand": 4.1585,
        "reserved": 2.70718
      },
      "us-east-1": {
        "onDemand": 2.4464,
        "reserved": 1.59261
      },
      "us-east-2": {
        "onDemand": 2.4464,
        "reserved": 1.59261
      },
      "us-gov-east-1": {
        "onDemand": 3.08359,
        "reserved": 2.00742
      },
      "us-gov-west-1": {
        "onDemand": 3.08359,
        "reserved": 2.00742
      },
      "us-west-2": {
        "onDemand": 2.4464,
        "reserved": 1.59261
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-5",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "gr6f.4xlarge",
    "apiName": "gr6f.4xlarge",
    "gpu": "NVIDIA L40",
    "gpuCount": 0.5,
    "gpuMemory": "48 GB GDDR6",
    "vcpu": 16,
    "memory": "128 GB",
    "network": "Up to 25 Gigabit",
    "storage": "450 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.54602
      },
      "ap-northeast-2": {
        "onDemand": 1.31075
      },
      "ap-south-1": {
        "onDemand": 1.28007
      },
      "ap-southeast-2": {
        "onDemand": 1.38597
      },
      "ca-central-1": {
        "onDemand": 1.1836
      },
      "eu-central-1": {
        "onDemand": 1.33305
      },
      "eu-north-1": {
        "onDemand": 1.13069
      },
      "eu-south-2": {
        "onDemand": 1.19925
      },
      "eu-west-2": {
        "onDemand": 1.35321
      },
      "sa-east-1": {
        "onDemand": 1.81203
      },
      "us-east-1": {
        "onDemand": 1.066
      },
      "us-east-2": {
        "onDemand": 1.066
      },
      "us-west-2": {
        "onDemand": 1.066
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "inf1.24xlarge",
    "apiName": "inf1.24xlarge",
    "gpu": "AWS Inferentia",
    "gpuCount": 0,
    "gpuMemory": "8 GB",
    "vcpu": 96,
    "memory": "192 GB",
    "network": "100 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "af-south-1": {
        "onDemand": 6.249,
        "reserved": 3.937
      },
      "ap-east-1": {
        "onDemand": 7.274,
        "reserved": 4.583
      },
      "ap-northeast-1": {
        "onDemand": 6.376,
        "reserved": 4.017
      },
      "ap-northeast-2": {
        "onDemand": 5.812,
        "reserved": 3.661
      },
      "ap-south-1": {
        "onDemand": 4.965,
        "reserved": 3.128
      },
      "ap-southeast-1": {
        "onDemand": 6.376,
        "reserved": 4.017
      },
      "ap-southeast-2": {
        "onDemand": 5.902,
        "reserved": 3.718
      },
      "ca-central-1": {
        "onDemand": 5.26,
        "reserved": 3.314
      },
      "eu-central-1": {
        "onDemand": 5.902,
        "reserved": 3.718
      },
      "eu-north-1": {
        "onDemand": 5.016,
        "reserved": 3.16
      },
      "eu-south-1": {
        "onDemand": 5.53,
        "reserved": 3.774
      },
      "eu-west-1": {
        "onDemand": 5.26,
        "reserved": 3.314
      },
      "eu-west-2": {
        "onDemand": 5.53,
        "reserved": 3.484
      },
      "eu-west-3": {
        "onDemand": 5.517,
        "reserved": 3.476
      },
      "me-south-1": {
        "onDemand": 5.786,
        "reserved": 3.949
      },
      "sa-east-1": {
        "onDemand": 7.8,
        "reserved": 4.914
      },
      "us-east-1": {
        "onDemand": 4.721,
        "reserved": 2.974
      },
      "us-east-2": {
        "onDemand": 4.721,
        "reserved": 2.974
      },
      "us-gov-east-1": {
        "onDemand": 5.953,
        "reserved": 3.75
      },
      "us-gov-west-1": {
        "onDemand": 5.953,
        "reserved": 3.75
      },
      "us-west-1": {
        "onDemand": 5.671,
        "reserved": 3.573
      },
      "us-west-2": {
        "onDemand": 4.721,
        "reserved": 2.974
      }
    },
    "availability": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "inf1.2xlarge",
    "apiName": "inf1.2xlarge",
    "gpu": "AWS Inferentia",
    "gpuCount": 0,
    "gpuMemory": "8 GB",
    "vcpu": 8,
    "memory": "16 GB",
    "network": "Up to 25 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-east-1": {
        "onDemand": 0.558,
        "reserved": 0.351
      },
      "ap-northeast-1": {
        "onDemand": 0.489,
        "reserved": 0.308
      },
      "ap-northeast-2": {
        "onDemand": 0.446,
        "reserved": 0.281
      },
      "ap-south-1": {
        "onDemand": 0.381,
        "reserved": 0.24
      },
      "ap-southeast-1": {
        "onDemand": 0.489,
        "reserved": 0.308
      },
      "ap-southeast-2": {
        "onDemand": 0.453,
        "reserved": 0.285
      },
      "ca-central-1": {
        "onDemand": 0.403,
        "reserved": 0.254
      },
      "eu-central-1": {
        "onDemand": 0.453,
        "reserved": 0.285
      },
      "eu-north-1": {
        "onDemand": 0.385,
        "reserved": 0.242
      },
      "eu-south-1": {
        "onDemand": 0.424,
        "reserved": 0.289
      },
      "eu-west-1": {
        "onDemand": 0.403,
        "reserved": 0.254
      },
      "eu-west-2": {
        "onDemand": 0.424,
        "reserved": 0.267
      },
      "eu-west-3": {
        "onDemand": 0.423,
        "reserved": 0.266
      },
      "me-south-1": {
        "onDemand": 0.444,
        "reserved": 0.303
      },
      "sa-east-1": {
        "onDemand": 0.598,
        "reserved": 0.377
      },
      "us-east-1": {
        "onDemand": 0.362,
        "reserved": 0.228
      },
      "us-east-2": {
        "onDemand": 0.362,
        "reserved": 0.228
      },
      "us-gov-east-1": {
        "onDemand": 0.456,
        "reserved": 0.288
      },
      "us-gov-west-1": {
        "onDemand": 0.456,
        "reserved": 0.288
      },
      "us-west-1": {
        "onDemand": 0.435,
        "reserved": 0.274
      },
      "us-west-2": {
        "onDemand": 0.362,
        "reserved": 0.228
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "inf1.6xlarge",
    "apiName": "inf1.6xlarge",
    "gpu": "AWS Inferentia",
    "gpuCount": 0,
    "gpuMemory": "8 GB",
    "vcpu": 24,
    "memory": "48 GB",
    "network": "25 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-east-1": {
        "onDemand": 1.819,
        "reserved": 1.146
      },
      "ap-northeast-1": {
        "onDemand": 1.594,
        "reserved": 1.004
      },
      "ap-northeast-2": {
        "onDemand": 1.453,
        "reserved": 0.915
      },
      "ap-south-1": {
        "onDemand": 1.241,
        "reserved": 0.782
      },
      "ap-southeast-1": {
        "onDemand": 1.594,
        "reserved": 1.004
      },
      "ap-southeast-2": {
        "onDemand": 1.475,
        "reserved": 0.93
      },
      "ca-central-1": {
        "onDemand": 1.315,
        "reserved": 0.828
      },
      "eu-central-1": {
        "onDemand": 1.475,
        "reserved": 0.93
      },
      "eu-north-1": {
        "onDemand": 1.254,
        "reserved": 0.79
      },
      "eu-south-1": {
        "onDemand": 1.382,
        "reserved": 0.943
      },
      "eu-west-1": {
        "onDemand": 1.315,
        "reserved": 0.828
      },
      "eu-west-2": {
        "onDemand": 1.382,
        "reserved": 0.871
      },
      "eu-west-3": {
        "onDemand": 1.379,
        "reserved": 0.869
      },
      "me-south-1": {
        "onDemand": 1.447,
        "reserved": 0.987
      },
      "sa-east-1": {
        "onDemand": 1.95,
        "reserved": 1.229
      },
      "us-east-1": {
        "onDemand": 1.18,
        "reserved": 0.744
      },
      "us-east-2": {
        "onDemand": 1.18,
        "reserved": 0.744
      },
      "us-gov-east-1": {
        "onDemand": 1.488,
        "reserved": 0.938
      },
      "us-gov-west-1": {
        "onDemand": 1.488,
        "reserved": 0.938
      },
      "us-west-1": {
        "onDemand": 1.418,
        "reserved": 0.893
      },
      "us-west-2": {
        "onDemand": 1.18,
        "reserved": 0.744
      }
    },
    "availability": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "inf1.xlarge",
    "apiName": "inf1.xlarge",
    "gpu": "AWS Inferentia",
    "gpuCount": 0,
    "gpuMemory": "8 GB",
    "vcpu": 4,
    "memory": "8 GB",
    "network": "Up to 25 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "af-south-1": {
        "onDemand": 0.302,
        "reserved": 0.19
      },
      "ap-east-1": {
        "onDemand": 0.352,
        "reserved": 0.221
      },
      "ap-northeast-1": {
        "onDemand": 0.308,
        "reserved": 0.194
      },
      "ap-northeast-2": {
        "onDemand": 0.281,
        "reserved": 0.177
      },
      "ap-south-1": {
        "onDemand": 0.24,
        "reserved": 0.151
      },
      "ap-southeast-1": {
        "onDemand": 0.308,
        "reserved": 0.194
      },
      "ap-southeast-2": {
        "onDemand": 0.285,
        "reserved": 0.18
      },
      "ca-central-1": {
        "onDemand": 0.254,
        "reserved": 0.16
      },
      "eu-central-1": {
        "onDemand": 0.285,
        "reserved": 0.18
      },
      "eu-north-1": {
        "onDemand": 0.242,
        "reserved": 0.153
      },
      "eu-south-1": {
        "onDemand": 0.267,
        "reserved": 0.182
      },
      "eu-west-1": {
        "onDemand": 0.254,
        "reserved": 0.16
      },
      "eu-west-2": {
        "onDemand": 0.267,
        "reserved": 0.168
      },
      "eu-west-3": {
        "onDemand": 0.267,
        "reserved": 0.168
      },
      "me-south-1": {
        "onDemand": 0.28,
        "reserved": 0.191
      },
      "sa-east-1": {
        "onDemand": 0.377,
        "reserved": 0.237
      },
      "us-east-1": {
        "onDemand": 0.228,
        "reserved": 0.144
      },
      "us-east-2": {
        "onDemand": 0.228,
        "reserved": 0.144
      },
      "us-gov-east-1": {
        "onDemand": 0.288,
        "reserved": 0.181
      },
      "us-gov-west-1": {
        "onDemand": 0.288,
        "reserved": 0.181
      },
      "us-west-1": {
        "onDemand": 0.274,
        "reserved": 0.173
      },
      "us-west-2": {
        "onDemand": 0.228,
        "reserved": 0.144
      }
    },
    "availability": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "inf2.24xlarge",
    "apiName": "inf2.24xlarge",
    "gpu": "AWS Inferentia2",
    "gpuCount": 0,
    "gpuMemory": "32 GB HBM",
    "vcpu": 96,
    "memory": "384 GB",
    "network": "50 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 9.73595,
        "reserved": 6.13365
      },
      "ap-south-1": {
        "onDemand": 8.43782,
        "reserved": 5.31583
      },
      "ap-southeast-1": {
        "onDemand": 9.08689,
        "reserved": 5.72474
      },
      "ap-southeast-2": {
        "onDemand": 8.43782,
        "reserved": 5.31583
      },
      "eu-central-1": {
        "onDemand": 9.73595,
        "reserved": 6.13365
      },
      "eu-north-1": {
        "onDemand": 7.1397,
        "reserved": 4.49801
      },
      "eu-west-1": {
        "onDemand": 8.11329,
        "reserved": 5.11137
      },
      "eu-west-2": {
        "onDemand": 9.73595,
        "reserved": 6.13365
      },
      "eu-west-3": {
        "onDemand": 9.08689,
        "reserved": 5.72474
      },
      "sa-east-1": {
        "onDemand": 11.03408,
        "reserved": 6.95147
      },
      "us-east-1": {
        "onDemand": 6.49063,
        "reserved": 4.0891
      },
      "us-east-2": {
        "onDemand": 6.49063,
        "reserved": 4.0891
      },
      "us-west-2": {
        "onDemand": 6.49063,
        "reserved": 4.0891
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "inf2.48xlarge",
    "apiName": "inf2.48xlarge",
    "gpu": "AWS Inferentia2",
    "gpuCount": 0,
    "gpuMemory": "32 GB HBM",
    "vcpu": 192,
    "memory": "768 GB",
    "network": "100 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 19.4719,
        "reserved": 12.2673
      },
      "ap-south-1": {
        "onDemand": 16.87565,
        "reserved": 10.63166
      },
      "ap-southeast-1": {
        "onDemand": 18.17377,
        "reserved": 11.44948
      },
      "ap-southeast-2": {
        "onDemand": 16.87565,
        "reserved": 10.63166
      },
      "eu-central-1": {
        "onDemand": 19.4719,
        "reserved": 12.2673
      },
      "eu-north-1": {
        "onDemand": 14.27939,
        "reserved": 8.99602
      },
      "eu-west-1": {
        "onDemand": 16.22658,
        "reserved": 10.22275
      },
      "eu-west-2": {
        "onDemand": 19.4719,
        "reserved": 12.2673
      },
      "eu-west-3": {
        "onDemand": 18.17377,
        "reserved": 11.44948
      },
      "sa-east-1": {
        "onDemand": 22.06815,
        "reserved": 13.90294
      },
      "us-east-1": {
        "onDemand": 12.98127,
        "reserved": 8.1782
      },
      "us-east-2": {
        "onDemand": 12.98127,
        "reserved": 8.1782
      },
      "us-west-2": {
        "onDemand": 12.98127,
        "reserved": 8.1782
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "inf2.8xlarge",
    "apiName": "inf2.8xlarge",
    "gpu": "AWS Inferentia2",
    "gpuCount": 0,
    "gpuMemory": "32 GB HBM",
    "vcpu": 32,
    "memory": "128 GB",
    "network": "Up to 25 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 2.95179,
        "reserved": 1.85963
      },
      "ap-south-1": {
        "onDemand": 2.55822,
        "reserved": 1.61168
      },
      "ap-southeast-1": {
        "onDemand": 2.755,
        "reserved": 1.73565
      },
      "ap-southeast-2": {
        "onDemand": 2.55822,
        "reserved": 1.61168
      },
      "eu-central-1": {
        "onDemand": 2.95179,
        "reserved": 1.85963
      },
      "eu-north-1": {
        "onDemand": 2.16465,
        "reserved": 1.36373
      },
      "eu-west-1": {
        "onDemand": 2.45982,
        "reserved": 1.54969
      },
      "eu-west-2": {
        "onDemand": 2.95179,
        "reserved": 1.85963
      },
      "eu-west-3": {
        "onDemand": 2.755,
        "reserved": 1.73565
      },
      "sa-east-1": {
        "onDemand": 3.34536,
        "reserved": 2.10758
      },
      "us-east-1": {
        "onDemand": 1.96786,
        "reserved": 1.23975
      },
      "us-east-2": {
        "onDemand": 1.96786,
        "reserved": 1.23975
      },
      "us-west-2": {
        "onDemand": 1.96786,
        "reserved": 1.23975
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "inf2.xlarge",
    "apiName": "inf2.xlarge",
    "gpu": "AWS Inferentia2",
    "gpuCount": 0,
    "gpuMemory": "32 GB HBM",
    "vcpu": 4,
    "memory": "16 GB",
    "network": "Up to 15 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.1373,
        "reserved": 0.7165
      },
      "ap-northeast-2": {
        "onDemand": 0.90984
      },
      "ap-south-1": {
        "onDemand": 0.98566,
        "reserved": 0.62097
      },
      "ap-southeast-1": {
        "onDemand": 1.06148,
        "reserved": 0.66873
      },
      "ap-southeast-2": {
        "onDemand": 0.98566,
        "reserved": 0.62097
      },
      "eu-central-1": {
        "onDemand": 1.1373,
        "reserved": 0.7165
      },
      "eu-north-1": {
        "onDemand": 0.83402,
        "reserved": 0.52543
      },
      "eu-west-1": {
        "onDemand": 0.94775,
        "reserved": 0.59708
      },
      "eu-west-2": {
        "onDemand": 1.1373,
        "reserved": 0.7165
      },
      "eu-west-3": {
        "onDemand": 1.06148,
        "reserved": 0.66873
      },
      "sa-east-1": {
        "onDemand": 1.28894,
        "reserved": 0.81203
      },
      "us-east-1": {
        "onDemand": 0.7582,
        "reserved": 0.47767
      },
      "us-east-2": {
        "onDemand": 0.7582,
        "reserved": 0.47767
      },
      "us-west-2": {
        "onDemand": 0.7582,
        "reserved": 0.47767
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "p2.16xlarge",
    "apiName": "p2.16xlarge",
    "gpu": "NVIDIA K80",
    "gpuCount": 16,
    "gpuMemory": "12 GB GDDR5",
    "vcpu": 64,
    "memory": "732 GB",
    "network": "20 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 24.672
      },
      "ap-northeast-2": {
        "onDemand": 23.44
      },
      "ap-south-1": {
        "onDemand": 27.488
      },
      "ap-southeast-1": {
        "onDemand": 27.488
      },
      "ap-southeast-2": {
        "onDemand": 24.672
      },
      "eu-central-1": {
        "onDemand": 21.216
      },
      "eu-west-1": {
        "onDemand": 15.552
      },
      "us-east-1": {
        "onDemand": 14.4
      },
      "us-east-2": {
        "onDemand": 14.4
      },
      "us-gov-west-1": {
        "onDemand": 17.28
      },
      "us-west-2": {
        "onDemand": 14.4
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p2.8xlarge",
    "apiName": "p2.8xlarge",
    "gpu": "NVIDIA K80",
    "gpuCount": 8,
    "gpuMemory": "12 GB GDDR5",
    "vcpu": 32,
    "memory": "488 GB",
    "network": "10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 12.336
      },
      "ap-northeast-2": {
        "onDemand": 11.72
      },
      "ap-south-1": {
        "onDemand": 13.744
      },
      "ap-southeast-1": {
        "onDemand": 13.744
      },
      "ap-southeast-2": {
        "onDemand": 12.336
      },
      "eu-central-1": {
        "onDemand": 10.608
      },
      "eu-west-1": {
        "onDemand": 7.776
      },
      "us-east-1": {
        "onDemand": 7.2
      },
      "us-east-2": {
        "onDemand": 7.2
      },
      "us-gov-west-1": {
        "onDemand": 8.64
      },
      "us-west-2": {
        "onDemand": 7.2
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p2.xlarge",
    "apiName": "p2.xlarge",
    "gpu": "NVIDIA K80",
    "gpuCount": 1,
    "gpuMemory": "12 GB GDDR5",
    "vcpu": 4,
    "memory": "61 GB",
    "network": "High",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 1.542
      },
      "ap-northeast-2": {
        "onDemand": 1.465
      },
      "ap-south-1": {
        "onDemand": 1.718
      },
      "ap-southeast-1": {
        "onDemand": 1.718
      },
      "ap-southeast-2": {
        "onDemand": 1.542
      },
      "eu-central-1": {
        "onDemand": 1.326
      },
      "eu-west-1": {
        "onDemand": 0.972
      },
      "us-east-1": {
        "onDemand": 0.9
      },
      "us-east-2": {
        "onDemand": 0.9
      },
      "us-gov-west-1": {
        "onDemand": 1.08
      },
      "us-west-2": {
        "onDemand": 0.9
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p3.16xlarge",
    "apiName": "p3.16xlarge",
    "gpu": "NVIDIA V100",
    "gpuCount": 8,
    "gpuMemory": "16 GB HBM2",
    "vcpu": 64,
    "memory": "488 GB",
    "network": "25 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 33.552
      },
      "ap-northeast-2": {
        "onDemand": 33.872
      },
      "ap-southeast-1": {
        "onDemand": 33.872
      },
      "ap-southeast-2": {
        "onDemand": 33.872
      },
      "ca-central-1": {
        "onDemand": 26.928
      },
      "eu-central-1": {
        "onDemand": 30.584
      },
      "eu-west-1": {
        "onDemand": 26.44
      },
      "eu-west-2": {
        "onDemand": 28.712
      },
      "us-east-1": {
        "onDemand": 24.48
      },
      "us-east-2": {
        "onDemand": 24.48
      },
      "us-gov-west-1": {
        "onDemand": 29.376
      },
      "us-west-2": {
        "onDemand": 24.48
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p3.2xlarge",
    "apiName": "p3.2xlarge",
    "gpu": "NVIDIA V100",
    "gpuCount": 1,
    "gpuMemory": "16 GB HBM2",
    "vcpu": 8,
    "memory": "61 GB",
    "network": "Up to 10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 4.194
      },
      "ap-northeast-2": {
        "onDemand": 4.234
      },
      "ap-southeast-1": {
        "onDemand": 4.234
      },
      "ap-southeast-2": {
        "onDemand": 4.234
      },
      "ca-central-1": {
        "onDemand": 3.366
      },
      "eu-central-1": {
        "onDemand": 3.823
      },
      "eu-west-1": {
        "onDemand": 3.305
      },
      "eu-west-2": {
        "onDemand": 3.589
      },
      "us-east-1": {
        "onDemand": 3.06
      },
      "us-east-2": {
        "onDemand": 3.06
      },
      "us-gov-west-1": {
        "onDemand": 3.672
      },
      "us-west-2": {
        "onDemand": 3.06
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p3.8xlarge",
    "apiName": "p3.8xlarge",
    "gpu": "NVIDIA V100",
    "gpuCount": 4,
    "gpuMemory": "16 GB HBM2",
    "vcpu": 32,
    "memory": "244 GB",
    "network": "10 Gigabit",
    "storage": "EBS Only",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 16.776
      },
      "ap-northeast-2": {
        "onDemand": 16.936
      },
      "ap-southeast-1": {
        "onDemand": 16.936
      },
      "ap-southeast-2": {
        "onDemand": 16.936
      },
      "ca-central-1": {
        "onDemand": 13.464
      },
      "eu-central-1": {
        "onDemand": 15.292
      },
      "eu-west-1": {
        "onDemand": 13.22
      },
      "eu-west-2": {
        "onDemand": 14.356
      },
      "us-east-1": {
        "onDemand": 12.24
      },
      "us-east-2": {
        "onDemand": 12.24
      },
      "us-gov-west-1": {
        "onDemand": 14.688
      },
      "us-west-2": {
        "onDemand": 12.24
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p3dn.24xlarge",
    "apiName": "p3dn.24xlarge",
    "gpu": "NVIDIA V100",
    "gpuCount": 8,
    "gpuMemory": "32 GB HBM2",
    "vcpu": 96,
    "memory": "768 GB",
    "network": "100 Gigabit",
    "storage": "900 GB (2 × 450 GB SSD)",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 42.783,
        "reserved": 27.025
      },
      "eu-west-1": {
        "onDemand": 33.711,
        "reserved": 20.817
      },
      "us-east-1": {
        "onDemand": 31.212,
        "reserved": 19.215
      },
      "us-gov-east-1": {
        "onDemand": 37.454,
        "reserved": 23.057
      },
      "us-gov-west-1": {
        "onDemand": 37.454,
        "reserved": 23.057
      },
      "us-west-2": {
        "onDemand": 31.212,
        "reserved": 19.215
      }
    },
    "availability": [
      "ap-northeast-1",
      "eu-west-1",
      "us-east-1",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p4d.24xlarge",
    "apiName": "p4d.24xlarge",
    "gpu": "NVIDIA A100",
    "gpuCount": 8,
    "gpuMemory": "320 GB HBM2",
    "vcpu": 96,
    "memory": "1152 GiB",
    "network": "400 Gbps EFA",
    "storage": "8 x 1 TB NVMe SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 30.09784,
        "reserved": 19.579678
      },
      "ap-northeast-2": {
        "onDemand": 30.41028,
        "reserved": 19.280046
      },
      "ap-south-1": {
        "onDemand": 26.3444,
        "reserved": 17.02575
      },
      "ap-southeast-1": {
        "onDemand": 26.34917,
        "reserved": 16.705312
      },
      "ap-southeast-2": {
        "onDemand": 28.54493,
        "reserved": 18.097419
      },
      "ca-central-1": {
        "onDemand": 25.25174,
        "reserved": 16.009544
      },
      "eu-central-1": {
        "onDemand": 27.43298,
        "reserved": 17.392445
      },
      "eu-north-1": {
        "onDemand": 23.71569
      },
      "eu-west-1": {
        "onDemand": 23.71569,
        "reserved": 15.08188
      },
      "eu-west-2": {
        "onDemand": 28.54493
      },
      "sa-east-1": {
        "onDemand": 35.5569,
        "reserved": 22.684095
      },
      "us-east-1": {
        "onDemand": 21.957642,
        "reserved": 13.921094
      },
      "us-east-2": {
        "onDemand": 21.95764,
        "reserved": 13.921092
      },
      "us-gov-west-1": {
        "onDemand": 26.3511,
        "reserved": 16.706536
      },
      "us-west-2": {
        "onDemand": 21.95764,
        "reserved": 13.921092
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance",
    "ebsBandwidth": "19 Gbps",
    "gpuInterconnect": "600 GB/s NVSwitch",
    "gpuDirectRDMA": true,
    "source": "merged"
  },
  {
    "name": "p4de.24xlarge",
    "apiName": "p4de.24xlarge",
    "gpu": "NVIDIA A100",
    "gpuCount": 8,
    "gpuMemory": "640 GB HBM2e",
    "vcpu": 96,
    "memory": "1152 GiB",
    "network": "400 Gbps EFA",
    "storage": "8 x 1 TB NVMe SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 37.6223,
        "reserved": 24.474597
      },
      "ap-southeast-1": {
        "onDemand": 32.93646,
        "reserved": 20.881639
      },
      "eu-central-1": {
        "onDemand": 34.29122,
        "reserved": 21.740553
      },
      "il-central-1": {
        "onDemand": 35.57346,
        "reserved": 22.55349
      },
      "us-east-1": {
        "onDemand": 27.44705,
        "reserved": 17.401365
      },
      "us-west-2": {
        "onDemand": 27.44705,
        "reserved": 17.401365
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-southeast-1",
      "eu-central-1",
      "il-central-1",
      "us-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance",
    "ebsBandwidth": "19 Gbps",
    "gpuInterconnect": "600 GB/s NVSwitch",
    "gpuDirectRDMA": true,
    "source": "merged"
  },
  {
    "name": "p5.48xlarge",
    "apiName": "p5.48xlarge",
    "gpu": "NVIDIA H100",
    "gpuCount": 8,
    "gpuMemory": "640 GB HBM3",
    "vcpu": 192,
    "memory": "2048 GiB",
    "network": "3200 Gbps EFAv2",
    "storage": "8 x 3.84 TB NVMe SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 68.8
      },
      "ap-northeast-2": {
        "onDemand": 75.9552
      },
      "ap-south-1": {
        "onDemand": 66.048
      },
      "ap-southeast-2": {
        "onDemand": 71.552
      },
      "ap-southeast-3": {
        "onDemand": 75.9552
      },
      "ca-central-1": {
        "onDemand": 63.296
      },
      "eu-north-1": {
        "onDemand": 58.8928
      },
      "eu-west-2": {
        "onDemand": 71.552
      },
      "sa-east-1": {
        "onDemand": 92.4672
      },
      "us-east-1": {
        "onDemand": 55.04
      },
      "us-east-1-atl-1": {
        "onDemand": 55.04
      },
      "us-east-2": {
        "onDemand": 55.04
      },
      "us-gov-west-1": {
        "onDemand": 66.048
      },
      "us-west-1": {
        "onDemand": 68.8
      },
      "us-west-2": {
        "onDemand": 55.04
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-north-1",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-1-atl-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance",
    "ebsBandwidth": "80 Gbps",
    "gpuInterconnect": "900 GB/s NVSwitch",
    "gpuDirectRDMA": true,
    "source": "merged"
  },
  {
    "name": "p5.4xlarge",
    "apiName": "p5.4xlarge",
    "gpu": "NVIDIA H100",
    "gpuCount": 1,
    "gpuMemory": "80 GB HBM3",
    "vcpu": 16,
    "memory": "256 GB",
    "network": "100 Gigabit",
    "storage": "3800 GB SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 8.6
      },
      "ap-south-1": {
        "onDemand": 8.256
      },
      "ap-southeast-2": {
        "onDemand": 8.944
      },
      "ap-southeast-3": {
        "onDemand": 9.4944
      },
      "eu-west-2": {
        "onDemand": 8.944
      },
      "sa-east-1": {
        "onDemand": 11.5584
      },
      "us-east-1": {
        "onDemand": 6.88
      },
      "us-east-2": {
        "onDemand": 6.88
      },
      "us-gov-west-1": {
        "onDemand": 8.256
      },
      "us-west-2": {
        "onDemand": 6.88
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p5e.48xlarge",
    "apiName": "p5e.48xlarge",
    "gpu": "NVIDIA H200",
    "gpuCount": 8,
    "gpuMemory": "1128 GB HBM3e",
    "vcpu": 192,
    "memory": "2048 GiB",
    "network": "3200 Gbps EFAv2",
    "storage": "8 x 3.84 TB NVMe SSD",
    "pricing": {},
    "availability": [],
    "generation": "preview",
    "family": "GPU instance",
    "ebsBandwidth": "80 Gbps",
    "gpuInterconnect": "900 GB/s NVSwitch",
    "gpuDirectRDMA": true,
    "source": "merged"
  },
  {
    "name": "p5en.48xlarge",
    "apiName": "p5en.48xlarge",
    "gpu": "NVIDIA H200",
    "gpuCount": 8,
    "gpuMemory": "1128 GB HBM3e",
    "vcpu": 192,
    "memory": "2048 GiB",
    "network": "3200 Gbps EFAv3",
    "storage": "8 x 3.84 TB NVMe SSD",
    "pricing": {
      "ap-northeast-1": {
        "onDemand": 79.12
      },
      "ap-northeast-2": {
        "onDemand": 87.34848
      },
      "ap-south-1": {
        "onDemand": 75.9552
      },
      "ap-southeast-3": {
        "onDemand": 87.34848
      },
      "eu-north-1": {
        "onDemand": 67.72672
      },
      "eu-south-2": {
        "onDemand": 68.35968
      },
      "me-central-1": {
        "onDemand": 75.9552
      },
      "us-east-1": {
        "onDemand": 63.296
      },
      "us-east-1-atl-1": {
        "onDemand": 63.296
      },
      "us-east-2": {
        "onDemand": 63.296
      },
      "us-gov-west-1": {
        "onDemand": 75.9552
      },
      "us-west-1": {
        "onDemand": 79.12
      },
      "us-west-2": {
        "onDemand": 63.296
      }
    },
    "availability": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-3",
      "eu-north-1",
      "eu-south-2",
      "me-central-1",
      "us-east-1",
      "us-east-1-atl-1",
      "us-east-2",
      "us-gov-west-1",
      "us-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance",
    "ebsBandwidth": "100 Gbps",
    "gpuInterconnect": "900 GB/s NVSwitch",
    "gpuDirectRDMA": true,
    "source": "merged"
  },
  {
    "name": "p6-b200.48xlarge",
    "apiName": "p6-b200.48xlarge",
    "gpu": "NVIDIA B200 Blackwell",
    "gpuCount": 8,
    "gpuMemory": "1432 GB HBM3e",
    "vcpu": 192,
    "memory": "2048 GiB",
    "network": "3200 Gbps EFAv4",
    "storage": "8 x 3.84 TB NVMe SSD",
    "pricing": {
      "ap-south-1": {
        "onDemand": 160.64525
      },
      "us-east-1": {
        "onDemand": 113.9328
      },
      "us-east-1-atl-1": {
        "onDemand": 113.9328
      },
      "us-east-2": {
        "onDemand": 113.9328
      },
      "us-gov-east-1": {
        "onDemand": 136.71936
      },
      "us-gov-west-1": {
        "onDemand": 136.71936
      },
      "us-west-2": {
        "onDemand": 113.9328
      }
    },
    "availability": [
      "ap-south-1",
      "us-east-1",
      "us-east-1-atl-1",
      "us-east-2",
      "us-gov-east-1",
      "us-gov-west-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance",
    "ebsBandwidth": "100 Gbps",
    "gpuInterconnect": "1800 GB/s NVLink",
    "gpuDirectRDMA": true,
    "source": "merged"
  },
  {
    "name": "p6-b300.48xlarge",
    "apiName": "p6-b300.48xlarge",
    "gpu": "NVIDIA B300 Blackwell",
    "gpuCount": 8,
    "gpuMemory": "262 GB HBM3e",
    "vcpu": 192,
    "memory": "4096 GB",
    "network": "6400 Gigabit",
    "storage": "3800 GB (8 × 475 GB SSD)",
    "pricing": {
      "ap-northeast-2": {
        "onDemand": 209.1735
      },
      "us-east-1": {
        "onDemand": 142.416
      },
      "us-east-1-atl-1": {
        "onDemand": 142.416
      },
      "us-gov-east-1": {
        "onDemand": 170.9
      },
      "us-west-2": {
        "onDemand": 142.416
      }
    },
    "availability": [
      "ap-northeast-2",
      "us-east-1",
      "us-east-1-atl-1",
      "us-gov-east-1",
      "us-west-2"
    ],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "p6e-gb200.36xlarge",
    "apiName": "p6e-gb200.36xlarge",
    "gpu": "NVIDIA GB200 Grace Blackwell",
    "gpuCount": 4,
    "gpuMemory": "740 GB HBM3e",
    "vcpu": 144,
    "memory": "960 GiB",
    "network": "1600 Gbps EFAv4",
    "storage": "22.5 TB NVMe SSD",
    "pricing": {},
    "availability": [],
    "generation": "preview",
    "family": "GPU instance",
    "ebsBandwidth": "60 Gbps",
    "gpuInterconnect": "1800 GB/s NVLink",
    "gpuDirectRDMA": true,
    "source": "merged"
  },
  {
    "name": "trn1.2xlarge",
    "apiName": "trn1.2xlarge",
    "gpu": "AWS Trainium",
    "gpuCount": 0,
    "gpuMemory": "32 GB HBM",
    "vcpu": 8,
    "memory": "32 GB",
    "network": "Up to 12.5 Gigabit",
    "storage": "474 GB SSD",
    "pricing": {
      "us-east-1": {
        "onDemand": 1.34375,
        "reserved": 0.82681
      },
      "us-east-2": {
        "onDemand": 1.34375,
        "reserved": 0.82681
      },
      "us-west-2": {
        "onDemand": 1.34375,
        "reserved": 0.82681
      }
    },
    "availability": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "trn1.32xlarge",
    "apiName": "trn1.32xlarge",
    "gpu": "AWS Trainium",
    "gpuCount": 0,
    "gpuMemory": "32 GB HBM",
    "vcpu": 128,
    "memory": "512 GB",
    "network": "8x 100 Gigabit",
    "storage": "1900 GB (4 × 475 GB SSD)",
    "pricing": {
      "us-east-1": {
        "onDemand": 21.5,
        "reserved": 13.22895
      },
      "us-east-2": {
        "onDemand": 21.5,
        "reserved": 13.22895
      },
      "us-west-2": {
        "onDemand": 21.5,
        "reserved": 13.22895
      }
    },
    "availability": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "trn1n.32xlarge",
    "apiName": "trn1n.32xlarge",
    "gpu": "AWS Trainium",
    "gpuCount": 0,
    "gpuMemory": "32 GB HBM",
    "vcpu": 128,
    "memory": "512 GB",
    "network": "16x 100 Gigabit",
    "storage": "1900 GB (4 × 475 GB SSD)",
    "pricing": {
      "us-east-1": {
        "onDemand": 24.78,
        "reserved": 15.24713
      },
      "us-east-2": {
        "onDemand": 24.78,
        "reserved": 15.24713
      },
      "us-west-2": {
        "onDemand": 24.78,
        "reserved": 15.24713
      }
    },
    "availability": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "generation": "current",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "trn2.48xlarge",
    "apiName": "trn2.48xlarge",
    "gpu": "AWS Trainium2",
    "gpuCount": 0,
    "gpuMemory": "96 GB HBM3",
    "vcpu": 192,
    "memory": "2048 GB",
    "network": "16x 200 Gigabit",
    "storage": "1900 GB (4 × 475 GB SSD)",
    "pricing": {},
    "availability": [],
    "generation": "preview",
    "family": "Machine Learning ASIC Instances"
  },
  {
    "name": "u-p6e-gb200x36",
    "gpu": "NVIDIA GB200 Grace Blackwell",
    "gpuCount": 36,
    "gpuMemory": "6660 GB HBM3e",
    "vcpu": 1296,
    "memory": "8640 GiB",
    "network": "14400 Gbps EFAv4",
    "storage": "202.5 TB NVMe SSD",
    "ebsBandwidth": "540 Gbps",
    "gpuInterconnect": "1800 GB/s NVLink",
    "gpuDirectRDMA": true,
    "source": "aws_official",
    "pricing": {},
    "availability": [],
    "generation": "current",
    "family": "GPU instance"
  },
  {
    "name": "u-p6e-gb200x72",
    "gpu": "NVIDIA GB200 Grace Blackwell",
    "gpuCount": 72,
    "gpuMemory": "13320 GB HBM3e",
    "vcpu": 2592,
    "memory": "17280 GiB",
    "network": "28800 Gbps EFAv4",
    "storage": "405 TB NVMe SSD",
    "ebsBandwidth": "1080 Gbps",
    "gpuInterconnect": "1800 GB/s NVLink",
    "gpuDirectRDMA": true,
    "source": "aws_official",
    "pricing": {},
    "availability": [],
    "generation": "current",
    "family": "GPU instance"
  }
];
