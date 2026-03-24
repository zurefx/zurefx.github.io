---
TitleSEO: "EDR Evasion Techniques | ZureFX Projects"
TitlePost: "EDR Evasion Techniques"
Author: "ZureFX"
Description: "Open source security project: EDR Evasion Techniques. Built for the community."
Keywords: "plugin, security, tool, automation"
URL: "https://zurefx.github.io/research/project-edr-evasion-techniques-859.html"
URL_IMAGES: ""
Date: "2024-09-07"
Tags: "Plugin, Security, Tool, Automation"
Section: "projects"
Lang: "en"
main_img: "project-edr-evasion-techniques-859"
Permalink: "/research/project-edr-evasion-techniques-859.html"
BtnLabel: "View Project"
Pick: 0
Features: "hashcat, gobuster, evil-winrm"
---
## Project Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Features

### Key Features

- **gobuster**: The service was running without proper input validation, leading to injection vulnerabilities.
- **hashcat**: Group Policy Preferences contained encrypted but recoverable credentials.
- **ffuf**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **hydra**: The backup files contained sensitive information that should not have been accessible.

## Installation

### Requirements

- Python 3.8+
- `evil-winrm`
- `gobuster`
- `sqlmap`

### Setup

```bash
git clone https://github.com/zurefx/project-edr-evasion-techniques-859
cd project-edr-evasion-techniques-859
pip install -r requirements.txt
```

## Usage

### Examples

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p9200,22,3268 10.29.107.51 -oN scan.txt
```

## Contributing

### How to Contribute

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.
