---
TitleSEO: "Payload Obfuscation Script | ZureFX Projects"
TitlePost: "Payload Obfuscation Script"
Author: "ZureFX"
Description: "Open source security project: Payload Obfuscation Script. Built for the community."
Keywords: "cli, tool, plugin, library, open source"
URL: "https://zurefx.github.io/research/project-payload-obfuscation-script-332.html"
URL_IMAGES: ""
Date: "2024-03-11"
Tags: "CLI, Tool, Plugin, Library, Open Source"
Section: "projects"
Lang: "en"
main_img: "project-payload-obfuscation-script-332"
Permalink: "/research/project-payload-obfuscation-script-332.html"
BtnLabel: "View Project"
Pick: 0
Features: "nmap, gobuster, crackmapexec"
---
## Project Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Features

### Key Features

- **impacket**: Lateral movement was facilitated by reusing discovered credentials across services.
- **ffuf**: The service was running without proper input validation, leading to injection vulnerabilities.
- **feroxbuster**: Command injection was possible through unsanitized user input in the search functionality.
- **nmap**: Network traffic analysis revealed unencrypted communications containing user credentials.

## Installation

### Requirements

- Python 3.8+
- `ffuf`
- `enum4linux`
- `ligolo-ng`

### Setup

```bash
git clone https://github.com/zurefx/project-payload-obfuscation-script-332
cd project-payload-obfuscation-script-332
pip install -r requirements.txt
```

## Usage

### Examples

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.82.200.231 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3268,143,9200 10.20.36.164 -oN scan.txt
```

## Contributing

### How to Contribute

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.
