---
TitleSEO: "Log Parser and Analyzer in PowerShell | ZureFX"
TitlePost: "Log Parser and Analyzer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for log parser and analyzer. Built for security research and automation."
Keywords: "fuzzer, go, parser, powershell"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-899.html"
URL_IMAGES: ""
Date: "2025-01-16"
Tags: "Fuzzer, Go, Parser, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-899"
Permalink: "/scripting/script-log-parser-and-analyzer-899.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `rubeus`
- `atexec`
- `msfvenom`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.240.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.81.233.29/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p27017,110,389 10.81.20.198 -oN scan.txt
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.171.41/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 13.31s
```
