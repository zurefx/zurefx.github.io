---
TitleSEO: "Process Injection PoC in Bash | ZureFX"
TitlePost: "Process Injection PoC — Bash"
Author: "ZureFX"
Description: "A Bash script for process injection poc. Built for security research and automation."
Keywords: "script, scanner, bash, python"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-169.html"
URL_IMAGES: ""
Date: "2025-07-24"
Tags: "Script, Scanner, Bash, Python"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-169"
Permalink: "/scripting/script-process-injection-poc-169.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `wmiexec`
- `sharphound`
- `hashcat`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.139.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p80,23,80 10.39.225.19 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.149.140/FUZZ
crackmapexec smb 10.59.78.203 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p389,135,995 10.105.102.100 -oN scan.txt
crackmapexec smb 10.121.99.167 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.202.37/FUZZ
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.64.241.37 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 29.25s
```
