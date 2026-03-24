---
TitleSEO: "Password Spraying Tool | ZureFX Projects"
TitlePost: "Password Spraying Tool"
Author: "ZureFX"
Description: "Open source security project: Password Spraying Tool. Built for the community."
Keywords: "extension, tool, framework, security, automation"
URL: "https://zurefx.github.io/research/project-password-spraying-tool-489.html"
URL_IMAGES: ""
Date: "2024-07-06"
Tags: "Extension, Tool, Framework, Security, Automation"
Section: "projects"
Lang: "en"
main_img: "project-password-spraying-tool-489"
Permalink: "/research/project-password-spraying-tool-489.html"
BtnLabel: "View Project"
Pick: 0
Features: "hashcat, crackmapexec, feroxbuster"
---
## Project Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Features

### Key Features

- **ffuf**: The service was running without proper input validation, leading to injection vulnerabilities.
- **hydra**: Weak file permissions allowed modification of critical system files.
- **hashcat**: Initial enumeration revealed several interesting open ports on the target.
- **feroxbuster**: Lateral movement was facilitated by reusing discovered credentials across services.

## Installation

### Requirements

- Python 3.8+
- `burpsuite`
- `wpscan`
- `dcomexec`

### Setup

```bash
git clone https://github.com/zurefx/project-password-spraying-tool-489
cd project-password-spraying-tool-489
pip install -r requirements.txt
```

## Usage

### Examples

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.245.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.178.163/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.55.61
```

## Contributing

### How to Contribute

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.
