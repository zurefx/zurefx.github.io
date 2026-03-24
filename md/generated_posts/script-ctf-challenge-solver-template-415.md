---
TitleSEO: "CTF Challenge Solver Template in Go | ZureFX"
TitlePost: "CTF Challenge Solver Template — Go"
Author: "ZureFX"
Description: "A Go script for ctf challenge solver template. Built for security research and automation."
Keywords: "c, go, rust, bash, scanner"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-415.html"
URL_IMAGES: ""
Date: "2024-09-24"
Tags: "C, Go, Rust, Bash, Scanner"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-415"
Permalink: "/scripting/script-ctf-challenge-solver-template-415.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `nikto`
- `smbclient`
- `feroxbuster`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```go
gobuster dir -u http://10.59.46.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.170.28/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.204.135/FUZZ
feroxbuster -h
nmap -sCV -p80,3306,110 10.33.158.117 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.184.162 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.68.56.67 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5985,22,143 10.120.150.191 -oN scan.txt
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.112.162.187/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 11.47s
```
