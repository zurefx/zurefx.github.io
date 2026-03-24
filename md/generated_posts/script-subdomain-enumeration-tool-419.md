---
TitleSEO: "Subdomain Enumeration Tool in Bash | ZureFX"
TitlePost: "Subdomain Enumeration Tool — Bash"
Author: "ZureFX"
Description: "A Bash script for subdomain enumeration tool. Built for security research and automation."
Keywords: "bash, script, fuzzer, parser"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-419.html"
URL_IMAGES: ""
Date: "2025-06-16"
Tags: "Bash, Script, Fuzzer, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-419"
Permalink: "/scripting/script-subdomain-enumeration-tool-419.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `msfvenom`
- `chisel`
- `ligolo-ng`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.200.226/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.84.24.113 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.42.84.7 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.27.99.66 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.191.196/FUZZ
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p587,80,3268 10.64.119.38 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.113.169.19/FUZZ
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.51.186.84/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 10.86s
```
