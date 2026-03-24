---
TitleSEO: "Subdomain Enumeration Tool in Python | ZureFX"
TitlePost: "Subdomain Enumeration Tool — Python"
Author: "ZureFX"
Description: "A Python script for subdomain enumeration tool. Built for security research and automation."
Keywords: "rust, go, python"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-190.html"
URL_IMAGES: ""
Date: "2024-11-14"
Tags: "Rust, Go, Python"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-190"
Permalink: "/scripting/script-subdomain-enumeration-tool-190.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `msfvenom`
- `msfvenom`
- `impacket`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```python
nmap -sCV -p636,8888,80 10.119.183.250 -oN scan.txt
evil-winrm -i 10.90.145.149 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.97.83/FUZZ
```

## Usage

### Basic Usage

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p636,464,993 10.125.227.156 -oN scan.txt
evil-winrm -i 10.41.191.179 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
crackmapexec smb 10.86.175.205 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 18.06s
```
