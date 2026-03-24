---
TitleSEO: "Hash Identifier and Cracker Wrapper in Python | ZureFX"
TitlePost: "Hash Identifier and Cracker Wrapper — Python"
Author: "ZureFX"
Description: "A Python script for hash identifier and cracker wrapper. Built for security research and automation."
Keywords: "go, rust, scanner, fuzzer, c, script, python"
URL: "https://zurefx.github.io/scripting/script-hash-identifier-and-cracker-wrapper-173.html"
URL_IMAGES: ""
Date: "2024-06-25"
Tags: "Go, Rust, Scanner, Fuzzer, C, Script, Python"
Section: "scripting"
Lang: "en"
main_img: "script-hash-identifier-and-cracker-wrapper-173"
Permalink: "/scripting/script-hash-identifier-and-cracker-wrapper-173.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `GetUserSPNs`
- `GetUserSPNs`
- `smbexec`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```python
gobuster dir -u http://10.120.127.153/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.121.152.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1521,3389,21 10.30.205.87 -oN scan.txt
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.213.84/FUZZ
feroxbuster -h
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.212.170
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.42.78.11/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.236.63
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 27.70s
```
