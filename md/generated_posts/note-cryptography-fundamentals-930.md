---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "networking, malware, oscp"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-930.html"
URL_IMAGES: ""
Date: "2024-06-22"
Tags: "Networking, Malware, OSCP"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-930"
Permalink: "/notes/note-cryptography-fundamentals-930.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IDOR

### Telnet

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.104.21
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.119.3.117/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5432,3306,139 10.121.214.238 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.136.131
```

> **Note:** XXE was identified as the primary attack vector in this scenario.

## Local File Inclusion

### LAPS Abuse

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

- `GetNPUsers`
- `ACL Abuse`
- `Sudo Misconfiguration`
- `smbexec`
- `smbclient`
- `feroxbuster`

- `wpscan`
- `DCSync`
- `Sudo Misconfiguration`

```python
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## ligolo-ng

### PostgreSQL

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## NFS

### psexec

- `Cron Job`
- `CORS Misconfiguration`
- `netcat`
- `nmap`
- `smbexec`

```python
nmap -sCV -p5432,110,110 10.113.187.21 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## nikto

### rpcclient

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

> **Note:** SSTI was identified as the primary attack vector in this scenario.

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```python
evil-winrm -i 10.97.166.84 -u administrator -p 'P@ssw0rd!'
```

## C#

### HTTPS

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.
