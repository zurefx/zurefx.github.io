---
TitleSEO: "AMSI Bypass Collection | ZureFX Projects"
TitlePost: "AMSI Bypass Collection"
Author: "ZureFX"
Description: "Open source security project: AMSI Bypass Collection. Built for the community."
Keywords: "open source, extension, plugin"
URL: "https://zurefx.github.io/research/project-amsi-bypass-collection-733.html"
URL_IMAGES: ""
Date: "2024-07-05"
Tags: "Open Source, Extension, Plugin"
Section: "projects"
Lang: "en"
main_img: "project-amsi-bypass-collection-733"
Permalink: "/research/project-amsi-bypass-collection-733.html"
BtnLabel: "View Project"
Pick: 0
Features: "feroxbuster, evil-winrm, john"
---
## Project Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Features

### Key Features

- **nmap**: The kernel version was outdated and vulnerable to a publicly known exploit.
- **impacket**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **hashcat**: Weak file permissions allowed modification of critical system files.
- **gobuster**: Unconstrained delegation was enabled on the compromised machine.

## Installation

### Requirements

- Python 3.8+
- `socat`
- `sqlmap`
- `nmap`

### Setup

```bash
git clone https://github.com/zurefx/project-amsi-bypass-collection-733
cd project-amsi-bypass-collection-733
pip install -r requirements.txt
```

## Usage

### Examples

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p9200,9200,110 10.117.242.90 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.75.97/FUZZ
```

## Contributing

### How to Contribute

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.
