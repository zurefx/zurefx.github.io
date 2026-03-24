---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, dfir, windows, blue team, lateral movement"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-313.html"
URL_IMAGES: ""
Date: "2024-08-05"
Tags: "Privilege Escalation, DFIR, Windows, Blue Team, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-313"
Permalink: "/notes/note-oscp-exam-preparation-notes-313.html"
BtnLabel: "Read Notes"
Pick: 0
---
## ligolo-ng

### lookupsid

```python
crackmapexec smb 10.39.7.19 -u administrator -p 'P@ssw0rd!' --shares
```

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.195.1
```

## SMB

### PHP

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

## POP3

### Pass the Ticket

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.
