---
TitleSEO: "C2 Beacon Simulator | ZureFX Projects"
TitlePost: "C2 Beacon Simulator"
Author: "ZureFX"
Description: "Open source security project: C2 Beacon Simulator. Built for the community."
Keywords: "security, library, extension, tool"
URL: "https://zurefx.github.io/research/project-c2-beacon-simulator-228.html"
URL_IMAGES: ""
Date: "2024-08-22"
Tags: "Security, Library, Extension, Tool"
Section: "projects"
Lang: "en"
main_img: "project-c2-beacon-simulator-228"
Permalink: "/research/project-c2-beacon-simulator-228.html"
BtnLabel: "View Project"
Pick: 0
Features: "feroxbuster, impacket, hashcat"
---
## Project Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

## Features

### Key Features

- **feroxbuster**: The web application was vulnerable to Server-Side Template Injection (SSTI).
- **ffuf**: Unconstrained delegation was enabled on the compromised machine.
- **john**: Initial enumeration revealed several interesting open ports on the target.
- **nmap**: Post-exploitation enumeration revealed a path to domain administrator privileges.

## Installation

### Requirements

- Python 3.8+
- `hydra`
- `lookupsid`
- `crackmapexec`

### Setup

```bash
git clone https://github.com/zurefx/project-c2-beacon-simulator-228
cd project-c2-beacon-simulator-228
pip install -r requirements.txt
```

## Usage

### Examples

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p8080,5985,25 10.13.35.68 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.89.190
```

## Contributing

### How to Contribute

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.
