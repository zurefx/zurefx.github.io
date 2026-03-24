---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "malware, oscp, persistence, cheatsheet"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-716.html"
URL_IMAGES: ""
Date: "2025-05-09"
Tags: "Malware, OSCP, Persistence, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-716"
Permalink: "/notes/note-reverse-engineering-basics-716.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SQL Injection

### Golden Ticket

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.127.77
gobuster dir -u http://10.40.227.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.46.165.43 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Java

### rpcclient

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

- `crackmapexec`
- `msfvenom`
- `impacket`

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.73.213/FUZZ
```

## IIS

### GetNPUsers

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p8888,110,464 10.88.34.247 -oN scan.txt
```

- `ffuf`
- `DLL Hijacking`
- `GetUserSPNs`
- `rpcclient`
- `hashcat`
- `AlwaysInstallElevated`

## ligolo-ng

### Cron Job

- `sharphound`
- `ldapsearch`
- `Open Redirect`
- `hydra`

- `pwncat`
- `hydra`
- `IDOR`

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## secretsdump

### Telnet

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## evil-winrm

### burpsuite

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```python
nmap -sCV -p110,23,22 10.17.89.212 -oN scan.txt
evil-winrm -i 10.44.120.22 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```python
feroxbuster -h
crackmapexec smb 10.17.37.94 -u administrator -p 'P@ssw0rd!' --shares
```
