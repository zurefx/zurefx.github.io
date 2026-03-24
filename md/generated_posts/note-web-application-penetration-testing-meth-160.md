---
TitleSEO: "Web Application Penetration Testing Methodology | ZureFX"
TitlePost: "Web Application Penetration Testing Methodology"
Author: "ZureFX"
Description: "Personal notes on Web Application Penetration Testing Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "malware, privilege escalation, persistence, networking, dfir"
URL: "https://zurefx.github.io/notes/note-web-application-penetration-testing-meth-160.html"
URL_IMAGES: ""
Date: "2025-03-06"
Tags: "Malware, Privilege Escalation, Persistence, Networking, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-web-application-penetration-testing-meth-160"
Permalink: "/notes/note-web-application-penetration-testing-meth-160.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Unconstrained Delegation

### Python

> **Note:** LAPS Abuse was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## feroxbuster

### CMD

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```python
nmap -sCV -p443,445,8888 10.119.108.62 -oN scan.txt
crackmapexec smb 10.51.41.70 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## MySQL

### sqlmap

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** Golden Ticket was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.121.15 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.21.108/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## IMAP

### Golden Ticket

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.37.28
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.
