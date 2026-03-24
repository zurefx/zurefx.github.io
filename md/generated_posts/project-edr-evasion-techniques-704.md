---
TitleSEO: "EDR Evasion Techniques | ZureFX Projects"
TitlePost: "EDR Evasion Techniques"
Author: "ZureFX"
Description: "Open source security project: EDR Evasion Techniques. Built for the community."
Keywords: "extension, automation, framework"
URL: "https://zurefx.github.io/research/project-edr-evasion-techniques-704.html"
URL_IMAGES: ""
Date: "2026-02-20"
Tags: "Extension, Automation, Framework"
Section: "projects"
Lang: "en"
main_img: "project-edr-evasion-techniques-704"
Permalink: "/research/project-edr-evasion-techniques-704.html"
BtnLabel: "View Project"
Pick: 0
Features: "feroxbuster, evil-winrm, crackmapexec"
---
## Project Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## Features

### Key Features

- **hashcat**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **john**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **hydra**: The service was running without proper input validation, leading to injection vulnerabilities.
- **ffuf**: Token impersonation allowed elevation to SYSTEM privileges on the target.

## Installation

### Requirements

- Python 3.8+
- `wpscan`
- `secretsdump`
- `hydra`

### Setup

```bash
git clone https://github.com/zurefx/project-edr-evasion-techniques-704
cd project-edr-evasion-techniques-704
pip install -r requirements.txt
```

## Usage

### Examples

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.179.221
nmap -sCV -p389,80,5986 10.109.171.14 -oN scan.txt
crackmapexec smb 10.36.204.118 -u administrator -p 'P@ssw0rd!' --shares
```

## Contributing

### How to Contribute

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).
