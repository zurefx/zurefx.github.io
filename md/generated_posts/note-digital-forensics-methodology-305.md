---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, linux, dfir, blue team, persistence"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-305.html"
URL_IMAGES: ""
Date: "2026-01-21"
Tags: "Lateral Movement, Linux, DFIR, Blue Team, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-305"
Permalink: "/notes/note-digital-forensics-methodology-305.html"
BtnLabel: "Read Notes"
Pick: 0
---
## PowerShell

### enum4linux

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.72.166.5 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.65.109 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

- `mimikatz`
- `crackmapexec`
- `metasploit`
- `XXE`

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## bloodhound

### Cron Job

- `Cron Job`
- `Writable PATH`
- `enum4linux`
- `AlwaysInstallElevated`

- `smbclient`
- `john`
- `Broken Access Control`
- `wpscan`
- `AS-REP Roasting`

- `Remote File Inclusion`
- `Resource-Based Constrained Delegation`
- `Open Redirect`

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Kerberos

### ldapsearch

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

## mimikatz

### CMD

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.
