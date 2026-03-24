---
TitleSEO: "CTF Challenge Solver Template in Go | ZureFX"
TitlePost: "CTF Challenge Solver Template — Go"
Author: "ZureFX"
Description: "A Go script for ctf challenge solver template. Built for security research and automation."
Keywords: "bash, powershell, scanner, rust, tool, go"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-260.html"
URL_IMAGES: ""
Date: "2024-05-27"
Tags: "Bash, PowerShell, Scanner, Rust, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-260"
Permalink: "/scripting/script-ctf-challenge-solver-template-260.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `feroxbuster`
- `john`
- `dcomexec`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```go
gobuster dir -u http://10.128.7.87/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.121.239.195/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p443,1521,53 10.84.207.202 -oN scan.txt
nmap -sCV -p143,5985,80 10.10.143.81 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.170.113/FUZZ
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.99.60.112 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.104.216.28 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 5.93s
```
