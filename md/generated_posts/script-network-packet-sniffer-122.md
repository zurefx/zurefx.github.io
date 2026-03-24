---
TitleSEO: "Network Packet Sniffer in Bash | ZureFX"
TitlePost: "Network Packet Sniffer — Bash"
Author: "ZureFX"
Description: "A Bash script for network packet sniffer. Built for security research and automation."
Keywords: "tool, powershell, parser, go, bash"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-122.html"
URL_IMAGES: ""
Date: "2024-02-14"
Tags: "Tool, PowerShell, Parser, Go, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-122"
Permalink: "/scripting/script-network-packet-sniffer-122.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `dcomexec`
- `smbclient`
- `evil-winrm`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p21,995,3389 10.70.81.166 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Helper Functions

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.125.82
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.158.61
gobuster dir -u http://10.53.113.126/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1433,587,9200 10.13.157.131 -oN scan.txt
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.183.166/FUZZ
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 16.14s
```
