---
TitleSEO: "DNS Resolver and Brute Forcer | ZureFX Projects"
TitlePost: "DNS Resolver and Brute Forcer"
Author: "ZureFX"
Description: "Open source security project: DNS Resolver and Brute Forcer. Built for the community."
Keywords: "framework, security, tool, open source"
URL: "https://zurefx.github.io/research/project-dns-resolver-and-brute-forcer-821.html"
URL_IMAGES: ""
Date: "2024-09-17"
Tags: "Framework, Security, Tool, Open Source"
Section: "projects"
Lang: "en"
main_img: "project-dns-resolver-and-brute-forcer-821"
Permalink: "/research/project-dns-resolver-and-brute-forcer-821.html"
BtnLabel: "View Project"
Pick: 0
Features: "impacket, hydra, feroxbuster"
---
## Project Overview

### Description

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Features

### Key Features

- **feroxbuster**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **gobuster**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **hydra**: Network traffic analysis revealed unencrypted communications containing user credentials.
- **hashcat**: Authentication bypass was achieved through careful manipulation of the login mechanism.

## Installation

### Requirements

- Python 3.8+
- `nikto`
- `psexec`
- `burpsuite`

### Setup

```bash
git clone https://github.com/zurefx/project-dns-resolver-and-brute-forcer-821
cd project-dns-resolver-and-brute-forcer-821
pip install -r requirements.txt
```

## Usage

### Examples

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p53,53,27017 10.128.190.158 -oN scan.txt
```

## Contributing

### How to Contribute

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.
