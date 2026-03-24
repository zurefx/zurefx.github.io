---
TitleSEO: "Automated Report Generator | ZureFX Projects"
TitlePost: "Automated Report Generator"
Author: "ZureFX"
Description: "Open source security project: Automated Report Generator. Built for the community."
Keywords: "security, extension, framework, tool"
URL: "https://zurefx.github.io/research/project-automated-report-generator-636.html"
URL_IMAGES: ""
Date: "2026-02-25"
Tags: "Security, Extension, Framework, Tool"
Section: "projects"
Lang: "en"
main_img: "project-automated-report-generator-636"
Permalink: "/research/project-automated-report-generator-636.html"
BtnLabel: "View Project"
Pick: 0
Features: "gobuster, impacket, evil-winrm"
---
## Project Overview

### Description

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Features

### Key Features

- **gobuster**: The database credentials were hardcoded in the application source code.
- **john**: Privilege escalation was possible due to misconfigured sudo permissions.
- **feroxbuster**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **ffuf**: Group Policy Preferences contained encrypted but recoverable credentials.

## Installation

### Requirements

- Python 3.8+
- `impacket`
- `socat`
- `crackmapexec`

### Setup

```bash
git clone https://github.com/zurefx/project-automated-report-generator-636
cd project-automated-report-generator-636
pip install -r requirements.txt
```

## Usage

### Examples

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.40.181/FUZZ
gobuster dir -u http://10.23.89.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.200.226/FUZZ
```

## Contributing

### How to Contribute

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.
