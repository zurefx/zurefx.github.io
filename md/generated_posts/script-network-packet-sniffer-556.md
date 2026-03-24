---
TitleSEO: "Network Packet Sniffer in PowerShell | ZureFX"
TitlePost: "Network Packet Sniffer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for network packet sniffer. Built for security research and automation."
Keywords: "script, fuzzer, c, scanner, go, bash, powershell"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-556.html"
URL_IMAGES: ""
Date: "2025-06-16"
Tags: "Script, Fuzzer, C, Scanner, Go, Bash, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-556"
Permalink: "/scripting/script-network-packet-sniffer-556.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `hydra`
- `burpsuite`
- `smbclient`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p9200,995,22 10.104.90.160 -oN scan.txt
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.70.130/FUZZ
crackmapexec smb 10.121.159.92 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p8080,135,143 10.27.33.232 -oN scan.txt
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 8.25s
```
