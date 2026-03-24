---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "parser, python, tool, go"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-840.html"
URL_IMAGES: ""
Date: "2025-05-07"
Tags: "Parser, Python, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-840"
Permalink: "/scripting/script-network-packet-sniffer-840.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `psexec`
- `secretsdump`
- `metasploit`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```go
gobuster dir -u http://10.23.22.61/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.22.218.158 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```go
crackmapexec smb 10.83.202.22 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
gobuster dir -u http://10.116.179.8/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.183.159/FUZZ
feroxbuster -h
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.251.113/FUZZ
feroxbuster -h
```

## Output

### Example Output

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 12.60s
```
