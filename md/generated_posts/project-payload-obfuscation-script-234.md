---
TitleSEO: "Payload Obfuscation Script | ZureFX Projects"
TitlePost: "Payload Obfuscation Script"
Author: "ZureFX"
Description: "Open source security project: Payload Obfuscation Script. Built for the community."
Keywords: "tool, extension, library, security"
URL: "https://zurefx.github.io/research/project-payload-obfuscation-script-234.html"
URL_IMAGES: ""
Date: "2026-03-12"
Tags: "Tool, Extension, Library, Security"
Section: "projects"
Lang: "en"
main_img: "project-payload-obfuscation-script-234"
Permalink: "/research/project-payload-obfuscation-script-234.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, feroxbuster, john"
---
## Project Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Features

### Key Features

- **feroxbuster**: The backup files contained sensitive information that should not have been accessible.
- **impacket**: Initial enumeration revealed several interesting open ports on the target.
- **ffuf**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **hashcat**: Weak file permissions allowed modification of critical system files.

## Installation

### Requirements

- Python 3.8+
- `GetNPUsers`
- `rubeus`
- `bloodhound`

### Setup

```bash
git clone https://github.com/zurefx/project-payload-obfuscation-script-234
cd project-payload-obfuscation-script-234
pip install -r requirements.txt
```

## Usage

### Examples

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.120.252.49 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
crackmapexec smb 10.76.35.48 -u administrator -p 'P@ssw0rd!' --shares
```

## Contributing

### How to Contribute

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.
