---
TitleSEO: "CTF Challenge Solver Template in Go | ZureFX"
TitlePost: "CTF Challenge Solver Template — Go"
Author: "ZureFX"
Description: "A Go script for ctf challenge solver template. Built for security research and automation."
Keywords: "powershell, parser, python, tool, go"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-779.html"
URL_IMAGES: ""
Date: "2024-08-01"
Tags: "PowerShell, Parser, Python, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-779"
Permalink: "/scripting/script-ctf-challenge-solver-template-779.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `bloodhound`
- `ffuf`
- `feroxbuster`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```go
nmap -sCV -p3306,25,8443 10.43.232.145 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.34.146/FUZZ
crackmapexec smb 10.68.172.213 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3268,110,25 10.13.76.52 -oN scan.txt
```

## Usage

### Basic Usage

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.85.168 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.78.146.15 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.45.85/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.240.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.218.237/FUZZ
evil-winrm -i 10.35.218.198 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 14.80s
```
