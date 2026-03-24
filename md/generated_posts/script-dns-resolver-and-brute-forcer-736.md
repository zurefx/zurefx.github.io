---
TitleSEO: "DNS Resolver and Brute Forcer in Bash | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Bash"
Author: "ZureFX"
Description: "A Bash script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "c, tool, go, rust, fuzzer, automation, bash"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-736.html"
URL_IMAGES: ""
Date: "2024-10-07"
Tags: "C, Tool, Go, Rust, Fuzzer, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-736"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-736.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `mimikatz`
- `nmap`
- `mimikatz`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.83.126.185 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5985,8080,9200 10.107.140.35 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p389,1433,1433 10.52.228.190 -oN scan.txt
nmap -sCV -p135,993,8443 10.99.118.98 -oN scan.txt
crackmapexec smb 10.28.65.21 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.49.39.138/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p135,389,53 10.120.196.12 -oN scan.txt
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.113.175.149 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.119.222.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 8.87s
```
