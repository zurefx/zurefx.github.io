---
TitleSEO: "Custom Wordlist Generator in Python | ZureFX"
TitlePost: "Custom Wordlist Generator — Python"
Author: "ZureFX"
Description: "A Python script for custom wordlist generator. Built for security research and automation."
Keywords: "bash, tool, automation, rust, python"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-320.html"
URL_IMAGES: ""
Date: "2025-03-03"
Tags: "Bash, Tool, Automation, Rust, Python"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-320"
Permalink: "/scripting/script-custom-wordlist-generator-320.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `GetUserSPNs`
- `hydra`
- `msfvenom`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```python
feroxbuster -h
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.43.87
gobuster dir -u http://10.98.252.45/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p5985,21,3389 10.100.6.47 -oN scan.txt
crackmapexec smb 10.62.100.64 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 16.81s
```
