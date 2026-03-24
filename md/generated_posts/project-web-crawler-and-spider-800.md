---
TitleSEO: "Web Crawler and Spider | ZureFX Projects"
TitlePost: "Web Crawler and Spider"
Author: "ZureFX"
Description: "Open source security project: Web Crawler and Spider. Built for the community."
Keywords: "security, plugin, automation"
URL: "https://zurefx.github.io/research/project-web-crawler-and-spider-800.html"
URL_IMAGES: ""
Date: "2024-02-04"
Tags: "Security, Plugin, Automation"
Section: "projects"
Lang: "en"
main_img: "project-web-crawler-and-spider-800"
Permalink: "/research/project-web-crawler-and-spider-800.html"
BtnLabel: "View Project"
Pick: 0
Features: "john, gobuster, feroxbuster"
---
## Project Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

## Features

### Key Features

- **impacket**: Token impersonation allowed elevation to SYSTEM privileges on the target.
- **hydra**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **nmap**: The application stored sensitive credentials in an unencrypted configuration file.
- **ffuf**: The target system was identified as running a vulnerable version of the service.

## Installation

### Requirements

- Python 3.8+
- `ldapsearch`
- `secretsdump`
- `nmap`

### Setup

```bash
git clone https://github.com/zurefx/project-web-crawler-and-spider-800
cd project-web-crawler-and-spider-800
pip install -r requirements.txt
```

## Usage

### Examples

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.84.10.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.50.27.99 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## Contributing

### How to Contribute

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.
