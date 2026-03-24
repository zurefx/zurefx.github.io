---
TitleSEO: "Network Packet Sniffer in PowerShell | ZureFX"
TitlePost: "Network Packet Sniffer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for network packet sniffer. Built for security research and automation."
Keywords: "powershell, tool, scanner, go"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-297.html"
URL_IMAGES: ""
Date: "2025-06-17"
Tags: "PowerShell, Tool, Scanner, Go"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-297"
Permalink: "/scripting/script-network-packet-sniffer-297.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `gobuster`
- `bloodhound`
- `socat`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.81.214
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.124.205
```

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.17.41.87 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.253.239/FUZZ
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.84.161
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 29.27s
```
