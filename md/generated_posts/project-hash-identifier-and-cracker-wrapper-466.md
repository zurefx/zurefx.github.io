---
TitleSEO: "Hash Identifier and Cracker Wrapper | ZureFX Projects"
TitlePost: "Hash Identifier and Cracker Wrapper"
Author: "ZureFX"
Description: "Open source security project: Hash Identifier and Cracker Wrapper. Built for the community."
Keywords: "extension, security, cli, tool"
URL: "https://zurefx.github.io/research/project-hash-identifier-and-cracker-wrapper-466.html"
URL_IMAGES: ""
Date: "2025-09-12"
Tags: "Extension, Security, CLI, Tool"
Section: "projects"
Lang: "en"
main_img: "project-hash-identifier-and-cracker-wrapper-466"
Permalink: "/research/project-hash-identifier-and-cracker-wrapper-466.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, evil-winrm, ffuf"
---
## Project Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Features

### Key Features

- **feroxbuster**: The application stored sensitive credentials in an unencrypted configuration file.
- **hashcat**: The web application was vulnerable to Server-Side Template Injection (SSTI).
- **gobuster**: The service was running without proper input validation, leading to injection vulnerabilities.
- **hydra**: The service account had excessive permissions assigned in Active Directory.

## Installation

### Requirements

- Python 3.8+
- `GetNPUsers`
- `rubeus`
- `secretsdump`

### Setup

```bash
git clone https://github.com/zurefx/project-hash-identifier-and-cracker-wrapper-466
cd project-hash-identifier-and-cracker-wrapper-466
pip install -r requirements.txt
```

## Usage

### Examples

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.44.183.168 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.2.29/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.105.132/FUZZ
```

## Contributing

### How to Contribute

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.
