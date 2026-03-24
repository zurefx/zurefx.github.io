---
TitleSEO: "DNS Resolver and Brute Forcer | ZureFX Projects"
TitlePost: "DNS Resolver and Brute Forcer"
Author: "ZureFX"
Description: "Open source security project: DNS Resolver and Brute Forcer. Built for the community."
Keywords: "cli, extension, tool"
URL: "https://zurefx.github.io/research/project-dns-resolver-and-brute-forcer-961.html"
URL_IMAGES: ""
Date: "2025-08-05"
Tags: "CLI, Extension, Tool"
Section: "projects"
Lang: "en"
main_img: "project-dns-resolver-and-brute-forcer-961"
Permalink: "/research/project-dns-resolver-and-brute-forcer-961.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, feroxbuster, hashcat"
---
## Project Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

## Features

### Key Features

- **ffuf**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **hashcat**: The database credentials were hardcoded in the application source code.
- **john**: Lateral movement was facilitated by reusing discovered credentials across services.
- **feroxbuster**: The database credentials were hardcoded in the application source code.

## Installation

### Requirements

- Python 3.8+
- `netcat`
- `psexec`
- `mimikatz`

### Setup

```bash
git clone https://github.com/zurefx/project-dns-resolver-and-brute-forcer-961
cd project-dns-resolver-and-brute-forcer-961
pip install -r requirements.txt
```

## Usage

### Examples

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.72.160.22/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Contributing

### How to Contribute

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.
