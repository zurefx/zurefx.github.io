---
TitleSEO: "API Security Testing Framework | ZureFX Projects"
TitlePost: "API Security Testing Framework"
Author: "ZureFX"
Description: "Open source security project: API Security Testing Framework. Built for the community."
Keywords: "library, security, automation"
URL: "https://zurefx.github.io/research/project-api-security-testing-framework-168.html"
URL_IMAGES: ""
Date: "2025-10-23"
Tags: "Library, Security, Automation"
Section: "projects"
Lang: "en"
main_img: "project-api-security-testing-framework-168"
Permalink: "/research/project-api-security-testing-framework-168.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, feroxbuster, hydra"
---
## Project Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

## Features

### Key Features

- **hashcat**: Command injection was possible through unsanitized user input in the search functionality.
- **hydra**: Unconstrained delegation was enabled on the compromised machine.
- **feroxbuster**: The kernel version was outdated and vulnerable to a publicly known exploit.
- **gobuster**: The database credentials were hardcoded in the application source code.

## Installation

### Requirements

- Python 3.8+
- `smbexec`
- `GetNPUsers`
- `wmiexec`

### Setup

```bash
git clone https://github.com/zurefx/project-api-security-testing-framework-168
cd project-api-security-testing-framework-168
pip install -r requirements.txt
```

## Usage

### Examples

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.106.197
gobuster dir -u http://10.38.82.195/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.
