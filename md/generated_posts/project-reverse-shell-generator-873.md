---
TitleSEO: "Reverse Shell Generator | ZureFX Projects"
TitlePost: "Reverse Shell Generator"
Author: "ZureFX"
Description: "Open source security project: Reverse Shell Generator. Built for the community."
Keywords: "plugin, security, library"
URL: "https://zurefx.github.io/research/project-reverse-shell-generator-873.html"
URL_IMAGES: ""
Date: "2025-04-18"
Tags: "Plugin, Security, Library"
Section: "projects"
Lang: "en"
main_img: "project-reverse-shell-generator-873"
Permalink: "/research/project-reverse-shell-generator-873.html"
BtnLabel: "View Project"
Pick: 0
Features: "evil-winrm, impacket, ffuf"
---
## Project Overview

### Description

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Features

### Key Features

- **hashcat**: Command injection was possible through unsanitized user input in the search functionality.
- **ffuf**: The web application was vulnerable to Server-Side Template Injection (SSTI).
- **gobuster**: Privilege escalation was possible due to misconfigured sudo permissions.
- **feroxbuster**: Network traffic analysis revealed unencrypted communications containing user credentials.

## Installation

### Requirements

- Python 3.8+
- `atexec`
- `ldapsearch`
- `smbexec`

### Setup

```bash
git clone https://github.com/zurefx/project-reverse-shell-generator-873
cd project-reverse-shell-generator-873
pip install -r requirements.txt
```

## Usage

### Examples

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.110.105
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.182.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
evil-winrm -i 10.34.187.108 -u administrator -p 'P@ssw0rd!'
```

## Contributing

### How to Contribute

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.
