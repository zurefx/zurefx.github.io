---
TitleSEO: "Evading Modern EDR Solutions | ZureFX Projects"
TitlePost: "Evading Modern EDR Solutions"
Author: "ZureFX"
Description: "Open source security project: Evading Modern EDR Solutions. Built for the community."
Keywords: "automation, library, plugin, cli, extension"
URL: "https://zurefx.github.io/research/project-evading-modern-edr-solutions-249.html"
URL_IMAGES: ""
Date: "2025-04-04"
Tags: "Automation, Library, Plugin, CLI, Extension"
Section: "projects"
Lang: "en"
main_img: "project-evading-modern-edr-solutions-249"
Permalink: "/research/project-evading-modern-edr-solutions-249.html"
BtnLabel: "View Project"
Pick: 0
Features: "ffuf, impacket, feroxbuster"
---
## Project Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Features

### Key Features

- **john**: The application stored sensitive credentials in an unencrypted configuration file.
- **hydra**: Unconstrained delegation was enabled on the compromised machine.
- **nmap**: Weak file permissions allowed modification of critical system files.
- **impacket**: The scheduled task ran with elevated privileges and could be abused for escalation.

## Installation

### Requirements

- Python 3.8+
- `kerbrute`
- `feroxbuster`
- `crackmapexec`

### Setup

```bash
git clone https://github.com/zurefx/project-evading-modern-edr-solutions-249
cd project-evading-modern-edr-solutions-249
pip install -r requirements.txt
```

## Usage

### Examples

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.77.37
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.
