---
TitleSEO: "Payload Obfuscation Script in Go | ZureFX"
TitlePost: "Payload Obfuscation Script — Go"
Author: "ZureFX"
Description: "A Go script for payload obfuscation script. Built for security research and automation."
Keywords: "scanner, parser, c, go"
URL: "https://zurefx.github.io/scripting/script-payload-obfuscation-script-851.html"
URL_IMAGES: ""
Date: "2024-05-10"
Tags: "Scanner, Parser, C, Go"
Section: "scripting"
Lang: "en"
main_img: "script-payload-obfuscation-script-851"
Permalink: "/scripting/script-payload-obfuscation-script-851.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `chisel`
- `mimikatz`
- `enum4linux`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

```go
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

### Helper Functions

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```go
evil-winrm -i 10.63.48.135 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.61.63.107/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.167.163
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.42.211
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 26.71s
```
