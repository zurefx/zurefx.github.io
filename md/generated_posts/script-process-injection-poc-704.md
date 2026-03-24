---
TitleSEO: "Process Injection PoC in Bash | ZureFX"
TitlePost: "Process Injection PoC — Bash"
Author: "ZureFX"
Description: "A Bash script for process injection poc. Built for security research and automation."
Keywords: "c, scanner, script, rust, powershell, bash"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-704.html"
URL_IMAGES: ""
Date: "2026-01-05"
Tags: "C, Scanner, Script, Rust, PowerShell, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-704"
Permalink: "/scripting/script-process-injection-poc-704.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `dcomexec`
- `ffuf`
- `chisel`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.116.79.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.87.16.128 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p5985,1433,22 10.60.18.131 -oN scan.txt
crackmapexec smb 10.81.33.186 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 28.72s
```
