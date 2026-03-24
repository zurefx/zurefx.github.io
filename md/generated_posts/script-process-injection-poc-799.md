---
TitleSEO: "Process Injection PoC in Go | ZureFX"
TitlePost: "Process Injection PoC — Go"
Author: "ZureFX"
Description: "A Go script for process injection poc. Built for security research and automation."
Keywords: "fuzzer, parser, c, script, rust, go"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-799.html"
URL_IMAGES: ""
Date: "2025-11-13"
Tags: "Fuzzer, Parser, C, Script, Rust, Go"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-799"
Permalink: "/scripting/script-process-injection-poc-799.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `lookupsid`
- `rubeus`
- `socat`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```go
gobuster dir -u http://10.69.239.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.97.77
```

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.223.221/FUZZ
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.41.25.173 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.29.204.210/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 13.45s
```
