---
TitleSEO: "Hash Identifier and Cracker Wrapper in Bash | ZureFX"
TitlePost: "Hash Identifier and Cracker Wrapper — Bash"
Author: "ZureFX"
Description: "A Bash script for hash identifier and cracker wrapper. Built for security research and automation."
Keywords: "python, parser, automation, bash"
URL: "https://zurefx.github.io/scripting/script-hash-identifier-and-cracker-wrapper-522.html"
URL_IMAGES: ""
Date: "2024-09-09"
Tags: "Python, Parser, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-hash-identifier-and-cracker-wrapper-522"
Permalink: "/scripting/script-hash-identifier-and-cracker-wrapper-522.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `atexec`
- `gobuster`
- `GetNPUsers`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p1521,5432,143 10.72.236.69 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.145.127 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p27017,3306,8080 10.44.168.30 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.24.197.113/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p27017,23,445 10.115.228.150 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.60.195.129 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.70.166.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 22.39s
```
