---
TitleSEO: "Automated Report Generator | ZureFX Projects"
TitlePost: "Automated Report Generator"
Author: "ZureFX"
Description: "Open source security project: Automated Report Generator. Built for the community."
Keywords: "open source, extension, automation"
URL: "https://zurefx.github.io/research/project-automated-report-generator-539.html"
URL_IMAGES: ""
Date: "2024-10-29"
Tags: "Open Source, Extension, Automation"
Section: "projects"
Lang: "en"
main_img: "project-automated-report-generator-539"
Permalink: "/research/project-automated-report-generator-539.html"
BtnLabel: "View Project"
Pick: 0
Features: "impacket, john, crackmapexec"
---
## Project Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Features

### Key Features

- **ffuf**: The target system was identified as running a vulnerable version of the service.
- **hydra**: Initial enumeration revealed several interesting open ports on the target.
- **impacket**: Privilege escalation was possible due to misconfigured sudo permissions.
- **hashcat**: Authentication bypass was achieved through careful manipulation of the login mechanism.

## Installation

### Requirements

- Python 3.8+
- `nikto`
- `GetNPUsers`
- `netcat`

### Setup

```bash
git clone https://github.com/zurefx/project-automated-report-generator-539
cd project-automated-report-generator-539
pip install -r requirements.txt
```

## Usage

### Examples

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.50.185.78
```

## Contributing

### How to Contribute

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.
