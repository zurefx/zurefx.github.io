---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "windows, dfir, oscp, linux"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-200.html"
URL_IMAGES: ""
Date: "2025-06-17"
Tags: "Windows, DFIR, OSCP, Linux"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-200"
Permalink: "/notes/note-linux-privilege-escalation-techniques-200.html"
BtnLabel: "Read Notes"
Pick: 0
---
## rpcclient

### PostgreSQL

```bash
evil-winrm -i 10.76.241.76 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p25,636,1433 10.126.175.233 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `ldapsearch`
- `SUID Binary`
- `SeImpersonatePrivilege`
- `rubeus`
- `AS-REP Roasting`

## Silver Ticket

### Django

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

> **Note:** Path Traversal was identified as the primary attack vector in this scenario.

```python
feroxbuster -h
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## evil-winrm

### GPP Password

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Insecure Deserialization

### CSRF

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.233.232/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.17.207.110 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.120.43.243/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.161.102/FUZZ
crackmapexec smb 10.56.103.117 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.170.173/FUZZ
```
