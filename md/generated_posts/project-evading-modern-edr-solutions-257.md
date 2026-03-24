---
TitleSEO: "Evading Modern EDR Solutions | ZureFX Projects"
TitlePost: "Evading Modern EDR Solutions"
Author: "ZureFX"
Description: "Open source security project: Evading Modern EDR Solutions. Built for the community."
Keywords: "security, cli, framework"
URL: "https://zurefx.github.io/research/project-evading-modern-edr-solutions-257.html"
URL_IMAGES: ""
Date: "2025-07-17"
Tags: "Security, CLI, Framework"
Section: "projects"
Lang: "en"
main_img: "project-evading-modern-edr-solutions-257"
Permalink: "/research/project-evading-modern-edr-solutions-257.html"
BtnLabel: "View Project"
Pick: 0
Features: "evil-winrm, nmap, hydra"
---
## Project Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Features

### Key Features

- **hydra**: The service was running without proper input validation, leading to injection vulnerabilities.
- **feroxbuster**: The web application was vulnerable to Server-Side Template Injection (SSTI).
- **impacket**: The service account had excessive permissions assigned in Active Directory.
- **gobuster**: Token impersonation allowed elevation to SYSTEM privileges on the target.

## Installation

### Requirements

- Python 3.8+
- `rpcclient`
- `GetNPUsers`
- `netcat`

### Setup

```bash
git clone https://github.com/zurefx/project-evading-modern-edr-solutions-257
cd project-evading-modern-edr-solutions-257
pip install -r requirements.txt
```

## Usage

### Examples

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.254.180/FUZZ
crackmapexec smb 10.52.94.26 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.
