---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, persistence, oscp, cheatsheet, enumeration, windows"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-974.html"
URL_IMAGES: ""
Date: "2024-09-04"
Tags: "DFIR, Persistence, OSCP, Cheatsheet, Enumeration, Windows"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-974"
Permalink: "/notes/note-oscp-exam-preparation-notes-974.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Golden Ticket

### crackmapexec

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

- `SeImpersonatePrivilege`
- `Silver Ticket`
- `DLL Hijacking`

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## hydra

### psexec

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8443,8080,1433 10.90.134.212 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.189.251/FUZZ
gobuster dir -u http://10.70.132.197/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.223.103 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1433,8888,8443 10.29.140.241 -oN scan.txt
```

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.65.217 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

## RPC

### feroxbuster

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## Apache

### POP3

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

## .NET

### Redis

```bash
gobuster dir -u http://10.67.65.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.10.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

- `ldapsearch`
- `Path Traversal`
- `Insecure Deserialization`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.214.83
crackmapexec smb 10.129.125.145 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.129.33.48 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

## SSRF

### MySQL

- `Unconstrained Delegation`
- `Golden Ticket`
- `sqlmap`
- `lookupsid`

```bash
gobuster dir -u http://10.12.159.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.91.77.236 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p25,993,3389 10.106.73.238 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

> **Note:** Pass the Hash was identified as the primary attack vector in this scenario.

```bash
evil-winrm -i 10.125.149.248 -u administrator -p 'P@ssw0rd!'
```
