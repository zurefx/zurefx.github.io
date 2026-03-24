---
TitleSEO: "Reverse Shell Generator in PowerShell | ZureFX"
TitlePost: "Reverse Shell Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for reverse shell generator. Built for security research and automation."
Keywords: "tool, rust, go, bash, fuzzer, powershell"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-129.html"
URL_IMAGES: ""
Date: "2026-01-17"
Tags: "Tool, Rust, Go, Bash, Fuzzer, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-129"
Permalink: "/scripting/script-reverse-shell-generator-129.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `atexec`
- `nmap`
- `bloodhound`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
feroxbuster -h
evil-winrm -i 10.87.133.33 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p21,23,25 10.19.167.225 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.2.204 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.125.59/FUZZ
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.107.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.211.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.97.166.214/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.39.76.103 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.213.48/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 7.21s
```
