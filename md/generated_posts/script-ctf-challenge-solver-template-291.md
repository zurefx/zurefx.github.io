---
TitleSEO: "CTF Challenge Solver Template in PowerShell | ZureFX"
TitlePost: "CTF Challenge Solver Template — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for ctf challenge solver template. Built for security research and automation."
Keywords: "rust, python, powershell"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-291.html"
URL_IMAGES: ""
Date: "2024-10-24"
Tags: "Rust, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-291"
Permalink: "/scripting/script-ctf-challenge-solver-template-291.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `atexec`
- `atexec`
- `crackmapexec`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
evil-winrm -i 10.90.148.224 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p1521,5985,389 10.129.106.242 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.119.28.82 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.208.175/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.12.121.244 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.75.47.22 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 13.79s
```
