---
TitleSEO: "API Security Testing Framework | ZureFX Projects"
TitlePost: "API Security Testing Framework"
Author: "ZureFX"
Description: "Open source security project: API Security Testing Framework. Built for the community."
Keywords: "open source, automation, framework, extension"
URL: "https://zurefx.github.io/research/project-api-security-testing-framework-128.html"
URL_IMAGES: ""
Date: "2025-09-10"
Tags: "Open Source, Automation, Framework, Extension"
Section: "projects"
Lang: "en"
main_img: "project-api-security-testing-framework-128"
Permalink: "/research/project-api-security-testing-framework-128.html"
BtnLabel: "View Project"
Pick: 0
Features: "hydra, evil-winrm, nmap"
---
## Project Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Features

### Key Features

- **hydra**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **nmap**: Command injection was possible through unsanitized user input in the search functionality.
- **feroxbuster**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **hashcat**: Initial enumeration revealed several interesting open ports on the target.

## Installation

### Requirements

- Python 3.8+
- `GetUserSPNs`
- `msfvenom`
- `hydra`

### Setup

```bash
git clone https://github.com/zurefx/project-api-security-testing-framework-128
cd project-api-security-testing-framework-128
pip install -r requirements.txt
```

## Usage

### Examples

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.
