---
TitleSEO: "Network Packet Sniffer | ZureFX Projects"
TitlePost: "Network Packet Sniffer"
Author: "ZureFX"
Description: "Open source security project: Network Packet Sniffer. Built for the community."
Keywords: "open source, extension, tool, library, cli"
URL: "https://zurefx.github.io/research/project-network-packet-sniffer-163.html"
URL_IMAGES: ""
Date: "2025-10-01"
Tags: "Open Source, Extension, Tool, Library, CLI"
Section: "projects"
Lang: "en"
main_img: "project-network-packet-sniffer-163"
Permalink: "/research/project-network-packet-sniffer-163.html"
BtnLabel: "View Project"
Pick: 0
Features: "impacket, ffuf, feroxbuster"
---
## Project Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Features

### Key Features

- **gobuster**: The backup files contained sensitive information that should not have been accessible.
- **ffuf**: Command injection was possible through unsanitized user input in the search functionality.
- **feroxbuster**: Privilege escalation was possible due to misconfigured sudo permissions.
- **nmap**: Weak file permissions allowed modification of critical system files.

## Installation

### Requirements

- Python 3.8+
- `wpscan`
- `feroxbuster`
- `nmap`

### Setup

```bash
git clone https://github.com/zurefx/project-network-packet-sniffer-163
cd project-network-packet-sniffer-163
pip install -r requirements.txt
```

## Usage

### Examples

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.95.240
gobuster dir -u http://10.55.161.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p143,5986,5986 10.113.140.213 -oN scan.txt
```

## Contributing

### How to Contribute

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.
