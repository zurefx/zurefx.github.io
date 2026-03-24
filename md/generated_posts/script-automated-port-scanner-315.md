---
TitleSEO: "Automated Port Scanner in Bash | ZureFX"
TitlePost: "Automated Port Scanner — Bash"
Author: "ZureFX"
Description: "A Bash script for automated port scanner. Built for security research and automation."
Keywords: "rust, tool, script, automation, c, bash"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-315.html"
URL_IMAGES: ""
Date: "2024-03-18"
Tags: "Rust, Tool, Script, Automation, C, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-315"
Permalink: "/scripting/script-automated-port-scanner-315.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `GetUserSPNs`
- `gobuster`
- `feroxbuster`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.69.190/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.58.167.227 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.49.236.45 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
evil-winrm -i 10.71.31.44 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p995,5432,464 10.40.158.32 -oN scan.txt
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.49.240.216/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 10.81s
```
