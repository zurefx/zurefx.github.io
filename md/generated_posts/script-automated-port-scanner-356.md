---
TitleSEO: "Automated Port Scanner in Bash | ZureFX"
TitlePost: "Automated Port Scanner — Bash"
Author: "ZureFX"
Description: "A Bash script for automated port scanner. Built for security research and automation."
Keywords: "scanner, tool, go, python, bash"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-356.html"
URL_IMAGES: ""
Date: "2025-01-25"
Tags: "Scanner, Tool, Go, Python, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-356"
Permalink: "/scripting/script-automated-port-scanner-356.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `dcomexec`
- `GetNPUsers`
- `nmap`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p993,587,636 10.109.52.51 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
gobuster dir -u http://10.17.185.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.68.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.184.237 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.60.223.185 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 17.13s
```
