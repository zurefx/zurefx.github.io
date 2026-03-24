---
TitleSEO: "Reverse Shell Generator in PowerShell | ZureFX"
TitlePost: "Reverse Shell Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for reverse shell generator. Built for security research and automation."
Keywords: "automation, python, scanner, powershell"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-617.html"
URL_IMAGES: ""
Date: "2024-03-08"
Tags: "Automation, Python, Scanner, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-617"
Permalink: "/scripting/script-reverse-shell-generator-617.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `feroxbuster`
- `rpcclient`
- `GetUserSPNs`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.101.81/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.249.241/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.142.116 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.68.221.226/FUZZ
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.192.191/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 1.83s
```
