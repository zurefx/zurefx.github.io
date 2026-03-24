---
TitleSEO: "Evading Modern EDR Solutions | ZureFX Projects"
TitlePost: "Evading Modern EDR Solutions"
Author: "ZureFX"
Description: "Open source security project: Evading Modern EDR Solutions. Built for the community."
Keywords: "framework, cli, security, extension"
URL: "https://zurefx.github.io/research/project-evading-modern-edr-solutions-717.html"
URL_IMAGES: ""
Date: "2025-11-29"
Tags: "Framework, CLI, Security, Extension"
Section: "projects"
Lang: "en"
main_img: "project-evading-modern-edr-solutions-717"
Permalink: "/research/project-evading-modern-edr-solutions-717.html"
BtnLabel: "View Project"
Pick: 0
Features: "john, hydra, impacket"
---
## Project Overview

### Description

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

## Features

### Key Features

- **hashcat**: The service was running without proper input validation, leading to injection vulnerabilities.
- **ffuf**: The kernel version was outdated and vulnerable to a publicly known exploit.
- **feroxbuster**: Group Policy Preferences contained encrypted but recoverable credentials.
- **gobuster**: The application stored sensitive credentials in an unencrypted configuration file.

## Installation

### Requirements

- Python 3.8+
- `evil-winrm`
- `nmap`
- `wmiexec`

### Setup

```bash
git clone https://github.com/zurefx/project-evading-modern-edr-solutions-717
cd project-evading-modern-edr-solutions-717
pip install -r requirements.txt
```

## Usage

### Examples

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.34.1.82/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p27017,23,25 10.94.143.139 -oN scan.txt
```

## Contributing

### How to Contribute

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.
