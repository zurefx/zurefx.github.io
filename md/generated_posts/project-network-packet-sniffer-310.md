---
TitleSEO: "Network Packet Sniffer | ZureFX Projects"
TitlePost: "Network Packet Sniffer"
Author: "ZureFX"
Description: "Open source security project: Network Packet Sniffer. Built for the community."
Keywords: "library, security, extension, tool"
URL: "https://zurefx.github.io/research/project-network-packet-sniffer-310.html"
URL_IMAGES: ""
Date: "2025-05-27"
Tags: "Library, Security, Extension, Tool"
Section: "projects"
Lang: "en"
main_img: "project-network-packet-sniffer-310"
Permalink: "/research/project-network-packet-sniffer-310.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, gobuster, ffuf"
---
## Project Overview

### Description

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Features

### Key Features

- **feroxbuster**: The web application was vulnerable to Server-Side Template Injection (SSTI).
- **nmap**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **hydra**: Privilege escalation was possible due to misconfigured sudo permissions.
- **john**: The target system was identified as running a vulnerable version of the service.

## Installation

### Requirements

- Python 3.8+
- `rubeus`
- `sharphound`
- `bloodhound`

### Setup

```bash
git clone https://github.com/zurefx/project-network-packet-sniffer-310
cd project-network-packet-sniffer-310
pip install -r requirements.txt
```

## Usage

### Examples

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
nmap -sCV -p5986,389,21 10.34.244.128 -oN scan.txt
crackmapexec smb 10.109.242.161 -u administrator -p 'P@ssw0rd!' --shares
```

## Contributing

### How to Contribute

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.
