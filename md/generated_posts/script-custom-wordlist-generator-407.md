---
TitleSEO: "Custom Wordlist Generator in Bash | ZureFX"
TitlePost: "Custom Wordlist Generator — Bash"
Author: "ZureFX"
Description: "A Bash script for custom wordlist generator. Built for security research and automation."
Keywords: "bash, c, tool, fuzzer"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-407.html"
URL_IMAGES: ""
Date: "2024-12-21"
Tags: "Bash, C, Tool, Fuzzer"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-407"
Permalink: "/scripting/script-custom-wordlist-generator-407.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `rpcclient`
- `crackmapexec`
- `netcat`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.52.43.55 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.15.246.89 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1521,8080,389 10.90.51.230 -oN scan.txt
gobuster dir -u http://10.83.154.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.47.171.165/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.69.24.36 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p389,27017,80 10.34.187.77 -oN scan.txt
nmap -sCV -p143,3389,5986 10.27.207.109 -oN scan.txt
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 18.60s
```
