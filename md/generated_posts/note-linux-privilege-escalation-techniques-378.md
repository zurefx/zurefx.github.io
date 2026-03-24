---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, dfir, oscp, persistence"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-378.html"
URL_IMAGES: ""
Date: "2025-10-13"
Tags: "Privilege Escalation, DFIR, OSCP, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-378"
Permalink: "/notes/note-linux-privilege-escalation-techniques-378.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Silver Ticket

### Writable PATH

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
nmap -sCV -p22,53,389 10.72.136.148 -oN scan.txt
nmap -sCV -p27017,3389,21 10.51.150.192 -oN scan.txt
evil-winrm -i 10.115.93.45 -u administrator -p 'P@ssw0rd!'
```

## DNS

### HTTP

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.187.202/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.54.123 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.153.75 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## sharphound

### kerbrute

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```powershell
crackmapexec smb 10.39.188.38 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.
