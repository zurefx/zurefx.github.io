---
TitleSEO: "API Security Testing Framework | ZureFX Projects"
TitlePost: "API Security Testing Framework"
Author: "ZureFX"
Description: "Open source security project: API Security Testing Framework. Built for the community."
Keywords: "framework, security, plugin, extension, cli"
URL: "https://zurefx.github.io/research/project-api-security-testing-framework-344.html"
URL_IMAGES: ""
Date: "2025-09-24"
Tags: "Framework, Security, Plugin, Extension, CLI"
Section: "projects"
Lang: "en"
main_img: "project-api-security-testing-framework-344"
Permalink: "/research/project-api-security-testing-framework-344.html"
BtnLabel: "View Project"
Pick: 0
Features: "hydra, gobuster, ffuf"
---
## Project Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Features

### Key Features

- **impacket**: Initial enumeration revealed several interesting open ports on the target.
- **john**: Privilege escalation was possible due to misconfigured sudo permissions.
- **hydra**: Group Policy Preferences contained encrypted but recoverable credentials.
- **ffuf**: The target system was identified as running a vulnerable version of the service.

## Installation

### Requirements

- Python 3.8+
- `gobuster`
- `crackmapexec`
- `hashcat`

### Setup

```bash
git clone https://github.com/zurefx/project-api-security-testing-framework-344
cd project-api-security-testing-framework-344
pip install -r requirements.txt
```

## Usage

### Examples

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.122.223.109 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.151.165
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Contributing

### How to Contribute

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.
