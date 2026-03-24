---
TitleSEO: "Network Packet Sniffer in PowerShell | ZureFX"
TitlePost: "Network Packet Sniffer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for network packet sniffer. Built for security research and automation."
Keywords: "parser, tool, automation, script, bash, c, powershell"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-199.html"
URL_IMAGES: ""
Date: "2025-08-02"
Tags: "Parser, Tool, Automation, Script, Bash, C, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-199"
Permalink: "/scripting/script-network-packet-sniffer-199.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `rpcclient`
- `impacket`
- `nmap`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.60.3.171/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.242.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.40.55.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.51.178.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.11.116.172/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.110.123.144 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p995,135,3306 10.28.85.15 -oN scan.txt
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.13.131.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 17.95s
```
