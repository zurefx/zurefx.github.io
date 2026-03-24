---
TitleSEO: "Custom Wordlist Generator | ZureFX Projects"
TitlePost: "Custom Wordlist Generator"
Author: "ZureFX"
Description: "Open source security project: Custom Wordlist Generator. Built for the community."
Keywords: "library, open source, cli, automation"
URL: "https://zurefx.github.io/research/project-custom-wordlist-generator-197.html"
URL_IMAGES: ""
Date: "2025-10-10"
Tags: "Library, Open Source, CLI, Automation"
Section: "projects"
Lang: "en"
main_img: "project-custom-wordlist-generator-197"
Permalink: "/research/project-custom-wordlist-generator-197.html"
BtnLabel: "View Project"
Pick: 0
Features: "gobuster, impacket, john"
---
## Project Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Features

### Key Features

- **ffuf**: The service account had excessive permissions assigned in Active Directory.
- **john**: The target system was identified as running a vulnerable version of the service.
- **impacket**: The service was running without proper input validation, leading to injection vulnerabilities.
- **gobuster**: Initial enumeration revealed several interesting open ports on the target.

## Installation

### Requirements

- Python 3.8+
- `smbexec`
- `nikto`
- `netcat`

### Setup

```bash
git clone https://github.com/zurefx/project-custom-wordlist-generator-197
cd project-custom-wordlist-generator-197
pip install -r requirements.txt
```

## Usage

### Examples

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.
