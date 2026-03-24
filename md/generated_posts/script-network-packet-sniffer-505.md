---
TitleSEO: "Network Packet Sniffer in PowerShell | ZureFX"
TitlePost: "Network Packet Sniffer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for network packet sniffer. Built for security research and automation."
Keywords: "parser, go, scanner, script, powershell"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-505.html"
URL_IMAGES: ""
Date: "2024-06-20"
Tags: "Parser, Go, Scanner, Script, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-505"
Permalink: "/scripting/script-network-packet-sniffer-505.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `wpscan`
- `kerbrute`
- `socat`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.250.81/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
nmap -sCV -p135,8080,389 10.57.76.101 -oN scan.txt
crackmapexec smb 10.79.164.237 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.77.205/FUZZ
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 23.20s
```
