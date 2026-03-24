---
TitleSEO: "Reverse Engineering Basics | ZureFX"
TitlePost: "Reverse Engineering Basics"
Author: "ZureFX"
Description: "Personal notes on Reverse Engineering Basics. Quick reference for pentesting and CTF challenges."
Keywords: "persistence, privilege escalation, networking, blue team, enumeration"
URL: "https://zurefx.github.io/notes/note-reverse-engineering-basics-139.html"
URL_IMAGES: ""
Date: "2024-07-01"
Tags: "Persistence, Privilege Escalation, Networking, Blue Team, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-reverse-engineering-basics-139"
Permalink: "/notes/note-reverse-engineering-basics-139.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Elasticsearch

### GetNPUsers

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.1.75 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## ldapsearch

### john

- `metasploit`
- `Remote Code Execution`
- `AlwaysInstallElevated`
- `Weak Service Permissions`
- `Insecure Deserialization`
- `smbclient`

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

## nmap

### ACL Abuse

- `chisel`
- `ldapsearch`
- `kerbrute`
- `lookupsid`
- `Pass the Ticket`
- `dcomexec`

```bash
crackmapexec smb 10.87.207.130 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
crackmapexec smb 10.43.59.77 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.
