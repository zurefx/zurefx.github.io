---
TitleSEO: "DNS Resolver and Brute Forcer in Bash | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Bash"
Author: "ZureFX"
Description: "A Bash script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "script, automation, tool, parser, bash"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-334.html"
URL_IMAGES: ""
Date: "2025-05-17"
Tags: "Script, Automation, Tool, Parser, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-334"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-334.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `smbexec`
- `ldapsearch`
- `evil-winrm`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p5985,445,5432 10.71.248.52 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.114.38 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p443,21,8080 10.96.24.69 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.31.200.17
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p22,9200,5986 10.83.7.116 -oN scan.txt
gobuster dir -u http://10.88.253.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.132.28/FUZZ
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 26.03s
```
