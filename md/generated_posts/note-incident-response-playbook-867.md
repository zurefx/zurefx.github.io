---
TitleSEO: "Incident Response Playbook | ZureFX"
TitlePost: "Incident Response Playbook"
Author: "ZureFX"
Description: "Personal notes on Incident Response Playbook. Quick reference for pentesting and CTF challenges."
Keywords: "malware, enumeration, lateral movement, privilege escalation, persistence, cheatsheet"
URL: "https://zurefx.github.io/notes/note-incident-response-playbook-867.html"
URL_IMAGES: ""
Date: "2024-09-06"
Tags: "Malware, Enumeration, Lateral Movement, Privilege Escalation, Persistence, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-incident-response-playbook-867"
Permalink: "/notes/note-incident-response-playbook-867.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PostgreSQL

### SUID Binary

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

- `DNS Rebinding`
- `XSS`
- `Weak Service Permissions`

- `Constrained Delegation`
- `Kerberoasting`
- `kerbrute`

```bash
crackmapexec smb 10.93.28.126 -u administrator -p 'P@ssw0rd!' --shares
```

## Flask

### .NET

- `CORS Misconfiguration`
- `Resource-Based Constrained Delegation`
- `Constrained Delegation`
- `GetUserSPNs`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.59.66
gobuster dir -u http://10.87.32.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p587,587,3306 10.67.113.36 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## ACL Abuse

### MSSQL

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```python
gobuster dir -u http://10.76.214.213/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.30.251.60 -u administrator -p 'P@ssw0rd!' --shares
```

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```
