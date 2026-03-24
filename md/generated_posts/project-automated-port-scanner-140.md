---
TitleSEO: "Automated Port Scanner | ZureFX Projects"
TitlePost: "Automated Port Scanner"
Author: "ZureFX"
Description: "Open source security project: Automated Port Scanner. Built for the community."
Keywords: "automation, cli, framework"
URL: "https://zurefx.github.io/research/project-automated-port-scanner-140.html"
URL_IMAGES: ""
Date: "2024-01-14"
Tags: "Automation, CLI, Framework"
Section: "projects"
Lang: "en"
main_img: "project-automated-port-scanner-140"
Permalink: "/research/project-automated-port-scanner-140.html"
BtnLabel: "View Project"
Pick: 0
Features: "nmap, impacket, hashcat"
---
## Project Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

## Features

### Key Features

- **gobuster**: The service was running without proper input validation, leading to injection vulnerabilities.
- **impacket**: Unconstrained delegation was enabled on the compromised machine.
- **john**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **hashcat**: Command injection was possible through unsanitized user input in the search functionality.

## Installation

### Requirements

- Python 3.8+
- `psexec`
- `mimikatz`
- `evil-winrm`

### Setup

```bash
git clone https://github.com/zurefx/project-automated-port-scanner-140
cd project-automated-port-scanner-140
pip install -r requirements.txt
```

## Usage

### Examples

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.83.109.166 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Contributing

### How to Contribute

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.
