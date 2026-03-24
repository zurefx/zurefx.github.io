---
TitleSEO: "Reverse Shell Generator in Python | ZureFX"
TitlePost: "Reverse Shell Generator — Python"
Author: "ZureFX"
Description: "A Python script for reverse shell generator. Built for security research and automation."
Keywords: "c, go, bash, python, parser"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-171.html"
URL_IMAGES: ""
Date: "2025-09-28"
Tags: "C, Go, Bash, Python, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-171"
Permalink: "/scripting/script-reverse-shell-generator-171.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `rubeus`
- `crackmapexec`
- `pwncat`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.206.110/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

### Helper Functions

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
nmap -sCV -p80,110,80 10.11.112.202 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.128.254/FUZZ
evil-winrm -i 10.20.248.111 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.48.245.222 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p139,5986,464 10.84.126.188 -oN scan.txt
evil-winrm -i 10.20.176.172 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.72.141.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8888,8080,636 10.118.129.56 -oN scan.txt
```

## Output

### Example Output

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 6.72s
```
