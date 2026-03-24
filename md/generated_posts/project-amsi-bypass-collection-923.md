---
TitleSEO: "AMSI Bypass Collection | ZureFX Projects"
TitlePost: "AMSI Bypass Collection"
Author: "ZureFX"
Description: "Open source security project: AMSI Bypass Collection. Built for the community."
Keywords: "security, extension, library, cli"
URL: "https://zurefx.github.io/research/project-amsi-bypass-collection-923.html"
URL_IMAGES: ""
Date: "2024-06-19"
Tags: "Security, Extension, Library, CLI"
Section: "projects"
Lang: "en"
main_img: "project-amsi-bypass-collection-923"
Permalink: "/research/project-amsi-bypass-collection-923.html"
BtnLabel: "View Project"
Pick: 0
Features: "hydra, john, ffuf"
---
## Project Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

## Features

### Key Features

- **feroxbuster**: Group Policy Preferences contained encrypted but recoverable credentials.
- **gobuster**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **ffuf**: Initial enumeration revealed several interesting open ports on the target.
- **nmap**: Group Policy Preferences contained encrypted but recoverable credentials.

## Installation

### Requirements

- Python 3.8+
- `nmap`
- `rpcclient`
- `dcomexec`

### Setup

```bash
git clone https://github.com/zurefx/project-amsi-bypass-collection-923
cd project-amsi-bypass-collection-923
pip install -r requirements.txt
```

## Usage

### Examples

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.173.177/FUZZ
gobuster dir -u http://10.74.25.241/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Contributing

### How to Contribute

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.
