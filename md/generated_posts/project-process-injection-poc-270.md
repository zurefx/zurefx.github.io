---
TitleSEO: "Process Injection PoC | ZureFX Projects"
TitlePost: "Process Injection PoC"
Author: "ZureFX"
Description: "Open source security project: Process Injection PoC. Built for the community."
Keywords: "extension, library, automation, cli"
URL: "https://zurefx.github.io/research/project-process-injection-poc-270.html"
URL_IMAGES: ""
Date: "2025-09-04"
Tags: "Extension, Library, Automation, CLI"
Section: "projects"
Lang: "en"
main_img: "project-process-injection-poc-270"
Permalink: "/research/project-process-injection-poc-270.html"
BtnLabel: "View Project"
Pick: 0
Features: "feroxbuster, gobuster, crackmapexec"
---
## Project Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

## Features

### Key Features

- **feroxbuster**: Privilege escalation was possible due to misconfigured sudo permissions.
- **impacket**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **gobuster**: Weak file permissions allowed modification of critical system files.
- **nmap**: Authentication bypass was achieved through careful manipulation of the login mechanism.

## Installation

### Requirements

- Python 3.8+
- `lookupsid`
- `evil-winrm`
- `smbclient`

### Setup

```bash
git clone https://github.com/zurefx/project-process-injection-poc-270
cd project-process-injection-poc-270
pip install -r requirements.txt
```

## Usage

### Examples

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

## Contributing

### How to Contribute

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.
