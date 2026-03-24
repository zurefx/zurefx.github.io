---
TitleSEO: "Web Crawler and Spider | ZureFX Projects"
TitlePost: "Web Crawler and Spider"
Author: "ZureFX"
Description: "Open source security project: Web Crawler and Spider. Built for the community."
Keywords: "open source, automation, library"
URL: "https://zurefx.github.io/research/project-web-crawler-and-spider-545.html"
URL_IMAGES: ""
Date: "2025-10-23"
Tags: "Open Source, Automation, Library"
Section: "projects"
Lang: "en"
main_img: "project-web-crawler-and-spider-545"
Permalink: "/research/project-web-crawler-and-spider-545.html"
BtnLabel: "View Project"
Pick: 0
Features: "feroxbuster, ffuf, crackmapexec"
---
## Project Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Features

### Key Features

- **nmap**: The service account had excessive permissions assigned in Active Directory.
- **ffuf**: Weak file permissions allowed modification of critical system files.
- **gobuster**: The application stored sensitive credentials in an unencrypted configuration file.
- **hashcat**: Weak file permissions allowed modification of critical system files.

## Installation

### Requirements

- Python 3.8+
- `rubeus`
- `netcat`
- `rpcclient`

### Setup

```bash
git clone https://github.com/zurefx/project-web-crawler-and-spider-545
cd project-web-crawler-and-spider-545
pip install -r requirements.txt
```

## Usage

### Examples

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.93.102.100/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.65.143.77 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p9200,3268,27017 10.75.102.244 -oN scan.txt
feroxbuster -h
```

## Contributing

### How to Contribute

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.
