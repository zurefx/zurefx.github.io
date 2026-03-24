---
TitleSEO: "Process Injection PoC in Go | ZureFX"
TitlePost: "Process Injection PoC — Go"
Author: "ZureFX"
Description: "A Go script for process injection poc. Built for security research and automation."
Keywords: "rust, bash, c, powershell, automation, go"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-141.html"
URL_IMAGES: ""
Date: "2024-03-09"
Tags: "Rust, Bash, C, PowerShell, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-141"
Permalink: "/scripting/script-process-injection-poc-141.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `pwncat`
- `enum4linux`
- `secretsdump`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```go
crackmapexec smb 10.115.173.240 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.68.135.114 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.126.243.161 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.35.142.228 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.113.42/FUZZ
nmap -sCV -p9200,8080,8080 10.35.174.33 -oN scan.txt
```

### Advanced Options

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.15.64.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.82.26/FUZZ
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 22.06s
```
