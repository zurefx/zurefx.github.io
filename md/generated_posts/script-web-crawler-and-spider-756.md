---
TitleSEO: "Web Crawler and Spider in Go | ZureFX"
TitlePost: "Web Crawler and Spider — Go"
Author: "ZureFX"
Description: "A Go script for web crawler and spider. Built for security research and automation."
Keywords: "python, go, rust, scanner, script"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-756.html"
URL_IMAGES: ""
Date: "2025-05-10"
Tags: "Python, Go, Rust, Scanner, Script"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-756"
Permalink: "/scripting/script-web-crawler-and-spider-756.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `evil-winrm`
- `nmap`
- `netcat`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```go
evil-winrm -i 10.51.211.193 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.19.60.175 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.82.53.142 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```go
gobuster dir -u http://10.15.221.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.60.244.44 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.128.53.148 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.74.51.160 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.40.99/FUZZ
nmap -sCV -p8080,53,3268 10.83.6.76 -oN scan.txt
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 21.25s
```
