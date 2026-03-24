---
TitleSEO: "AMSI Bypass Collection in PowerShell | ZureFX"
TitlePost: "AMSI Bypass Collection — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for amsi bypass collection. Built for security research and automation."
Keywords: "bash, parser, scanner, automation, powershell"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-750.html"
URL_IMAGES: ""
Date: "2026-02-15"
Tags: "Bash, Parser, Scanner, Automation, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-750"
Permalink: "/scripting/script-amsi-bypass-collection-750.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `evil-winrm`
- `GetNPUsers`
- `kerbrute`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.205.174/FUZZ
gobuster dir -u http://10.126.115.155/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.59.141.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.41.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p464,135,464 10.97.175.49 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.30.3.176 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 9.67s
```
