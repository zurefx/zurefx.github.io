---
TitleSEO: "EDR Evasion Techniques | ZureFX Projects"
TitlePost: "EDR Evasion Techniques"
Author: "ZureFX"
Description: "Open source security project: EDR Evasion Techniques. Built for the community."
Keywords: "cli, plugin, tool, framework"
URL: "https://zurefx.github.io/research/project-edr-evasion-techniques-313.html"
URL_IMAGES: ""
Date: "2025-12-28"
Tags: "CLI, Plugin, Tool, Framework"
Section: "projects"
Lang: "en"
main_img: "project-edr-evasion-techniques-313"
Permalink: "/research/project-edr-evasion-techniques-313.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, gobuster, feroxbuster"
---
## Project Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Features

### Key Features

- **hydra**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **john**: Lateral movement was facilitated by reusing discovered credentials across services.
- **gobuster**: The backup files contained sensitive information that should not have been accessible.
- **ffuf**: Privilege escalation was possible due to misconfigured sudo permissions.

## Installation

### Requirements

- Python 3.8+
- `enum4linux`
- `sqlmap`
- `hydra`

### Setup

```bash
git clone https://github.com/zurefx/project-edr-evasion-techniques-313
cd project-edr-evasion-techniques-313
pip install -r requirements.txt
```

## Usage

### Examples

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.37.119.133 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Contributing

### How to Contribute

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.
