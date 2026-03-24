---
TitleSEO: "Automated Port Scanner in Go | ZureFX"
TitlePost: "Automated Port Scanner — Go"
Author: "ZureFX"
Description: "A Go script for automated port scanner. Built for security research and automation."
Keywords: "c, scanner, rust, python, parser, go"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-425.html"
URL_IMAGES: ""
Date: "2024-01-17"
Tags: "C, Scanner, Rust, Python, Parser, Go"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-425"
Permalink: "/scripting/script-automated-port-scanner-425.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `socat`
- `rpcclient`
- `gobuster`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.109.85 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p9200,23,8888 10.36.85.31 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```go
feroxbuster -h
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.34.42.30 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.115.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 21.17s
```
