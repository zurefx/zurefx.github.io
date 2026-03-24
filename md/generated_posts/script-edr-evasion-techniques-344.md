---
TitleSEO: "EDR Evasion Techniques in PowerShell | ZureFX"
TitlePost: "EDR Evasion Techniques — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for edr evasion techniques. Built for security research and automation."
Keywords: "bash, parser, scanner, powershell"
URL: "https://zurefx.github.io/scripting/script-edr-evasion-techniques-344.html"
URL_IMAGES: ""
Date: "2025-02-20"
Tags: "Bash, Parser, Scanner, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-edr-evasion-techniques-344"
Permalink: "/scripting/script-edr-evasion-techniques-344.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `rpcclient`
- `bloodhound`
- `lookupsid`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.100.241
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.227.233/FUZZ
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.79.226.206/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.47.232.39/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 7.93s
```
