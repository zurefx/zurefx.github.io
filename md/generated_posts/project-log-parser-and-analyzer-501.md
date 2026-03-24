---
TitleSEO: "Log Parser and Analyzer | ZureFX Projects"
TitlePost: "Log Parser and Analyzer"
Author: "ZureFX"
Description: "Open source security project: Log Parser and Analyzer. Built for the community."
Keywords: "cli, extension, framework"
URL: "https://zurefx.github.io/research/project-log-parser-and-analyzer-501.html"
URL_IMAGES: ""
Date: "2025-10-09"
Tags: "CLI, Extension, Framework"
Section: "projects"
Lang: "en"
main_img: "project-log-parser-and-analyzer-501"
Permalink: "/research/project-log-parser-and-analyzer-501.html"
BtnLabel: "View Project"
Pick: 0
Features: "hydra, evil-winrm, nmap"
---
## Project Overview

### Description

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## Features

### Key Features

- **nmap**: The backup files contained sensitive information that should not have been accessible.
- **john**: Token impersonation allowed elevation to SYSTEM privileges on the target.
- **feroxbuster**: Group Policy Preferences contained encrypted but recoverable credentials.
- **hashcat**: Privilege escalation was possible due to misconfigured sudo permissions.

## Installation

### Requirements

- Python 3.8+
- `impacket`
- `metasploit`
- `ldapsearch`

### Setup

```bash
git clone https://github.com/zurefx/project-log-parser-and-analyzer-501
cd project-log-parser-and-analyzer-501
pip install -r requirements.txt
```

## Usage

### Examples

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.181.186
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.77.171.27 -u administrator -p 'P@ssw0rd!'
```

## Contributing

### How to Contribute

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.
