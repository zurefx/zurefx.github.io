---
TitleSEO: "Log Parser and Analyzer in Bash | ZureFX"
TitlePost: "Log Parser and Analyzer — Bash"
Author: "ZureFX"
Description: "A Bash script for log parser and analyzer. Built for security research and automation."
Keywords: "script, powershell, c, bash, tool"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-587.html"
URL_IMAGES: ""
Date: "2024-09-08"
Tags: "Script, PowerShell, C, Bash, Tool"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-587"
Permalink: "/scripting/script-log-parser-and-analyzer-587.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `burpsuite`
- `GetNPUsers`
- `evil-winrm`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.105.152/FUZZ
evil-winrm -i 10.38.122.165 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.91.73.35 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,993,636 10.111.3.63 -oN scan.txt
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
gobuster dir -u http://10.124.62.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 22.26s
```
