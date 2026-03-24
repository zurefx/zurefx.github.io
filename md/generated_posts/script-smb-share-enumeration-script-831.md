---
TitleSEO: "SMB Share Enumeration Script in Go | ZureFX"
TitlePost: "SMB Share Enumeration Script — Go"
Author: "ZureFX"
Description: "A Go script for smb share enumeration script. Built for security research and automation."
Keywords: "rust, automation, bash, go"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-831.html"
URL_IMAGES: ""
Date: "2024-09-21"
Tags: "Rust, Automation, Bash, Go"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-831"
Permalink: "/scripting/script-smb-share-enumeration-script-831.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `gobuster`
- `enum4linux`
- `bloodhound`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.108.117 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.80.161/FUZZ
gobuster dir -u http://10.81.43.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```go
gobuster dir -u http://10.42.253.106/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.32.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 19 results
[+] Done in 23.54s
```
