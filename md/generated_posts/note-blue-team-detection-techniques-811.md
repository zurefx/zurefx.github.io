---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, enumeration, privilege escalation, cheatsheet"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-811.html"
URL_IMAGES: ""
Date: "2025-11-19"
Tags: "Blue Team, Enumeration, Privilege Escalation, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-811"
Permalink: "/notes/note-blue-team-detection-techniques-811.html"
BtnLabel: "Read Notes"
Pick: 0
---
## socat

### kerbrute

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

- `Weak Service Permissions`
- `psexec`
- `sharphound`
- `SUID Binary`
- `socat`

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

- `NFS No Root Squash`
- `DNS Rebinding`
- `Command Injection`
- `burpsuite`
- `gobuster`
- `nmap`

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

## Elasticsearch

### chisel

- `nmap`
- `pwncat`
- `CSRF`

```bash
feroxbuster -h
evil-winrm -i 10.111.33.201 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.35.115.243 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p9200,8080,993 10.92.151.188 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## MongoDB

### ACL Abuse

- `Cron Job`
- `NFS No Root Squash`
- `DCSync`

```bash
nmap -sCV -p5985,5986,993 10.70.253.137 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.233.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.44.246.122 -u administrator -p 'P@ssw0rd!'
```

## Weak Service Permissions

### WinRM

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

- `SSTI`
- `DCSync`
- `enum4linux`
- `socat`

## msfvenom

### POP3

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

- `crackmapexec`
- `smbclient`
- `feroxbuster`
- `Path Traversal`

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.
