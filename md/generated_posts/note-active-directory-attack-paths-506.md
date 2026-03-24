---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, enumeration, persistence, dfir, linux"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-506.html"
URL_IMAGES: ""
Date: "2024-10-16"
Tags: "Cheatsheet, Enumeration, Persistence, DFIR, Linux"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-506"
Permalink: "/notes/note-active-directory-attack-paths-506.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Ubuntu 20.04

### DCSync

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.50.92.200
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Pass the Ticket

### AlwaysInstallElevated

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.197.216/FUZZ
nmap -sCV -p8443,443,995 10.37.16.81 -oN scan.txt
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```python
nmap -sCV -p445,5432,9200 10.61.132.34 -oN scan.txt
feroxbuster -h
feroxbuster -h
```

```bash
gobuster dir -u http://10.42.157.231/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p135,587,110 10.23.216.149 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.217.146
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.49.90/FUZZ
```

- `ldapsearch`
- `smbexec`
- `LXD Privilege Escalation`
- `mimikatz`

## smbexec

### Active Directory

- `nikto`
- `secretsdump`
- `gobuster`

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## hashcat

### Local File Inclusion

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Constrained Delegation

### SMTP

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
evil-winrm -i 10.77.39.100 -u administrator -p 'P@ssw0rd!'
```

> **Note:** SSRF was identified as the primary attack vector in this scenario.
