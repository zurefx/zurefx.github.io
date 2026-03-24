---
TitleSEO: "API Security Testing Framework in PowerShell | ZureFX"
TitlePost: "API Security Testing Framework — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for api security testing framework. Built for security research and automation."
Keywords: "fuzzer, tool, automation, powershell"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-138.html"
URL_IMAGES: ""
Date: "2025-10-06"
Tags: "Fuzzer, Tool, Automation, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-138"
Permalink: "/scripting/script-api-security-testing-framework-138.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `smbclient`
- `wpscan`
- `secretsdump`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p22,995,80 10.61.141.78 -oN scan.txt
gobuster dir -u http://10.77.197.38/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.214.25/FUZZ
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.84.213/FUZZ
gobuster dir -u http://10.112.56.201/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p25,8080,135 10.25.66.152 -oN scan.txt
gobuster dir -u http://10.80.86.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.49.182.128/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Output

### Example Output

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 28.09s
```
