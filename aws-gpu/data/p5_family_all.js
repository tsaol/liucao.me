// Auto-generated P5 Family data from instances.vantage.sh
// Last updated: 2026-08-26
// Includes: p5, p5e, p5en

var instanceData = [
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
    "source": "merged",
    "isNew": false,
    "year": "2023"
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
    "family": "GPU instance",
    "isNew": false,
    "year": "2023"
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
    "source": "merged",
    "isNew": true,
    "year": "2024"
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
    "source": "merged",
    "isNew": true,
    "year": "2024"
  }
];
