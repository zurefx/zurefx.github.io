---
TitleSEO: "Subdomain Enumeration Tool | ZureFX Projects"
TitlePost: "Subdomain Enumeration Tool"
Author: "ZureFX"
Description: "Open source security project: Subdomain Enumeration Tool. Built for the community."
Keywords: "framework, cli, tool, automation"
URL: "https://zurefx.github.io/research/project-subdomain-enumeration-tool-199.html"
URL_IMAGES: ""
Date: "2025-08-22"
Tags: "Framework, CLI, Tool, Automation"
Section: "projects"
Lang: "en"
main_img: "project-subdomain-enumeration-tool-199"
Permalink: "/research/project-subdomain-enumeration-tool-199.html"
BtnLabel: "View Project"
Pick: 0
Features: "john, ffuf, impacket"
---
## Project Overview

### Description

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Features

### Key Features

- **hashcat**: The service account had excessive permissions assigned in Active Directory.
- **gobuster**: Command injection was possible through unsanitized user input in the search functionality.
- **john**: Token impersonation allowed elevation to SYSTEM privileges on the target.
- **feroxbuster**: Privilege escalation was possible due to misconfigured sudo permissions.

## Installation

### Requirements

- Python 3.8+
- `msfvenom`
- `socat`
- `GetUserSPNs`

### Setup

```bash
git clone https://github.com/zurefx/project-subdomain-enumeration-tool-199
cd project-subdomain-enumeration-tool-199
pip install -r requirements.txt
```

## Usage

### Examples

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.160.248/FUZZ
gobuster dir -u http://10.126.177.92/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Contributing

### How to Contribute

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.
