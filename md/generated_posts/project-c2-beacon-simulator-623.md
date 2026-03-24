---
TitleSEO: "C2 Beacon Simulator | ZureFX Projects"
TitlePost: "C2 Beacon Simulator"
Author: "ZureFX"
Description: "Open source security project: C2 Beacon Simulator. Built for the community."
Keywords: "security, framework, plugin"
URL: "https://zurefx.github.io/research/project-c2-beacon-simulator-623.html"
URL_IMAGES: ""
Date: "2025-06-28"
Tags: "Security, Framework, Plugin"
Section: "projects"
Lang: "en"
main_img: "project-c2-beacon-simulator-623"
Permalink: "/research/project-c2-beacon-simulator-623.html"
BtnLabel: "View Project"
Pick: 0
Features: "impacket, ffuf, feroxbuster"
---
## Project Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Features

### Key Features

- **nmap**: Token impersonation allowed elevation to SYSTEM privileges on the target.
- **feroxbuster**: Weak file permissions allowed modification of critical system files.
- **ffuf**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **john**: The service was running without proper input validation, leading to injection vulnerabilities.

## Installation

### Requirements

- Python 3.8+
- `impacket`
- `bloodhound`
- `sharphound`

### Setup

```bash
git clone https://github.com/zurefx/project-c2-beacon-simulator-623
cd project-c2-beacon-simulator-623
pip install -r requirements.txt
```

## Usage

### Examples

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.72.33
```

## Contributing

### How to Contribute

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.
