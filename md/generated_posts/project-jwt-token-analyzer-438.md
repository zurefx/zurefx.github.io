---
TitleSEO: "JWT Token Analyzer | ZureFX Projects"
TitlePost: "JWT Token Analyzer"
Author: "ZureFX"
Description: "Open source security project: JWT Token Analyzer. Built for the community."
Keywords: "security, tool, framework, plugin, cli"
URL: "https://zurefx.github.io/research/project-jwt-token-analyzer-438.html"
URL_IMAGES: ""
Date: "2025-10-01"
Tags: "Security, Tool, Framework, Plugin, CLI"
Section: "projects"
Lang: "en"
main_img: "project-jwt-token-analyzer-438"
Permalink: "/research/project-jwt-token-analyzer-438.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, hashcat, impacket"
---
## Project Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Features

### Key Features

- **hashcat**: Weak file permissions allowed modification of critical system files.
- **gobuster**: Lateral movement was facilitated by reusing discovered credentials across services.
- **john**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **impacket**: Lateral movement was facilitated by reusing discovered credentials across services.

## Installation

### Requirements

- Python 3.8+
- `crackmapexec`
- `john`
- `atexec`

### Setup

```bash
git clone https://github.com/zurefx/project-jwt-token-analyzer-438
cd project-jwt-token-analyzer-438
pip install -r requirements.txt
```

## Usage

### Examples

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.84.186
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.92.249/FUZZ
nmap -sCV -p1433,27017,135 10.32.246.28 -oN scan.txt
```

## Contributing

### How to Contribute

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.
