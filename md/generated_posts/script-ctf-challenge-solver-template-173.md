---
TitleSEO: "CTF Challenge Solver Template in Bash | ZureFX"
TitlePost: "CTF Challenge Solver Template — Bash"
Author: "ZureFX"
Description: "A Bash script for ctf challenge solver template. Built for security research and automation."
Keywords: "c, fuzzer, bash, automation"
URL: "https://zurefx.github.io/scripting/script-ctf-challenge-solver-template-173.html"
URL_IMAGES: ""
Date: "2024-04-01"
Tags: "C, Fuzzer, Bash, Automation"
Section: "scripting"
Lang: "en"
main_img: "script-ctf-challenge-solver-template-173"
Permalink: "/scripting/script-ctf-challenge-solver-template-173.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

Built with **Bash** for offensive security automation.

### Requirements

- Bash
- `metasploit`
- `ldapsearch`
- `sharphound`

## Implementation

### Core Logic

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p3389,464,27017 10.95.141.26 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Helper Functions

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.10.93/FUZZ
```

## Usage

### Basic Usage

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.11.220.23 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Advanced Options

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p135,22,22 10.108.66.194 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

## Output

### Example Output

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```
[+] Scanning target...
[+] Found 19 results
[+] Done in 22.55s
```
