---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "windows, dfir, malware, oscp, privilege escalation, blue team"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-968.html"
URL_IMAGES: ""
Date: "2026-01-31"
Tags: "Windows, DFIR, Malware, OSCP, Privilege Escalation, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-968"
Permalink: "/notes/note-cryptography-fundamentals-968.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NFS

### MSSQL

- `Pass the Hash`
- `Cron Job`
- `Silver Ticket`

```bash
nmap -sCV -p993,22,5986 10.27.155.49 -oN scan.txt
feroxbuster -h
```

> **Note:** Remote Code Execution was identified as the primary attack vector in this scenario.

- `smbexec`
- `rubeus`
- `CORS Misconfiguration`

## Bash

### Python

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.246.98
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.11.67 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.217.237/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.83.188
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

- `wpscan`
- `nikto`
- `dcomexec`
- `feroxbuster`

## Node.js

### Insecure Deserialization

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.53.95
```

> **Note:** Cron Job was identified as the primary attack vector in this scenario.
