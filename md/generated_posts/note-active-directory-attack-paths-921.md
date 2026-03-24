---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, privilege escalation, blue team, windows"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-921.html"
URL_IMAGES: ""
Date: "2025-05-21"
Tags: "OSCP, Privilege Escalation, Blue Team, Windows"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-921"
Permalink: "/notes/note-active-directory-attack-paths-921.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SQL Injection

### secretsdump

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

- `DLL Hijacking`
- `GetUserSPNs`
- `atexec`
- `DNS Rebinding`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.89.97.67 -u administrator -p 'P@ssw0rd!' --shares
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.103.185.11/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## burpsuite

### SSH

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
evil-winrm -i 10.83.96.229 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.81.250.85
evil-winrm -i 10.121.17.206 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

## metasploit

### DNS Rebinding

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

## Golden Ticket

### gobuster

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.87.207.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## SNMP

### smbexec

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

- `secretsdump`
- `psexec`
- `SQL Injection`
- `netcat`
- `ACL Abuse`
- `IDOR`

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Laravel

### dcomexec

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

> **Note:** SUID Binary was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.
