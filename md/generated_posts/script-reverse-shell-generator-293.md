---
TitleSEO: "Reverse Shell Generator in Bash | ZureFX"
TitlePost: "Reverse Shell Generator — Bash"
Author: "ZureFX"
Description: "A Bash script for reverse shell generator. Built for security research and automation."
Keywords: "python, powershell, go, fuzzer, bash"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-293.html"
URL_IMAGES: ""
Date: "2026-03-02"
Tags: "Python, PowerShell, Go, Fuzzer, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-293"
Permalink: "/scripting/script-reverse-shell-generator-293.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `chisel`
- `pwncat`
- `metasploit`

## Implementation

### Core Logic

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p22,3268,8080 10.20.251.81 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Helper Functions

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.107.108.207 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.53.161.173 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.41.59.101/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.123.214.149
```

### Advanced Options

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.156.223/FUZZ
```

## Output

### Example Output

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 17.06s
```
