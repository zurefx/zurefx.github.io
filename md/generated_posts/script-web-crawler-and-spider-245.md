---
TitleSEO: "Web Crawler and Spider in Python | ZureFX"
TitlePost: "Web Crawler and Spider — Python"
Author: "ZureFX"
Description: "A Python script for web crawler and spider. Built for security research and automation."
Keywords: "python, rust, bash"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-245.html"
URL_IMAGES: ""
Date: "2025-05-31"
Tags: "Python, Rust, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-245"
Permalink: "/scripting/script-web-crawler-and-spider-245.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `rpcclient`
- `dcomexec`
- `burpsuite`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```python
evil-winrm -i 10.106.31.96 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8080,53,3389 10.113.179.90 -oN scan.txt
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.97.124.143 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.78.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.25.38 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.165.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.105.122.161 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
evil-winrm -i 10.102.121.131 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 16.83s
```
