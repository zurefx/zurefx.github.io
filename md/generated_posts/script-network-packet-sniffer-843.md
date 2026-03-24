---
TitleSEO: "Network Packet Sniffer in Bash | ZureFX"
TitlePost: "Network Packet Sniffer — Bash"
Author: "ZureFX"
Description: "A Bash script for network packet sniffer. Built for security research and automation."
Keywords: "parser, python, scanner, bash, script"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-843.html"
URL_IMAGES: ""
Date: "2024-04-23"
Tags: "Parser, Python, Scanner, Bash, Script"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-843"
Permalink: "/scripting/script-network-packet-sniffer-843.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `feroxbuster`
- `mimikatz`
- `smbclient`

## Implementation

### Core Logic

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
crackmapexec smb 10.114.67.189 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.43.127/FUZZ
nmap -sCV -p3389,445,27017 10.72.120.3 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
gobuster dir -u http://10.22.7.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.76.159.49/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.14.49.43/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.76.5.96 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.122.163.107 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.138.25/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 5.74s
```
