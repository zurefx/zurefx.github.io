---
TitleSEO: "JWT Token Analyzer in Bash | ZureFX"
TitlePost: "JWT Token Analyzer — Bash"
Author: "ZureFX"
Description: "A Bash script for jwt token analyzer. Built for security research and automation."
Keywords: "python, powershell, go, rust, bash"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-944.html"
URL_IMAGES: ""
Date: "2025-12-21"
Tags: "Python, PowerShell, Go, Rust, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-944"
Permalink: "/scripting/script-jwt-token-analyzer-944.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `ligolo-ng`
- `burpsuite`
- `feroxbuster`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.49.215/FUZZ
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.95.248.229/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p8888,389,993 10.117.219.4 -oN scan.txt
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 6.33s
```
