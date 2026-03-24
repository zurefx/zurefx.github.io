---
TitleSEO: "CTF Challenge Solver Template | ZureFX Projects"
TitlePost: "CTF Challenge Solver Template"
Author: "ZureFX"
Description: "Open source security project: CTF Challenge Solver Template. Built for the community."
Keywords: "open source, cli, automation"
URL: "https://zurefx.github.io/research/project-ctf-challenge-solver-template-285.html"
URL_IMAGES: ""
Date: "2024-02-22"
Tags: "Open Source, CLI, Automation"
Section: "projects"
Lang: "en"
main_img: "project-ctf-challenge-solver-template-285"
Permalink: "/research/project-ctf-challenge-solver-template-285.html"
BtnLabel: "View Project"
Pick: 0
Features: "john, nmap, ffuf"
---
## Project Overview

### Description

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Features

### Key Features

- **nmap**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **feroxbuster**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **impacket**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **john**: Initial enumeration revealed several interesting open ports on the target.

## Installation

### Requirements

- Python 3.8+
- `GetUserSPNs`
- `bloodhound`
- `socat`

### Setup

```bash
git clone https://github.com/zurefx/project-ctf-challenge-solver-template-285
cd project-ctf-challenge-solver-template-285
pip install -r requirements.txt
```

## Usage

### Examples

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.232.78/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Contributing

### How to Contribute

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.
