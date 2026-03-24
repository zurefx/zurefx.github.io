---
TitleSEO: "Subdomain Enumeration Tool in Go | ZureFX"
TitlePost: "Subdomain Enumeration Tool — Go"
Author: "ZureFX"
Description: "A Go script for subdomain enumeration tool. Built for security research and automation."
Keywords: "fuzzer, scanner, python, go"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-421.html"
URL_IMAGES: ""
Date: "2025-11-24"
Tags: "Fuzzer, Scanner, Python, Go"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-421"
Permalink: "/scripting/script-subdomain-enumeration-tool-421.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `wpscan`
- `sharphound`
- `burpsuite`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.127.18.154 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.31.111 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.19.217.8/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 27.94s
```
