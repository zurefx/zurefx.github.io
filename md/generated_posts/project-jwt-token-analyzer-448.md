---
TitleSEO: "JWT Token Analyzer | ZureFX Projects"
TitlePost: "JWT Token Analyzer"
Author: "ZureFX"
Description: "Open source security project: JWT Token Analyzer. Built for the community."
Keywords: "framework, extension, library"
URL: "https://zurefx.github.io/research/project-jwt-token-analyzer-448.html"
URL_IMAGES: ""
Date: "2024-12-30"
Tags: "Framework, Extension, Library"
Section: "projects"
Lang: "en"
main_img: "project-jwt-token-analyzer-448"
Permalink: "/research/project-jwt-token-analyzer-448.html"
BtnLabel: "View Project"
Pick: 0
Features: "evil-winrm, impacket, ffuf"
---
## Project Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Features

### Key Features

- **nmap**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **gobuster**: Weak file permissions allowed modification of critical system files.
- **ffuf**: The target system was identified as running a vulnerable version of the service.
- **impacket**: The service account had excessive permissions assigned in Active Directory.

## Installation

### Requirements

- Python 3.8+
- `nmap`
- `atexec`
- `psexec`

### Setup

```bash
git clone https://github.com/zurefx/project-jwt-token-analyzer-448
cd project-jwt-token-analyzer-448
pip install -r requirements.txt
```

## Usage

### Examples

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p9200,21,5432 10.67.215.115 -oN scan.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.51.21.61 -u administrator -p 'P@ssw0rd!'
```

## Contributing

### How to Contribute

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.
