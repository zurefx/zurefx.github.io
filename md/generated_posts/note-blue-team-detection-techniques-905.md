---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, dfir, networking, enumeration, malware"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-905.html"
URL_IMAGES: ""
Date: "2024-11-05"
Tags: "Persistence, DFIR, Networking, Enumeration, Malware"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-905"
Permalink: "/notes/note-blue-team-detection-techniques-905.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Command Injection

### Writable PATH

- `LXD Privilege Escalation`
- `Open Redirect`
- `SSRF`

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.117.17.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.43.240.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p993,53,995 10.61.211.27 -oN scan.txt
```

- `Unconstrained Delegation`
- `SUID Binary`
- `Constrained Delegation`

## mimikatz

### WinRM

> **Note:** ACL Abuse was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Golden Ticket

### Unquoted Service Path

- `Pass the Hash`
- `lookupsid`
- `SQL Injection`
- `evil-winrm`

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.173.253
gobuster dir -u http://10.54.99.88/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```
