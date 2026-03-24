---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "dfir, oscp, blue team, privilege escalation, malware"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-642.html"
URL_IMAGES: ""
Date: "2026-02-12"
Tags: "DFIR, OSCP, Blue Team, Privilege Escalation, Malware"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-642"
Permalink: "/notes/note-reverse-engineering-basics-642.html"
BtnLabel: "Read Notes"
Pick: 0
---
## rubeus

### SeDebugPrivilege

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

## CentOS

### burpsuite

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

- `Insecure Deserialization`
- `msfvenom`
- `Command Injection`
- `Resource-Based Constrained Delegation`
- `SSRF`
- `NFS No Root Squash`

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.19.48
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.151.214 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.68.37.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

## ldapsearch

### Elasticsearch

```bash
evil-winrm -i 10.89.215.154 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.115.182.23 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.76.233.42 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.29.11.174/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.35.196.76 -u administrator -p 'P@ssw0rd!'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## CSRF

### GetNPUsers

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

- `dcomexec`
- `Insecure Deserialization`
- `atexec`
- `XSS`
- `gobuster`

```powershell
evil-winrm -i 10.88.250.5 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.100.108.88 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.82.6/FUZZ
```

## POP3

### MongoDB

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.
