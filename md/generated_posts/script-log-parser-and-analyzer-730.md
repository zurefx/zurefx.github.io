---
TitleSEO: "Log Parser and Analyzer in Go | ZureFX"
TitlePost: "Log Parser and Analyzer — Go"
Author: "ZureFX"
Description: "A Go script for log parser and analyzer. Built for security research and automation."
Keywords: "fuzzer, go, c, tool, rust, script"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-730.html"
URL_IMAGES: ""
Date: "2024-01-03"
Tags: "Fuzzer, Go, C, Tool, Rust, Script"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-730"
Permalink: "/scripting/script-log-parser-and-analyzer-730.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `wmiexec`
- `ligolo-ng`
- `sharphound`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.242.38/FUZZ
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p53,389,443 10.119.152.249 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.250.21
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.16.77.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 0.59s
```
