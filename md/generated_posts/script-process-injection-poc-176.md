---
TitleSEO: "Process Injection PoC in Go | ZureFX"
TitlePost: "Process Injection PoC — Go"
Author: "ZureFX"
Description: "A Go script for process injection poc. Built for security research and automation."
Keywords: "parser, scanner, python, go, powershell, script"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-176.html"
URL_IMAGES: ""
Date: "2025-08-11"
Tags: "Parser, Scanner, Python, Go, PowerShell, Script"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-176"
Permalink: "/scripting/script-process-injection-poc-176.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `impacket`
- `nikto`
- `john`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```go
evil-winrm -i 10.91.245.102 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.105.209.227/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.67.71.228/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```go
nmap -sCV -p110,3389,27017 10.33.108.133 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.231.61/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.42.199/FUZZ
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.145.136/FUZZ
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.34.189.148 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.43.19.95 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.31.90 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5986,21,139 10.57.241.89 -oN scan.txt
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 17.05s
```
