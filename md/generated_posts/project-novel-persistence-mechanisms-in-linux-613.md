---
TitleSEO: "Novel Persistence Mechanisms in Linux | ZureFX Projects"
TitlePost: "Novel Persistence Mechanisms in Linux"
Author: "ZureFX"
Description: "Open source security project: Novel Persistence Mechanisms in Linux. Built for the community."
Keywords: "tool, automation, open source, plugin, security"
URL: "https://zurefx.github.io/research/project-novel-persistence-mechanisms-in-linux-613.html"
URL_IMAGES: ""
Date: "2024-12-23"
Tags: "Tool, Automation, Open Source, Plugin, Security"
Section: "projects"
Lang: "en"
main_img: "project-novel-persistence-mechanisms-in-linux-613"
Permalink: "/research/project-novel-persistence-mechanisms-in-linux-613.html"
BtnLabel: "View Project"
Pick: 0
Features: "nmap, crackmapexec, hydra"
---
## Project Overview

### Description

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Features

### Key Features

- **nmap**: The backup files contained sensitive information that should not have been accessible.
- **gobuster**: The application stored sensitive credentials in an unencrypted configuration file.
- **ffuf**: Post-exploitation enumeration revealed a path to domain administrator privileges.
- **hydra**: Network traffic analysis revealed unencrypted communications containing user credentials.

## Installation

### Requirements

- Python 3.8+
- `pwncat`
- `metasploit`
- `enum4linux`

### Setup

```bash
git clone https://github.com/zurefx/project-novel-persistence-mechanisms-in-linux-613
cd project-novel-persistence-mechanisms-in-linux-613
pip install -r requirements.txt
```

## Usage

### Examples

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.127.156.119/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.81.106.19 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.137.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Contributing

### How to Contribute

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.
