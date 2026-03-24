---
TitleSEO: "Log Parser and Analyzer | ZureFX Projects"
TitlePost: "Log Parser and Analyzer"
Author: "ZureFX"
Description: "Open source security project: Log Parser and Analyzer. Built for the community."
Keywords: "security, tool, cli, open source, extension"
URL: "https://zurefx.github.io/research/project-log-parser-and-analyzer-347.html"
URL_IMAGES: ""
Date: "2024-05-07"
Tags: "Security, Tool, CLI, Open Source, Extension"
Section: "projects"
Lang: "en"
main_img: "project-log-parser-and-analyzer-347"
Permalink: "/research/project-log-parser-and-analyzer-347.html"
BtnLabel: "View Project"
Pick: 0
Features: "gobuster, hashcat, crackmapexec"
---
## Project Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Features

### Key Features

- **gobuster**: Command injection was possible through unsanitized user input in the search functionality.
- **hydra**: Group Policy Preferences contained encrypted but recoverable credentials.
- **john**: Privilege escalation was possible due to misconfigured sudo permissions.
- **nmap**: Network traffic analysis revealed unencrypted communications containing user credentials.

## Installation

### Requirements

- Python 3.8+
- `ldapsearch`
- `burpsuite`
- `hashcat`

### Setup

```bash
git clone https://github.com/zurefx/project-log-parser-and-analyzer-347
cd project-log-parser-and-analyzer-347
pip install -r requirements.txt
```

## Usage

### Examples

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.31.74.246 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,3268,3306 10.110.11.18 -oN scan.txt
```

## Contributing

### How to Contribute

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.
