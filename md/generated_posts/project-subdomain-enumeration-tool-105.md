---
TitleSEO: "Subdomain Enumeration Tool | ZureFX Projects"
TitlePost: "Subdomain Enumeration Tool"
Author: "ZureFX"
Description: "Open source security project: Subdomain Enumeration Tool. Built for the community."
Keywords: "automation, plugin, open source"
URL: "https://zurefx.github.io/research/project-subdomain-enumeration-tool-105.html"
URL_IMAGES: ""
Date: "2024-06-13"
Tags: "Automation, Plugin, Open Source"
Section: "projects"
Lang: "en"
main_img: "project-subdomain-enumeration-tool-105"
Permalink: "/research/project-subdomain-enumeration-tool-105.html"
BtnLabel: "View Project"
Pick: 0
Features: "impacket, gobuster, john"
---
## Project Overview

### Description

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Features

### Key Features

- **john**: Privilege escalation was possible due to misconfigured sudo permissions.
- **nmap**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **hashcat**: The target system was identified as running a vulnerable version of the service.
- **ffuf**: Weak file permissions allowed modification of critical system files.

## Installation

### Requirements

- Python 3.8+
- `atexec`
- `pwncat`
- `impacket`

### Setup

```bash
git clone https://github.com/zurefx/project-subdomain-enumeration-tool-105
cd project-subdomain-enumeration-tool-105
pip install -r requirements.txt
```

## Usage

### Examples

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p464,8080,23 10.49.238.70 -oN scan.txt
```

## Contributing

### How to Contribute

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.
