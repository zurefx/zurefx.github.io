---
TitleSEO: "JWT Token Analyzer | ZureFX Projects"
TitlePost: "JWT Token Analyzer"
Author: "ZureFX"
Description: "Open source security project: JWT Token Analyzer. Built for the community."
Keywords: "open source, extension, security, tool, cli"
URL: "https://zurefx.github.io/research/project-jwt-token-analyzer-279.html"
URL_IMAGES: ""
Date: "2026-03-02"
Tags: "Open Source, Extension, Security, Tool, CLI"
Section: "projects"
Lang: "en"
main_img: "project-jwt-token-analyzer-279"
Permalink: "/research/project-jwt-token-analyzer-279.html"
BtnLabel: "View Project"
Pick: 0
Features: "hydra, ffuf, hashcat"
---
## Project Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Features

### Key Features

- **john**: Lateral movement was facilitated by reusing discovered credentials across services.
- **hydra**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **impacket**: The application stored sensitive credentials in an unencrypted configuration file.
- **feroxbuster**: The web application was vulnerable to Server-Side Template Injection (SSTI).

## Installation

### Requirements

- Python 3.8+
- `ffuf`
- `pwncat`
- `secretsdump`

### Setup

```bash
git clone https://github.com/zurefx/project-jwt-token-analyzer-279
cd project-jwt-token-analyzer-279
pip install -r requirements.txt
```

## Usage

### Examples

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.193.59
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Contributing

### How to Contribute

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.
