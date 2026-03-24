---
TitleSEO: "Process Injection PoC | ZureFX Projects"
TitlePost: "Process Injection PoC"
Author: "ZureFX"
Description: "Open source security project: Process Injection PoC. Built for the community."
Keywords: "library, open source, extension, tool, plugin"
URL: "https://zurefx.github.io/research/project-process-injection-poc-716.html"
URL_IMAGES: ""
Date: "2024-11-06"
Tags: "Library, Open Source, Extension, Tool, Plugin"
Section: "projects"
Lang: "en"
main_img: "project-process-injection-poc-716"
Permalink: "/research/project-process-injection-poc-716.html"
BtnLabel: "View Project"
Pick: 0
Features: "nmap, hydra, impacket"
---
## Project Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Features

### Key Features

- **hydra**: The backup files contained sensitive information that should not have been accessible.
- **hashcat**: Weak file permissions allowed modification of critical system files.
- **ffuf**: Authentication bypass was achieved through careful manipulation of the login mechanism.
- **john**: The service was running without proper input validation, leading to injection vulnerabilities.

## Installation

### Requirements

- Python 3.8+
- `lookupsid`
- `bloodhound`
- `gobuster`

### Setup

```bash
git clone https://github.com/zurefx/project-process-injection-poc-716
cd project-process-injection-poc-716
pip install -r requirements.txt
```

## Usage

### Examples

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.127.177.173 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.73.224.84 -u administrator -p 'P@ssw0rd!'
```

## Contributing

### How to Contribute

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.
