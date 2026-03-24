---
TitleSEO: "Web Crawler and Spider in Bash | ZureFX"
TitlePost: "Web Crawler and Spider — Bash"
Author: "ZureFX"
Description: "A Bash script for web crawler and spider. Built for security research and automation."
Keywords: "rust, scanner, parser, python, c, automation, bash"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-670.html"
URL_IMAGES: ""
Date: "2024-12-16"
Tags: "Rust, Scanner, Parser, Python, C, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-670"
Permalink: "/scripting/script-web-crawler-and-spider-670.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `enum4linux`
- `bloodhound`
- `bloodhound`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.71.15.145
nmap -sCV -p80,53,5985 10.30.74.143 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p27017,143,464 10.70.116.230 -oN scan.txt
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.192.210
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.96.205/FUZZ
crackmapexec smb 10.86.195.108 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.166.220/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.40.151.2/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 22.66s
```
