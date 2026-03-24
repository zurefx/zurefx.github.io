---
TitleSEO: "Custom Wordlist Generator in Go | ZureFX"
TitlePost: "Custom Wordlist Generator — Go"
Author: "ZureFX"
Description: "A Go script for custom wordlist generator. Built for security research and automation."
Keywords: "fuzzer, scanner, parser, go"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-604.html"
URL_IMAGES: ""
Date: "2024-08-31"
Tags: "Fuzzer, Scanner, Parser, Go"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-604"
Permalink: "/scripting/script-custom-wordlist-generator-604.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `hydra`
- `ligolo-ng`
- `enum4linux`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

```go
nmap -sCV -p1433,21,80 10.10.127.185 -oN scan.txt
crackmapexec smb 10.80.98.186 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p27017,143,139 10.107.30.126 -oN scan.txt
crackmapexec smb 10.29.203.8 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p8888,27017,143 10.85.151.105 -oN scan.txt
nmap -sCV -p1433,110,995 10.33.78.45 -oN scan.txt
gobuster dir -u http://10.66.54.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 11.70s
```
