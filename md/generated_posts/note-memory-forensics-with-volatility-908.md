---
TitleSEO: "Memory Forensics with Volatility | ZureFX"
TitlePost: "Memory Forensics with Volatility"
Author: "ZureFX"
Description: "Personal notes on Memory Forensics with Volatility. Quick reference for pentesting and CTF challenges."
Keywords: "windows, oscp, networking, persistence"
URL: "https://zurefx.github.io/notes/note-memory-forensics-with-volatility-908.html"
URL_IMAGES: ""
Date: "2024-11-21"
Tags: "Windows, OSCP, Networking, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-memory-forensics-with-volatility-908"
Permalink: "/notes/note-memory-forensics-with-volatility-908.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PowerShell

### Golden Ticket

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.181.191
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

## POP3

### SMB

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.119.124.135
gobuster dir -u http://10.128.5.38/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** Docker Escape was identified as the primary attack vector in this scenario.

## CMD

### C#

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.89.206.218/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,3389,27017 10.114.84.233 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.
