---
TitleSEO: "SMB Share Enumeration Script in Bash | ZureFX"
TitlePost: "SMB Share Enumeration Script — Bash"
Author: "ZureFX"
Description: "A Bash script for smb share enumeration script. Built for security research and automation."
Keywords: "automation, parser, go, bash, python, tool"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-921.html"
URL_IMAGES: ""
Date: "2025-08-07"
Tags: "Automation, Parser, Go, Bash, Python, Tool"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-921"
Permalink: "/scripting/script-smb-share-enumeration-script-921.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `dcomexec`
- `pwncat`
- `socat`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.52.199.67 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.69.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.62.32.233/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p80,25,8443 10.17.239.46 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 8 results
[+] Done in 2.71s
```
