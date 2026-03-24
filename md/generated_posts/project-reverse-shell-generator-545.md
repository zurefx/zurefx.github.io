---
TitleSEO: "Reverse Shell Generator | ZureFX Projects"
TitlePost: "Reverse Shell Generator"
Author: "ZureFX"
Description: "Open source security project: Reverse Shell Generator. Built for the community."
Keywords: "cli, open source, plugin, framework"
URL: "https://zurefx.github.io/research/project-reverse-shell-generator-545.html"
URL_IMAGES: ""
Date: "2025-02-05"
Tags: "CLI, Open Source, Plugin, Framework"
Section: "projects"
Lang: "en"
main_img: "project-reverse-shell-generator-545"
Permalink: "/research/project-reverse-shell-generator-545.html"
BtnLabel: "View Project"
Pick: 0
Features: "ffuf, gobuster, impacket"
---
## Project Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Features

### Key Features

- **gobuster**: The database credentials were hardcoded in the application source code.
- **feroxbuster**: The database credentials were hardcoded in the application source code.
- **hydra**: Lateral movement was facilitated by reusing discovered credentials across services.
- **hashcat**: The web application was vulnerable to Server-Side Template Injection (SSTI).

## Installation

### Requirements

- Python 3.8+
- `nikto`
- `impacket`
- `GetNPUsers`

### Setup

```bash
git clone https://github.com/zurefx/project-reverse-shell-generator-545
cd project-reverse-shell-generator-545
pip install -r requirements.txt
```

## Usage

### Examples

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.229.87/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,1521,8443 10.100.92.123 -oN scan.txt
```

## Contributing

### How to Contribute

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.
