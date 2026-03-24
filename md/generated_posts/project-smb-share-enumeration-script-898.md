---
TitleSEO: "SMB Share Enumeration Script | ZureFX Projects"
TitlePost: "SMB Share Enumeration Script"
Author: "ZureFX"
Description: "Open source security project: SMB Share Enumeration Script. Built for the community."
Keywords: "cli, framework, open source, extension, automation"
URL: "https://zurefx.github.io/research/project-smb-share-enumeration-script-898.html"
URL_IMAGES: ""
Date: "2025-04-22"
Tags: "CLI, Framework, Open Source, Extension, Automation"
Section: "projects"
Lang: "en"
main_img: "project-smb-share-enumeration-script-898"
Permalink: "/research/project-smb-share-enumeration-script-898.html"
BtnLabel: "View Project"
Pick: 0
Features: "gobuster, crackmapexec, impacket"
---
## Project Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Features

### Key Features

- **john**: Unconstrained delegation was enabled on the compromised machine.
- **hydra**: The service account had excessive permissions assigned in Active Directory.
- **gobuster**: Weak file permissions allowed modification of critical system files.
- **nmap**: Lateral movement was facilitated by reusing discovered credentials across services.

## Installation

### Requirements

- Python 3.8+
- `mimikatz`
- `impacket`
- `crackmapexec`

### Setup

```bash
git clone https://github.com/zurefx/project-smb-share-enumeration-script-898
cd project-smb-share-enumeration-script-898
pip install -r requirements.txt
```

## Usage

### Examples

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.13.78.90 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.210.192
impacket-secretsdump administrator:'P@ssw0rd!'@10.29.236.147
```

## Contributing

### How to Contribute

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.
