---
TitleSEO: "Process Injection PoC | ZureFX Projects"
TitlePost: "Process Injection PoC"
Author: "ZureFX"
Description: "Open source security project: Process Injection PoC. Built for the community."
Keywords: "library, automation, cli, open source, plugin"
URL: "https://zurefx.github.io/research/project-process-injection-poc-764.html"
URL_IMAGES: ""
Date: "2026-02-26"
Tags: "Library, Automation, CLI, Open Source, Plugin"
Section: "projects"
Lang: "en"
main_img: "project-process-injection-poc-764"
Permalink: "/research/project-process-injection-poc-764.html"
BtnLabel: "View Project"
Pick: 0
Features: "evil-winrm, ffuf, impacket"
---
## Project Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Features

### Key Features

- **ffuf**: Privilege escalation was possible due to misconfigured sudo permissions.
- **gobuster**: The database credentials were hardcoded in the application source code.
- **impacket**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **feroxbuster**: The database credentials were hardcoded in the application source code.

## Installation

### Requirements

- Python 3.8+
- `burpsuite`
- `socat`
- `socat`

### Setup

```bash
git clone https://github.com/zurefx/project-process-injection-poc-764
cd project-process-injection-poc-764
pip install -r requirements.txt
```

## Usage

### Examples

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.227.187/FUZZ
evil-winrm -i 10.121.241.227 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.90.107.165/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Contributing

### How to Contribute

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.
