---
TitleSEO: "Custom Wordlist Generator | ZureFX Projects"
TitlePost: "Custom Wordlist Generator"
Author: "ZureFX"
Description: "Open source security project: Custom Wordlist Generator. Built for the community."
Keywords: "plugin, library, open source, tool"
URL: "https://zurefx.github.io/research/project-custom-wordlist-generator-333.html"
URL_IMAGES: ""
Date: "2024-04-29"
Tags: "Plugin, Library, Open Source, Tool"
Section: "projects"
Lang: "en"
main_img: "project-custom-wordlist-generator-333"
Permalink: "/research/project-custom-wordlist-generator-333.html"
BtnLabel: "View Project"
Pick: 0
Features: "john, gobuster, hashcat"
---
## Project Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Features

### Key Features

- **john**: The application stored sensitive credentials in an unencrypted configuration file.
- **impacket**: The service was running without proper input validation, leading to injection vulnerabilities.
- **gobuster**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **nmap**: Post-exploitation enumeration revealed a path to domain administrator privileges.

## Installation

### Requirements

- Python 3.8+
- `kerbrute`
- `psexec`
- `lookupsid`

### Setup

```bash
git clone https://github.com/zurefx/project-custom-wordlist-generator-333
cd project-custom-wordlist-generator-333
pip install -r requirements.txt
```

## Usage

### Examples

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p445,23,53 10.27.232.247 -oN scan.txt
```

## Contributing

### How to Contribute

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.
