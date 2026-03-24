---
TitleSEO: "Payload Obfuscation Script | ZureFX Projects"
TitlePost: "Payload Obfuscation Script"
Author: "ZureFX"
Description: "Open source security project: Payload Obfuscation Script. Built for the community."
Keywords: "framework, security, extension, automation"
URL: "https://zurefx.github.io/research/project-payload-obfuscation-script-363.html"
URL_IMAGES: ""
Date: "2024-06-13"
Tags: "Framework, Security, Extension, Automation"
Section: "projects"
Lang: "en"
main_img: "project-payload-obfuscation-script-363"
Permalink: "/research/project-payload-obfuscation-script-363.html"
BtnLabel: "View Project"
Pick: 0
Features: "ffuf, hashcat, feroxbuster"
---
## Project Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Features

### Key Features

- **john**: The application stored sensitive credentials in an unencrypted configuration file.
- **hashcat**: The kernel version was outdated and vulnerable to a publicly known exploit.
- **feroxbuster**: Unconstrained delegation was enabled on the compromised machine.
- **nmap**: Lateral movement was facilitated by reusing discovered credentials across services.

## Installation

### Requirements

- Python 3.8+
- `rpcclient`
- `burpsuite`
- `GetNPUsers`

### Setup

```bash
git clone https://github.com/zurefx/project-payload-obfuscation-script-363
cd project-payload-obfuscation-script-363
pip install -r requirements.txt
```

## Usage

### Examples

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.192.186/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.51.137
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Contributing

### How to Contribute

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.
