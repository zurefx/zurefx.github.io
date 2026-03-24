---
TitleSEO: "C2 Beacon Simulator in Go | ZureFX"
TitlePost: "C2 Beacon Simulator — Go"
Author: "ZureFX"
Description: "A Go script for c2 beacon simulator. Built for security research and automation."
Keywords: "fuzzer, script, automation, go"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-684.html"
URL_IMAGES: ""
Date: "2026-01-22"
Tags: "Fuzzer, Script, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-684"
Permalink: "/scripting/script-c2-beacon-simulator-684.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `pwncat`
- `atexec`
- `dcomexec`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
gobuster dir -u http://10.43.226.180/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.102.109.243 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.29.59.111 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```go
nmap -sCV -p1433,636,22 10.27.16.176 -oN scan.txt
evil-winrm -i 10.48.68.52 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.128.43/FUZZ
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.167.221/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.253.43/FUZZ
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 26.05s
```
