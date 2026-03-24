---
TitleSEO: "Web Crawler and Spider in Python | ZureFX"
TitlePost: "Web Crawler and Spider — Python"
Author: "ZureFX"
Description: "A Python script for web crawler and spider. Built for security research and automation."
Keywords: "rust, tool, script, bash, automation, python"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-308.html"
URL_IMAGES: ""
Date: "2024-03-10"
Tags: "Rust, Tool, Script, Bash, Automation, Python"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-308"
Permalink: "/scripting/script-web-crawler-and-spider-308.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `ldapsearch`
- `wmiexec`
- `john`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```python
crackmapexec smb 10.47.141.25 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.119.121.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.21.14.208/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.226.193/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.14.133/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.248.149/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.144.191 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.41.89/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.60.45/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 4.60s
```
