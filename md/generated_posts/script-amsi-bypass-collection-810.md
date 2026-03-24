---
TitleSEO: "AMSI Bypass Collection in PowerShell | ZureFX"
TitlePost: "AMSI Bypass Collection — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for amsi bypass collection. Built for security research and automation."
Keywords: "script, powershell, python, fuzzer"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-810.html"
URL_IMAGES: ""
Date: "2024-08-14"
Tags: "Script, PowerShell, Python, Fuzzer"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-810"
Permalink: "/scripting/script-amsi-bypass-collection-810.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `msfvenom`
- `msfvenom`
- `nikto`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.55.241.212 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.101.121/FUZZ
evil-winrm -i 10.110.249.67 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.78.237.177 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.33.19/FUZZ
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.79.116.177 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.109.100.39 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.97.242.234 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.26.202.14 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 1.56s
```
