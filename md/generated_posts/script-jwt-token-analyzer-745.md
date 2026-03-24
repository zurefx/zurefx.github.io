---
TitleSEO: "JWT Token Analyzer in PowerShell | ZureFX"
TitlePost: "JWT Token Analyzer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for jwt token analyzer. Built for security research and automation."
Keywords: "tool, go, script, powershell"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-745.html"
URL_IMAGES: ""
Date: "2024-03-28"
Tags: "Tool, Go, Script, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-745"
Permalink: "/scripting/script-jwt-token-analyzer-745.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `feroxbuster`
- `hydra`
- `secretsdump`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.36.68.199 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.82.119.32/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.31.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 7.15s
```
