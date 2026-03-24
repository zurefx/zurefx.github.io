---
TitleSEO: "JWT Token Analyzer | ZureFX Projects"
TitlePost: "JWT Token Analyzer"
Author: "ZureFX"
Description: "Open source security project: JWT Token Analyzer. Built for the community."
Keywords: "automation, plugin, library, framework, extension"
URL: "https://zurefx.github.io/research/project-jwt-token-analyzer-151.html"
URL_IMAGES: ""
Date: "2024-03-24"
Tags: "Automation, Plugin, Library, Framework, Extension"
Section: "projects"
Lang: "en"
main_img: "project-jwt-token-analyzer-151"
Permalink: "/research/project-jwt-token-analyzer-151.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, nmap, hashcat"
---
## Project Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Features

### Key Features

- **nmap**: Initial enumeration revealed several interesting open ports on the target.
- **hydra**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **feroxbuster**: The service was running without proper input validation, leading to injection vulnerabilities.
- **hashcat**: The scheduled task ran with elevated privileges and could be abused for escalation.

## Installation

### Requirements

- Python 3.8+
- `kerbrute`
- `ldapsearch`
- `crackmapexec`

### Setup

```bash
git clone https://github.com/zurefx/project-jwt-token-analyzer-151
cd project-jwt-token-analyzer-151
pip install -r requirements.txt
```

## Usage

### Examples

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p23,139,1433 10.68.135.192 -oN scan.txt
```

## Contributing

### How to Contribute

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.
