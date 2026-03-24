---
TitleSEO: "Evading Modern EDR Solutions | ZureFX Projects"
TitlePost: "Evading Modern EDR Solutions"
Author: "ZureFX"
Description: "Open source security project: Evading Modern EDR Solutions. Built for the community."
Keywords: "library, extension, open source, plugin, security"
URL: "https://zurefx.github.io/research/project-evading-modern-edr-solutions-737.html"
URL_IMAGES: ""
Date: "2025-11-01"
Tags: "Library, Extension, Open Source, Plugin, Security"
Section: "projects"
Lang: "en"
main_img: "project-evading-modern-edr-solutions-737"
Permalink: "/research/project-evading-modern-edr-solutions-737.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, hashcat, gobuster"
---
## Project Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Features

### Key Features

- **impacket**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **hashcat**: Weak file permissions allowed modification of critical system files.
- **hydra**: Privilege escalation was possible due to misconfigured sudo permissions.
- **nmap**: The kernel version was outdated and vulnerable to a publicly known exploit.

## Installation

### Requirements

- Python 3.8+
- `hydra`
- `dcomexec`
- `hashcat`

### Setup

```bash
git clone https://github.com/zurefx/project-evading-modern-edr-solutions-737
cd project-evading-modern-edr-solutions-737
pip install -r requirements.txt
```

## Usage

### Examples

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.119.27.245 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.19.43.140 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.
