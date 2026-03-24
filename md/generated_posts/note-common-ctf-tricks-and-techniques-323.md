---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "malware, cheatsheet, windows"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-323.html"
URL_IMAGES: ""
Date: "2025-09-04"
Tags: "Malware, Cheatsheet, Windows"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-323"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-323.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSRF

### enum4linux

```python
evil-winrm -i 10.13.231.136 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p110,443,5985 10.46.67.119 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.37.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.40.250.176/FUZZ
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

## Bash

### chisel

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `CSRF`
- `rubeus`
- `mimikatz`

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Golden Ticket

### Subdomain Takeover

```bash
gobuster dir -u http://10.111.84.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.53.207.111 -u administrator -p 'P@ssw0rd!'
```

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.67.73.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.88.129.173
```

- `GPP Password`
- `Unquoted Service Path`
- `sqlmap`
- `enum4linux`
