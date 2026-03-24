---
TitleSEO: "Subdomain Enumeration Tool | ZureFX Projects"
TitlePost: "Subdomain Enumeration Tool"
Author: "ZureFX"
Description: "Open source security project: Subdomain Enumeration Tool. Built for the community."
Keywords: "automation, cli, tool, library, plugin"
URL: "https://zurefx.github.io/research/project-subdomain-enumeration-tool-508.html"
URL_IMAGES: ""
Date: "2024-05-28"
Tags: "Automation, CLI, Tool, Library, Plugin"
Section: "projects"
Lang: "en"
main_img: "project-subdomain-enumeration-tool-508"
Permalink: "/research/project-subdomain-enumeration-tool-508.html"
BtnLabel: "View Project"
Pick: 0
Features: "gobuster, hydra, nmap"
---
## Project Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Features

### Key Features

- **feroxbuster**: The database credentials were hardcoded in the application source code.
- **hydra**: The backup files contained sensitive information that should not have been accessible.
- **impacket**: Group Policy Preferences contained encrypted but recoverable credentials.
- **john**: Privilege escalation was possible due to misconfigured sudo permissions.

## Installation

### Requirements

- Python 3.8+
- `ffuf`
- `ldapsearch`
- `ligolo-ng`

### Setup

```bash
git clone https://github.com/zurefx/project-subdomain-enumeration-tool-508
cd project-subdomain-enumeration-tool-508
pip install -r requirements.txt
```

## Usage

### Examples

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.101.8.248 -u administrator -p 'P@ssw0rd!' --shares
```

## Contributing

### How to Contribute

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.
