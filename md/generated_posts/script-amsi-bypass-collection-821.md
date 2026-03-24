---
TitleSEO: "AMSI Bypass Collection in Bash | ZureFX"
TitlePost: "AMSI Bypass Collection — Bash"
Author: "ZureFX"
Description: "A Bash script for amsi bypass collection. Built for security research and automation."
Keywords: "script, bash, fuzzer, c, python"
URL: "https://zurefx.github.io/scripting/script-amsi-bypass-collection-821.html"
URL_IMAGES: ""
Date: "2025-08-30"
Tags: "Script, Bash, Fuzzer, C, Python"
Section: "scripting"
Lang: "en"
main_img: "script-amsi-bypass-collection-821"
Permalink: "/scripting/script-amsi-bypass-collection-821.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `smbexec`
- `GetNPUsers`
- `rubeus`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.51.142.51 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.97.165.149 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.240.178/FUZZ
gobuster dir -u http://10.59.176.17/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.60.166.36 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.88.169.112 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.52.235.60 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.27.125.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 7 results
[+] Done in 13.58s
```
