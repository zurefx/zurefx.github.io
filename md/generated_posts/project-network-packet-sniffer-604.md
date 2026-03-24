---
TitleSEO: "Network Packet Sniffer | ZureFX Projects"
TitlePost: "Network Packet Sniffer"
Author: "ZureFX"
Description: "Open source security project: Network Packet Sniffer. Built for the community."
Keywords: "framework, automation, cli, security"
URL: "https://zurefx.github.io/research/project-network-packet-sniffer-604.html"
URL_IMAGES: ""
Date: "2024-08-07"
Tags: "Framework, Automation, CLI, Security"
Section: "projects"
Lang: "en"
main_img: "project-network-packet-sniffer-604"
Permalink: "/research/project-network-packet-sniffer-604.html"
BtnLabel: "View Project"
Pick: 0
Features: "nmap, impacket, hashcat"
---
## Project Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Features

### Key Features

- **nmap**: Unconstrained delegation was enabled on the compromised machine.
- **gobuster**: Group Policy Preferences contained encrypted but recoverable credentials.
- **impacket**: Token impersonation allowed elevation to SYSTEM privileges on the target.
- **hydra**: The service account had excessive permissions assigned in Active Directory.

## Installation

### Requirements

- Python 3.8+
- `kerbrute`
- `dcomexec`
- `rpcclient`

### Setup

```bash
git clone https://github.com/zurefx/project-network-packet-sniffer-604
cd project-network-packet-sniffer-604
pip install -r requirements.txt
```

## Usage

### Examples

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.88.254.88 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.195.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Contributing

### How to Contribute

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.
