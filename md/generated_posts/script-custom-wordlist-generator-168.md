---
TitleSEO: "Custom Wordlist Generator in PowerShell | ZureFX"
TitlePost: "Custom Wordlist Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for custom wordlist generator. Built for security research and automation."
Keywords: "c, scanner, tool, script, powershell"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-168.html"
URL_IMAGES: ""
Date: "2024-05-01"
Tags: "C, Scanner, Tool, Script, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-168"
Permalink: "/scripting/script-custom-wordlist-generator-168.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `sharphound`
- `wpscan`
- `wpscan`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.131.238/FUZZ
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```powershell
evil-winrm -i 10.96.103.86 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5432,23,1521 10.123.204.177 -oN scan.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.164.194
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.57.138.78 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p135,139,53 10.125.226.204 -oN scan.txt
crackmapexec smb 10.83.49.81 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.141.214/FUZZ
gobuster dir -u http://10.62.33.99/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 24.70s
```
