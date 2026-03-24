---
TitleSEO: "OSCP Exam Preparation Notes | ZureFX"
TitlePost: "OSCP Exam Preparation Notes"
Author: "ZureFX"
Description: "Personal notes on OSCP Exam Preparation Notes. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, lateral movement, dfir, oscp, networking, cheatsheet"
URL: "https://zurefx.github.io/notes/note-oscp-exam-preparation-notes-959.html"
URL_IMAGES: ""
Date: "2024-09-23"
Tags: "Persistence, Lateral Movement, DFIR, OSCP, Networking, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-oscp-exam-preparation-notes-959"
Permalink: "/notes/note-oscp-exam-preparation-notes-959.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SMTP

### socat

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Constrained Delegation

### netcat

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

- `crackmapexec`
- `atexec`
- `Insecure Deserialization`
- `Golden Ticket`

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## POP3

### Sudo Misconfiguration

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.83.75.136 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p22,8888,3268 10.115.242.132 -oN scan.txt
```

```bash
evil-winrm -i 10.34.249.178 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8888,3268,8080 10.51.110.253 -oN scan.txt
```

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.54.47.15
```
