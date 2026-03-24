---
TitleSEO: "Automated Report Generator | ZureFX Projects"
TitlePost: "Automated Report Generator"
Author: "ZureFX"
Description: "Open source security project: Automated Report Generator. Built for the community."
Keywords: "library, plugin, extension"
URL: "https://zurefx.github.io/research/project-automated-report-generator-107.html"
URL_IMAGES: ""
Date: "2025-01-16"
Tags: "Library, Plugin, Extension"
Section: "projects"
Lang: "en"
main_img: "project-automated-report-generator-107"
Permalink: "/research/project-automated-report-generator-107.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, john, hashcat"
---
## Project Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Features

### Key Features

- **impacket**: Token impersonation allowed elevation to SYSTEM privileges on the target.
- **gobuster**: The backup files contained sensitive information that should not have been accessible.
- **hydra**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **hashcat**: The service account had excessive permissions assigned in Active Directory.

## Installation

### Requirements

- Python 3.8+
- `smbexec`
- `hashcat`
- `GetNPUsers`

### Setup

```bash
git clone https://github.com/zurefx/project-automated-report-generator-107
cd project-automated-report-generator-107
pip install -r requirements.txt
```

## Usage

### Examples

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.116.212.62 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Contributing

### How to Contribute

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.
