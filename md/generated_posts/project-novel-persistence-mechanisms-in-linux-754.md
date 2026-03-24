---
TitleSEO: "Novel Persistence Mechanisms in Linux | ZureFX Projects"
TitlePost: "Novel Persistence Mechanisms in Linux"
Author: "ZureFX"
Description: "Open source security project: Novel Persistence Mechanisms in Linux. Built for the community."
Keywords: "automation, security, framework, extension, tool"
URL: "https://zurefx.github.io/research/project-novel-persistence-mechanisms-in-linux-754.html"
URL_IMAGES: ""
Date: "2025-07-28"
Tags: "Automation, Security, Framework, Extension, Tool"
Section: "projects"
Lang: "en"
main_img: "project-novel-persistence-mechanisms-in-linux-754"
Permalink: "/research/project-novel-persistence-mechanisms-in-linux-754.html"
BtnLabel: "View Project"
Pick: 0
Features: "nmap, hashcat, crackmapexec"
---
## Project Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Features

### Key Features

- **hashcat**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **feroxbuster**: Lateral movement was facilitated by reusing discovered credentials across services.
- **john**: Weak file permissions allowed modification of critical system files.
- **gobuster**: Weak file permissions allowed modification of critical system files.

## Installation

### Requirements

- Python 3.8+
- `rpcclient`
- `wmiexec`
- `ligolo-ng`

### Setup

```bash
git clone https://github.com/zurefx/project-novel-persistence-mechanisms-in-linux-754
cd project-novel-persistence-mechanisms-in-linux-754
pip install -r requirements.txt
```

## Usage

### Examples

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.60.97.62 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p25,9200,8888 10.119.135.140 -oN scan.txt
```

## Contributing

### How to Contribute

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.
