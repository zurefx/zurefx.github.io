---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "go, automation, scanner, python"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-795.html"
URL_IMAGES: ""
Date: "2025-05-04"
Tags: "Go, Automation, Scanner, Python"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-795"
Permalink: "/scripting/script-network-packet-sniffer-795.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `socat`
- `ligolo-ng`
- `burpsuite`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.141.156/FUZZ
gobuster dir -u http://10.58.152.90/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.75.8
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```go
gobuster dir -u http://10.19.170.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.84.244.148/FUZZ
crackmapexec smb 10.51.82.213 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.6.109/FUZZ
gobuster dir -u http://10.18.227.8/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p143,443,80 10.81.84.184 -oN scan.txt
```

### Advanced Options

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.171.196/FUZZ
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 8 results
[+] Done in 7.43s
```
