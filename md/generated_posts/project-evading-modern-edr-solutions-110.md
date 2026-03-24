---
TitleSEO: "Evading Modern EDR Solutions | ZureFX Projects"
TitlePost: "Evading Modern EDR Solutions"
Author: "ZureFX"
Description: "Open source security project: Evading Modern EDR Solutions. Built for the community."
Keywords: "automation, extension, security"
URL: "https://zurefx.github.io/research/project-evading-modern-edr-solutions-110.html"
URL_IMAGES: ""
Date: "2024-09-18"
Tags: "Automation, Extension, Security"
Section: "projects"
Lang: "en"
main_img: "project-evading-modern-edr-solutions-110"
Permalink: "/research/project-evading-modern-edr-solutions-110.html"
BtnLabel: "View Project"
Pick: 0
Features: "john, gobuster, crackmapexec"
---
## Project Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Features

### Key Features

- **hashcat**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **hydra**: Token impersonation allowed elevation to SYSTEM privileges on the target.
- **impacket**: The application stored sensitive credentials in an unencrypted configuration file.
- **feroxbuster**: Post-exploitation enumeration revealed a path to domain administrator privileges.

## Installation

### Requirements

- Python 3.8+
- `evil-winrm`
- `ldapsearch`
- `feroxbuster`

### Setup

```bash
git clone https://github.com/zurefx/project-evading-modern-edr-solutions-110
cd project-evading-modern-edr-solutions-110
pip install -r requirements.txt
```

## Usage

### Examples

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.1.38/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.
