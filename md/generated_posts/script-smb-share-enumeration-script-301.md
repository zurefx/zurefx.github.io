---
TitleSEO: "SMB Share Enumeration Script in Bash | ZureFX"
TitlePost: "SMB Share Enumeration Script — Bash"
Author: "ZureFX"
Description: "A Bash script for smb share enumeration script. Built for security research and automation."
Keywords: "rust, parser, bash, scanner, tool, fuzzer"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-301.html"
URL_IMAGES: ""
Date: "2025-02-28"
Tags: "Rust, Parser, Bash, Scanner, Tool, Fuzzer"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-301"
Permalink: "/scripting/script-smb-share-enumeration-script-301.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `pwncat`
- `evil-winrm`
- `feroxbuster`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.42.202.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.89.226.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.246.214/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.117.228.35
crackmapexec smb 10.49.244.205 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.95.227.175/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.30.182.135/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p110,5985,636 10.113.26.41 -oN scan.txt
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 12.58s
```
