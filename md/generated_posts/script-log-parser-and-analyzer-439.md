---
TitleSEO: "Log Parser and Analyzer in Bash | ZureFX"
TitlePost: "Log Parser and Analyzer — Bash"
Author: "ZureFX"
Description: "A Bash script for log parser and analyzer. Built for security research and automation."
Keywords: "fuzzer, scanner, tool, python, powershell, go, bash"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-439.html"
URL_IMAGES: ""
Date: "2024-07-11"
Tags: "Fuzzer, Scanner, Tool, Python, PowerShell, Go, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-439"
Permalink: "/scripting/script-log-parser-and-analyzer-439.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `sharphound`
- `metasploit`
- `lookupsid`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.85.101.211 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.8.229 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
feroxbuster -h
crackmapexec smb 10.89.80.74 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.151.139 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.17.57.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 21.18s
```
