---
TitleSEO: "SMB Share Enumeration Script in Go | ZureFX"
TitlePost: "SMB Share Enumeration Script — Go"
Author: "ZureFX"
Description: "A Go script for smb share enumeration script. Built for security research and automation."
Keywords: "python, tool, automation, powershell, go"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-257.html"
URL_IMAGES: ""
Date: "2025-03-10"
Tags: "Python, Tool, Automation, PowerShell, Go"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-257"
Permalink: "/scripting/script-smb-share-enumeration-script-257.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `ffuf`
- `lookupsid`
- `psexec`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.196.115 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8443,443,995 10.32.190.143 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.98.202/FUZZ
crackmapexec smb 10.50.231.232 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.178.140/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.205.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.94.2/FUZZ
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 12.84s
```
