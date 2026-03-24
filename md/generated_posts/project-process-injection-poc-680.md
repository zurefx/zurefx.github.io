---
TitleSEO: "Process Injection PoC | ZureFX Projects"
TitlePost: "Process Injection PoC"
Author: "ZureFX"
Description: "Open source security project: Process Injection PoC. Built for the community."
Keywords: "security, plugin, library, open source, extension"
URL: "https://zurefx.github.io/research/project-process-injection-poc-680.html"
URL_IMAGES: ""
Date: "2024-02-16"
Tags: "Security, Plugin, Library, Open Source, Extension"
Section: "projects"
Lang: "en"
main_img: "project-process-injection-poc-680"
Permalink: "/research/project-process-injection-poc-680.html"
BtnLabel: "View Project"
Pick: 0
Features: "impacket, ffuf, gobuster"
---
## Project Overview

### Description

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

## Features

### Key Features

- **hydra**: The kernel version was outdated and vulnerable to a publicly known exploit.
- **nmap**: The database credentials were hardcoded in the application source code.
- **ffuf**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **impacket**: Network traffic analysis revealed unencrypted communications containing user credentials.

## Installation

### Requirements

- Python 3.8+
- `wpscan`
- `hashcat`
- `mimikatz`

### Setup

```bash
git clone https://github.com/zurefx/project-process-injection-poc-680
cd project-process-injection-poc-680
pip install -r requirements.txt
```

## Usage

### Examples

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p25,993,636 10.53.65.176 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.
