---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "windows, oscp, privilege escalation, blue team"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-578.html"
URL_IMAGES: ""
Date: "2024-01-13"
Tags: "Windows, OSCP, Privilege Escalation, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-578"
Permalink: "/notes/note-oscp-exam-preparation-notes-578.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Insecure Deserialization

### pwncat

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

## XXE

### Drupal

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.65.148
```

- `Open Redirect`
- `hashcat`
- `john`

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.238.194 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## Ubuntu 20.04

### Pass the Ticket

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.83.226.222/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.10.193
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.130.170
gobuster dir -u http://10.72.184.145/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

## SSTI

### Writable PATH

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `GPP Password`
- `rubeus`
- `SQL Injection`

## MySQL

### MSSQL

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.
