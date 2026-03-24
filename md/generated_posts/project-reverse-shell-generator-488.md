---
TitleSEO: "Reverse Shell Generator | ZureFX Projects"
TitlePost: "Reverse Shell Generator"
Author: "ZureFX"
Description: "Open source security project: Reverse Shell Generator. Built for the community."
Keywords: "framework, library, cli, plugin, security"
URL: "https://zurefx.github.io/research/project-reverse-shell-generator-488.html"
URL_IMAGES: ""
Date: "2025-07-03"
Tags: "Framework, Library, CLI, Plugin, Security"
Section: "projects"
Lang: "en"
main_img: "project-reverse-shell-generator-488"
Permalink: "/research/project-reverse-shell-generator-488.html"
BtnLabel: "View Project"
Pick: 0
Features: "crackmapexec, hydra, ffuf"
---
## Project Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Features

### Key Features

- **gobuster**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **impacket**: The scheduled task ran with elevated privileges and could be abused for escalation.
- **ffuf**: The target system was identified as running a vulnerable version of the service.
- **feroxbuster**: Unconstrained delegation was enabled on the compromised machine.

## Installation

### Requirements

- Python 3.8+
- `feroxbuster`
- `atexec`
- `feroxbuster`

### Setup

```bash
git clone https://github.com/zurefx/project-reverse-shell-generator-488
cd project-reverse-shell-generator-488
pip install -r requirements.txt
```

## Usage

### Examples

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.168.242
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.56.58
```

## Contributing

### How to Contribute

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.
