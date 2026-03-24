---
TitleSEO: "Automated Report Generator | ZureFX Projects"
TitlePost: "Automated Report Generator"
Author: "ZureFX"
Description: "Open source security project: Automated Report Generator. Built for the community."
Keywords: "framework, cli, tool, plugin, security"
URL: "https://zurefx.github.io/research/project-automated-report-generator-970.html"
URL_IMAGES: ""
Date: "2024-04-05"
Tags: "Framework, CLI, Tool, Plugin, Security"
Section: "projects"
Lang: "en"
main_img: "project-automated-report-generator-970"
Permalink: "/research/project-automated-report-generator-970.html"
BtnLabel: "View Project"
Pick: 0
Features: "john, crackmapexec, evil-winrm"
---
## Project Overview

### Description

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Features

### Key Features

- **nmap**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **john**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **impacket**: The application stored sensitive credentials in an unencrypted configuration file.
- **gobuster**: The backup files contained sensitive information that should not have been accessible.

## Installation

### Requirements

- Python 3.8+
- `netcat`
- `mimikatz`
- `metasploit`

### Setup

```bash
git clone https://github.com/zurefx/project-automated-report-generator-970
cd project-automated-report-generator-970
pip install -r requirements.txt
```

## Usage

### Examples

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p1433,9200,443 10.47.40.172 -oN scan.txt
gobuster dir -u http://10.76.225.89/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Contributing

### How to Contribute

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.
