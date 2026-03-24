---
TitleSEO: "EDR Evasion Techniques in Python | ZureFX"
TitlePost: "EDR Evasion Techniques — Python"
Author: "ZureFX"
Description: "A Python script for edr evasion techniques. Built for security research and automation."
Keywords: "tool, rust, bash, python"
URL: "https://zurefx.github.io/scripting/script-edr-evasion-techniques-918.html"
URL_IMAGES: ""
Date: "2025-10-25"
Tags: "Tool, Rust, Bash, Python"
Section: "scripting"
Lang: "en"
main_img: "script-edr-evasion-techniques-918"
Permalink: "/scripting/script-edr-evasion-techniques-918.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `feroxbuster`
- `nikto`
- `netcat`

## Implementation

### Core Logic

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

```python
nmap -sCV -p5985,1521,23 10.70.24.8 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Helper Functions

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.253.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.91.101.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```
[+] Scanning target...
[+] Found 15 results
[+] Done in 3.10s
```
