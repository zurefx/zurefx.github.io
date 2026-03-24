---
TitleSEO: "Automated Port Scanner in Go | ZureFX"
TitlePost: "Automated Port Scanner — Go"
Author: "ZureFX"
Description: "A Go script for automated port scanner. Built for security research and automation."
Keywords: "fuzzer, parser, go, c, script"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-307.html"
URL_IMAGES: ""
Date: "2025-04-06"
Tags: "Fuzzer, Parser, Go, C, Script"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-307"
Permalink: "/scripting/script-automated-port-scanner-307.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `pwncat`
- `ffuf`
- `bloodhound`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.61.128.232 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.174.70/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```go
nmap -sCV -p587,636,9200 10.27.160.193 -oN scan.txt
gobuster dir -u http://10.21.30.108/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.132.179/FUZZ
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.250.119/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.38.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.115.133.190 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p587,5432,5432 10.98.103.210 -oN scan.txt
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 6.36s
```
