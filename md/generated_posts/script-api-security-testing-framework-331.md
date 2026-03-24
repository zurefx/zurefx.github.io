---
TitleSEO: "API Security Testing Framework in Go | ZureFX"
TitlePost: "API Security Testing Framework — Go"
Author: "ZureFX"
Description: "A Go script for api security testing framework. Built for security research and automation."
Keywords: "script, powershell, fuzzer, go"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-331.html"
URL_IMAGES: ""
Date: "2024-04-25"
Tags: "Script, PowerShell, Fuzzer, Go"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-331"
Permalink: "/scripting/script-api-security-testing-framework-331.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `psexec`
- `wpscan`
- `ffuf`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.94.74
```

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.244.69
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.53.143.96/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.33.243.135 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.228.216
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.159.102/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.97.53.73/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 21.54s
```
