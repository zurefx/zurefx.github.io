---
TitleSEO: "Web Crawler and Spider in PowerShell | ZureFX"
TitlePost: "Web Crawler and Spider — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for web crawler and spider. Built for security research and automation."
Keywords: "bash, fuzzer, script, rust, powershell, automation"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-994.html"
URL_IMAGES: ""
Date: "2026-02-28"
Tags: "Bash, Fuzzer, Script, Rust, PowerShell, Automation"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-994"
Permalink: "/scripting/script-web-crawler-and-spider-994.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `john`
- `netcat`
- `socat`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.111.157.19 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.74.37 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.93.222.181/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.126.143.40 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.90.190.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.71.193 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.60.169.43 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p587,110,1433 10.118.157.89 -oN scan.txt
feroxbuster -h
crackmapexec smb 10.38.216.1 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 28.21s
```
