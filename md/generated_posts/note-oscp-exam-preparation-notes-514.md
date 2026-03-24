---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, lateral movement, enumeration, windows"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-514.html"
URL_IMAGES: ""
Date: "2024-11-07"
Tags: "DFIR, Lateral Movement, Enumeration, Windows"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-514"
Permalink: "/notes/note-oscp-exam-preparation-notes-514.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Telnet

### sqlmap

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p389,3389,3389 10.124.2.196 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

- `DNS Rebinding`
- `gobuster`
- `NFS No Root Squash`
- `feroxbuster`
- `Resource-Based Constrained Delegation`
- `SeDebugPrivilege`

## FTP

### Golden Ticket

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.162.25 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p587,5986,636 10.34.93.59 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.85.10.211 -u administrator -p 'P@ssw0rd!' --shares
```

## evil-winrm

### Redis

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.32.63/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.
