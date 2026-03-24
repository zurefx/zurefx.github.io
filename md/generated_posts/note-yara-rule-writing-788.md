---
TitleSEO: "YARA Rule Writing | ZureFX"
TitlePost: "YARA Rule Writing"
Author: "ZureFX"
Description: "Personal notes on YARA Rule Writing. Quick reference for pentesting and CTF challenges."
Keywords: "windows, linux, persistence, dfir, malware"
URL: "https://zurefx.github.io/notes/note-yara-rule-writing-788.html"
URL_IMAGES: ""
Date: "2024-09-29"
Tags: "Windows, Linux, Persistence, DFIR, Malware"
Section: "notes"
Lang: "en"
main_img: "note-yara-rule-writing-788"
Permalink: "/notes/note-yara-rule-writing-788.html"
BtnLabel: "Read Notes"
Pick: 0
---
## atexec

### mimikatz

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## RPC

### CMD

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.171.243
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

> **Note:** Pass the Hash was identified as the primary attack vector in this scenario.

## Open Redirect

### Java

> **Note:** IDOR was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.169.239/FUZZ
evil-winrm -i 10.87.176.94 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3306,389,1433 10.55.17.92 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## NFS No Root Squash

### chisel

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.12.216/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
