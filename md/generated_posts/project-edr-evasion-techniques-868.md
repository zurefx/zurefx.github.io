---
TitleSEO: "EDR Evasion Techniques | ZureFX Projects"
TitlePost: "EDR Evasion Techniques"
Author: "ZureFX"
Description: "Open source security project: EDR Evasion Techniques. Built for the community."
Keywords: "open source, library, cli, tool, automation"
URL: "https://zurefx.github.io/research/project-edr-evasion-techniques-868.html"
URL_IMAGES: ""
Date: "2025-06-02"
Tags: "Open Source, Library, CLI, Tool, Automation"
Section: "projects"
Lang: "en"
main_img: "project-edr-evasion-techniques-868"
Permalink: "/research/project-edr-evasion-techniques-868.html"
BtnLabel: "View Project"
Pick: 0
Features: "nmap, ffuf, john"
---
## Project Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Features

### Key Features

- **hydra**: Initial enumeration revealed several interesting open ports on the target.
- **feroxbuster**: Group Policy Preferences contained encrypted but recoverable credentials.
- **gobuster**: The application stored sensitive credentials in an unencrypted configuration file.
- **impacket**: Initial enumeration revealed several interesting open ports on the target.

## Installation

### Requirements

- Python 3.8+
- `chisel`
- `metasploit`
- `netcat`

### Setup

```bash
git clone https://github.com/zurefx/project-edr-evasion-techniques-868
cd project-edr-evasion-techniques-868
pip install -r requirements.txt
```

## Usage

### Examples

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.69.10/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.143.47
```

## Contributing

### How to Contribute

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.
