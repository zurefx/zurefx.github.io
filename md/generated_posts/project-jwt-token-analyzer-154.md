---
TitleSEO: "JWT Token Analyzer | ZureFX Projects"
TitlePost: "JWT Token Analyzer"
Author: "ZureFX"
Description: "Open source security project: JWT Token Analyzer. Built for the community."
Keywords: "automation, tool, security, cli, framework"
URL: "https://zurefx.github.io/research/project-jwt-token-analyzer-154.html"
URL_IMAGES: ""
Date: "2025-08-11"
Tags: "Automation, Tool, Security, CLI, Framework"
Section: "projects"
Lang: "en"
main_img: "project-jwt-token-analyzer-154"
Permalink: "/research/project-jwt-token-analyzer-154.html"
BtnLabel: "View Project"
Pick: 0
Features: "ffuf, nmap, john"
---
## Project Overview

### Description

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

## Features

### Key Features

- **impacket**: Weak file permissions allowed modification of critical system files.
- **feroxbuster**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **gobuster**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **hydra**: The web application was vulnerable to Server-Side Template Injection (SSTI).

## Installation

### Requirements

- Python 3.8+
- `socat`
- `gobuster`
- `crackmapexec`

### Setup

```bash
git clone https://github.com/zurefx/project-jwt-token-analyzer-154
cd project-jwt-token-analyzer-154
pip install -r requirements.txt
```

## Usage

### Examples

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.105.57.236/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.111.237.36/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.160.152
```

## Contributing

### How to Contribute

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.
