---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, persistence, cheatsheet, dfir"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-574.html"
URL_IMAGES: ""
Date: "2025-01-11"
Tags: "Enumeration, Persistence, Cheatsheet, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-574"
Permalink: "/notes/note-oscp-exam-preparation-notes-574.html"
BtnLabel: "Read Notes"
Pick: 0
---
## rubeus

### sqlmap

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
nmap -sCV -p464,995,995 10.81.157.2 -oN scan.txt
```

- `LAPS Abuse`
- `ldapsearch`
- `sqlmap`
- `Pass the Ticket`
- `crackmapexec`

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
gobuster dir -u http://10.74.26.114/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.148.124
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## CMD

### Kerberos

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```bash
gobuster dir -u http://10.20.137.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.122.155.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Pass the Hash

### Unconstrained Delegation

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.92.134 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.39.23.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

> **Note:** Golden Ticket was identified as the primary attack vector in this scenario.

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## ldapsearch

### john

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Spring

### Drupal

- `LAPS Abuse`
- `feroxbuster`
- `crackmapexec`
- `DNS Rebinding`
- `CSRF`
- `SQL Injection`

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.
