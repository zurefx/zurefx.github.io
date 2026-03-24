---
TitleSEO: "EDR Evasion Techniques | ZureFX Projects"
TitlePost: "EDR Evasion Techniques"
Author: "ZureFX"
Description: "Open source security project: EDR Evasion Techniques. Built for the community."
Keywords: "framework, automation, cli, extension, library"
URL: "https://zurefx.github.io/research/project-edr-evasion-techniques-825.html"
URL_IMAGES: ""
Date: "2024-02-23"
Tags: "Framework, Automation, CLI, Extension, Library"
Section: "projects"
Lang: "en"
main_img: "project-edr-evasion-techniques-825"
Permalink: "/research/project-edr-evasion-techniques-825.html"
BtnLabel: "View Project"
Pick: 0
Features: "impacket, hydra, john"
---
## Project Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

## Features

### Key Features

- **hydra**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **gobuster**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **ffuf**: Command injection was possible through unsanitized user input in the search functionality.
- **nmap**: The kernel version was outdated and vulnerable to a publicly known exploit.

## Installation

### Requirements

- Python 3.8+
- `mimikatz`
- `wpscan`
- `msfvenom`

### Setup

```bash
git clone https://github.com/zurefx/project-edr-evasion-techniques-825
cd project-edr-evasion-techniques-825
pip install -r requirements.txt
```

## Usage

### Examples

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.253.38 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.27.254.103/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.105.87.129 -u administrator -p 'P@ssw0rd!' --shares
```

## Contributing

### How to Contribute

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.
