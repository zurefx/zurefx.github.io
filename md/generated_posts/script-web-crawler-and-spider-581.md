---
TitleSEO: "Web Crawler and Spider in PowerShell | ZureFX"
TitlePost: "Web Crawler and Spider — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for web crawler and spider. Built for security research and automation."
Keywords: "scanner, parser, python, powershell"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-581.html"
URL_IMAGES: ""
Date: "2026-02-12"
Tags: "Scanner, Parser, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-581"
Permalink: "/scripting/script-web-crawler-and-spider-581.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `gobuster`
- `lookupsid`
- `atexec`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
crackmapexec smb 10.47.206.157 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.154.70/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.40.244.34 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
gobuster dir -u http://10.112.199.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.135.17
gobuster dir -u http://10.87.58.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 14.49s
```
