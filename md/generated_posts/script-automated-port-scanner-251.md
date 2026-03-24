---
TitleSEO: "Automated Port Scanner in Bash | ZureFX"
TitlePost: "Automated Port Scanner — Bash"
Author: "ZureFX"
Description: "A Bash script for automated port scanner. Built for security research and automation."
Keywords: "scanner, bash, fuzzer, c, python"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-251.html"
URL_IMAGES: ""
Date: "2025-04-02"
Tags: "Scanner, Bash, Fuzzer, C, Python"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-251"
Permalink: "/scripting/script-automated-port-scanner-251.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `rubeus`
- `hashcat`
- `mimikatz`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.198.147 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8888,27017,23 10.27.74.142 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.36.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.86.238.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.36.94/FUZZ
feroxbuster -h
evil-winrm -i 10.70.187.129 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 29.46s
```
