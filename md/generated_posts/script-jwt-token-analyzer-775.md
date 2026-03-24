---
TitleSEO: "JWT Token Analyzer in Go | ZureFX"
TitlePost: "JWT Token Analyzer — Go"
Author: "ZureFX"
Description: "A Go script for jwt token analyzer. Built for security research and automation."
Keywords: "go, rust, bash, tool, python"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-775.html"
URL_IMAGES: ""
Date: "2025-05-01"
Tags: "Go, Rust, Bash, Tool, Python"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-775"
Permalink: "/scripting/script-jwt-token-analyzer-775.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `socat`
- `bloodhound`
- `mimikatz`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.12.200/FUZZ
gobuster dir -u http://10.59.5.49/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```go
crackmapexec smb 10.76.61.230 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.16.238.221 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.30.126/FUZZ
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 10.65s
```
