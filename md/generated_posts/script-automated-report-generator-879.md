---
TitleSEO: "Automated Report Generator in Go | ZureFX"
TitlePost: "Automated Report Generator — Go"
Author: "ZureFX"
Description: "A Go script for automated report generator. Built for security research and automation."
Keywords: "powershell, scanner, parser, go, tool, automation"
URL: "https://zurefx.github.io/scripting/script-automated-report-generator-879.html"
URL_IMAGES: ""
Date: "2026-01-22"
Tags: "PowerShell, Scanner, Parser, Go, Tool, Automation"
Section: "scripting"
Lang: "en"
main_img: "script-automated-report-generator-879"
Permalink: "/scripting/script-automated-report-generator-879.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `atexec`
- `hydra`
- `pwncat`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```go
nmap -sCV -p443,389,21 10.83.54.197 -oN scan.txt
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.136.240/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
crackmapexec smb 10.47.173.114 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 26.62s
```
