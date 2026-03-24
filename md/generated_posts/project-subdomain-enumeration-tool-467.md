---
TitleSEO: "Subdomain Enumeration Tool | ZureFX Projects"
TitlePost: "Subdomain Enumeration Tool"
Author: "ZureFX"
Description: "Open source security project: Subdomain Enumeration Tool. Built for the community."
Keywords: "library, tool, security, extension"
URL: "https://zurefx.github.io/research/project-subdomain-enumeration-tool-467.html"
URL_IMAGES: ""
Date: "2024-04-02"
Tags: "Library, Tool, Security, Extension"
Section: "projects"
Lang: "en"
main_img: "project-subdomain-enumeration-tool-467"
Permalink: "/research/project-subdomain-enumeration-tool-467.html"
BtnLabel: "View Project"
Pick: 0
Features: "gobuster, hydra, evil-winrm"
---
## Project Overview

### Description

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Features

### Key Features

- **feroxbuster**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **ffuf**: The service was running without proper input validation, leading to injection vulnerabilities.
- **nmap**: The service was running without proper input validation, leading to injection vulnerabilities.
- **john**: Lateral movement was facilitated by reusing discovered credentials across services.

## Installation

### Requirements

- Python 3.8+
- `secretsdump`
- `msfvenom`
- `wpscan`

### Setup

```bash
git clone https://github.com/zurefx/project-subdomain-enumeration-tool-467
cd project-subdomain-enumeration-tool-467
pip install -r requirements.txt
```

## Usage

### Examples

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.95.134/FUZZ
evil-winrm -i 10.114.61.167 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
feroxbuster -h
```

## Contributing

### How to Contribute

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.
