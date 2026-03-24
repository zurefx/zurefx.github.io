---
TitleSEO: "Web Crawler and Spider in Bash | ZureFX"
TitlePost: "Web Crawler and Spider — Bash"
Author: "ZureFX"
Description: "A Bash script for web crawler and spider. Built for security research and automation."
Keywords: "automation, parser, scanner, bash"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-516.html"
URL_IMAGES: ""
Date: "2024-03-02"
Tags: "Automation, Parser, Scanner, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-516"
Permalink: "/scripting/script-web-crawler-and-spider-516.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `burpsuite`
- `bloodhound`
- `nikto`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5986,995,23 10.117.83.155 -oN scan.txt
gobuster dir -u http://10.97.61.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.221.208/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.209.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.60.197.211 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.124.226.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.76.221/FUZZ
feroxbuster -h
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.63.14.23 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.85.153.247 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
crackmapexec smb 10.58.74.56 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 8 results
[+] Done in 25.53s
```
