---
TitleSEO: "AMSI Bypass Collection in Python | ZureFX"
TitlePost: "AMSI Bypass Collection — Python"
Author: "ZureFX"
Description: "A Python script for amsi bypass collection. Built for security research and automation."
Keywords: "bash, rust, python, parser, tool"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-740.html"
URL_IMAGES: ""
Date: "2026-01-03"
Tags: "Bash, Rust, Python, Parser, Tool"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-740"
Permalink: "/scripting/script-amsi-bypass-collection-740.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `ldapsearch`
- `evil-winrm`
- `pwncat`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.70.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
gobuster dir -u http://10.40.186.30/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.90.63.34/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.66.98.184 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 2.21s
```
