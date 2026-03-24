---
TitleSEO: "AMSI Bypass Collection | ZureFX Projects"
TitlePost: "AMSI Bypass Collection"
Author: "ZureFX"
Description: "Open source security project: AMSI Bypass Collection. Built for the community."
Keywords: "automation, cli, framework, plugin, extension"
URL: "https://zurefx.github.io/research/project-amsi-bypass-collection-606.html"
URL_IMAGES: ""
Date: "2024-10-02"
Tags: "Automation, CLI, Framework, Plugin, Extension"
Section: "projects"
Lang: "en"
main_img: "project-amsi-bypass-collection-606"
Permalink: "/research/project-amsi-bypass-collection-606.html"
BtnLabel: "View Project"
Pick: 0
Features: "john, ffuf, gobuster"
---
## Project Overview

### Description

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## Features

### Key Features

- **hashcat**: The backup files contained sensitive information that should not have been accessible.
- **ffuf**: The target system was identified as running a vulnerable version of the service.
- **john**: The application stored sensitive credentials in an unencrypted configuration file.
- **hydra**: The web application was vulnerable to Server-Side Template Injection (SSTI).

## Installation

### Requirements

- Python 3.8+
- `wpscan`
- `socat`
- `socat`

### Setup

```bash
git clone https://github.com/zurefx/project-amsi-bypass-collection-606
cd project-amsi-bypass-collection-606
pip install -r requirements.txt
```

## Usage

### Examples

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.87.200 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.48.162.122 -u administrator -p 'P@ssw0rd!' --shares
```

## Contributing

### How to Contribute

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.
