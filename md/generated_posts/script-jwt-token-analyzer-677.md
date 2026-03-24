---
TitleSEO: "JWT Token Analyzer in PowerShell | ZureFX"
TitlePost: "JWT Token Analyzer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for jwt token analyzer. Built for security research and automation."
Keywords: "bash, script, automation, tool, parser, powershell"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-677.html"
URL_IMAGES: ""
Date: "2024-01-03"
Tags: "Bash, Script, Automation, Tool, Parser, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-677"
Permalink: "/scripting/script-jwt-token-analyzer-677.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `sqlmap`
- `msfvenom`
- `psexec`

## Implementation

### Core Logic

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.4.212
crackmapexec smb 10.66.13.205 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.105.111.231 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.17.145.157/FUZZ
gobuster dir -u http://10.25.15.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.52.36.215/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
nmap -sCV -p587,8443,143 10.13.76.43 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.233.172/FUZZ
```

## Output

### Example Output

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 1.90s
```
