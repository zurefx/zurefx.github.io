---
TitleSEO: "Web Crawler and Spider in Bash | ZureFX"
TitlePost: "Web Crawler and Spider — Bash"
Author: "ZureFX"
Description: "A Bash script for web crawler and spider. Built for security research and automation."
Keywords: "rust, scanner, powershell, bash"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-790.html"
URL_IMAGES: ""
Date: "2024-10-28"
Tags: "Rust, Scanner, PowerShell, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-790"
Permalink: "/scripting/script-web-crawler-and-spider-790.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `pwncat`
- `ldapsearch`
- `rpcclient`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.118.30/FUZZ
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.195.158/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.64.140
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 21.07s
```
