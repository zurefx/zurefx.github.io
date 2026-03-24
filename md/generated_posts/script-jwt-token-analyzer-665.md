---
TitleSEO: "JWT Token Analyzer in Python | ZureFX"
TitlePost: "JWT Token Analyzer — Python"
Author: "ZureFX"
Description: "A Python script for jwt token analyzer. Built for security research and automation."
Keywords: "automation, script, parser, python"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-665.html"
URL_IMAGES: ""
Date: "2024-10-19"
Tags: "Automation, Script, Parser, Python"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-665"
Permalink: "/scripting/script-jwt-token-analyzer-665.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `wmiexec`
- `msfvenom`
- `atexec`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.20.237/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.41.133
```

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```python
feroxbuster -h
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.175.143/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p389,27017,143 10.67.9.138 -oN scan.txt
nmap -sCV -p389,8443,9200 10.108.134.11 -oN scan.txt
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 6.45s
```
