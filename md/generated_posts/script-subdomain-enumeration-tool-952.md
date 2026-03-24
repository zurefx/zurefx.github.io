---
TitleSEO: "Subdomain Enumeration Tool in Python | ZureFX"
TitlePost: "Subdomain Enumeration Tool — Python"
Author: "ZureFX"
Description: "A Python script for subdomain enumeration tool. Built for security research and automation."
Keywords: "bash, parser, c, python"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-952.html"
URL_IMAGES: ""
Date: "2024-10-23"
Tags: "Bash, Parser, C, Python"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-952"
Permalink: "/scripting/script-subdomain-enumeration-tool-952.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `bloodhound`
- `wpscan`
- `gobuster`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
nmap -sCV -p5432,464,5432 10.40.127.56 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.28.134.193 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
gobuster dir -u http://10.80.102.190/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3306,389,3389 10.10.162.54 -oN scan.txt
nmap -sCV -p5432,993,143 10.29.116.56 -oN scan.txt
crackmapexec smb 10.35.94.146 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.59.153.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.14.9/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.125.140.181/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 25.77s
```
