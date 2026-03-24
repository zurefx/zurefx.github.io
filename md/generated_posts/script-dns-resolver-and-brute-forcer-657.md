---
TitleSEO: "DNS Resolver and Brute Forcer in Python | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Python"
Author: "ZureFX"
Description: "A Python script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "fuzzer, scanner, python, automation, powershell, bash"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-657.html"
URL_IMAGES: ""
Date: "2025-01-25"
Tags: "Fuzzer, Scanner, Python, Automation, PowerShell, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-657"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-657.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `GetNPUsers`
- `impacket`
- `gobuster`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.234.64/FUZZ
evil-winrm -i 10.31.152.63 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.124.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```python
nmap -sCV -p443,8888,22 10.127.153.142 -oN scan.txt
evil-winrm -i 10.33.210.220 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.58.141.152 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p8888,995,21 10.103.239.44 -oN scan.txt
crackmapexec smb 10.128.216.22 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.62.21.67/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 0.94s
```
