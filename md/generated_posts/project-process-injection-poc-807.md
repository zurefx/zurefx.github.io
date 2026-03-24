---
TitleSEO: "Process Injection PoC | ZureFX Projects"
TitlePost: "Process Injection PoC"
Author: "ZureFX"
Description: "Open source security project: Process Injection PoC. Built for the community."
Keywords: "extension, security, plugin, automation, framework"
URL: "https://zurefx.github.io/research/project-process-injection-poc-807.html"
URL_IMAGES: ""
Date: "2024-09-30"
Tags: "Extension, Security, Plugin, Automation, Framework"
Section: "projects"
Lang: "en"
main_img: "project-process-injection-poc-807"
Permalink: "/research/project-process-injection-poc-807.html"
BtnLabel: "View Project"
Pick: 0
Features: "hydra, feroxbuster, nmap"
---
## Project Overview

### Description

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

## Features

### Key Features

- **hashcat**: The kernel version was outdated and vulnerable to a publicly known exploit.
- **john**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **ffuf**: Initial enumeration revealed several interesting open ports on the target.
- **gobuster**: The kernel version was outdated and vulnerable to a publicly known exploit.

## Installation

### Requirements

- Python 3.8+
- `kerbrute`
- `atexec`
- `wmiexec`

### Setup

```bash
git clone https://github.com/zurefx/project-process-injection-poc-807
cd project-process-injection-poc-807
pip install -r requirements.txt
```

## Usage

### Examples

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.60.182.94/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.128.108.139 -u administrator -p 'P@ssw0rd!'
```

## Contributing

### How to Contribute

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.
