---
TitleSEO: "AMSI Bypass Collection in Bash | ZureFX"
TitlePost: "AMSI Bypass Collection — Bash"
Author: "ZureFX"
Description: "A Bash script for amsi bypass collection. Built for security research and automation."
Keywords: "automation, scanner, fuzzer, bash"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-356.html"
URL_IMAGES: ""
Date: "2024-12-21"
Tags: "Automation, Scanner, Fuzzer, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-356"
Permalink: "/scripting/script-amsi-bypass-collection-356.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `feroxbuster`
- `chisel`
- `enum4linux`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.114.144/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.111.135
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p9200,8443,445 10.88.174.183 -oN scan.txt
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.233.139/FUZZ
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
gobuster dir -u http://10.111.184.18/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 4.19s
```
