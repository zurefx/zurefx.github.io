---
TitleSEO: "API Security Testing Framework in Go | ZureFX"
TitlePost: "API Security Testing Framework — Go"
Author: "ZureFX"
Description: "A Go script for api security testing framework. Built for security research and automation."
Keywords: "parser, python, scanner, go"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-933.html"
URL_IMAGES: ""
Date: "2025-03-19"
Tags: "Parser, Python, Scanner, Go"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-933"
Permalink: "/scripting/script-api-security-testing-framework-933.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Go** for offensive security automation.

### Requirements

- Go
- `evil-winrm`
- `smbexec`
- `secretsdump`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```go
evil-winrm -i 10.40.207.81 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```go
crackmapexec smb 10.27.144.25 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.72.220.30 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.89.125.245 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 22.94s
```
