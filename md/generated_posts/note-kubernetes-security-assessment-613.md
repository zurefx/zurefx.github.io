---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, lateral movement, privilege escalation"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-613.html"
URL_IMAGES: ""
Date: "2025-08-01"
Tags: "Enumeration, Lateral Movement, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-613"
Permalink: "/notes/note-kubernetes-security-assessment-613.html"
BtnLabel: "Read Notes"
Pick: 0
---
## C#

### MySQL

- `Remote File Inclusion`
- `SSRF`
- `netcat`
- `socat`

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.79.9 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.170.46/FUZZ
gobuster dir -u http://10.56.25.103/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

- `GPP Password`
- `ligolo-ng`
- `Remote Code Execution`

## evil-winrm

### RDP

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

- `GetNPUsers`
- `enum4linux`
- `CSRF`
- `feroxbuster`

> **Note:** XSS was identified as the primary attack vector in this scenario.

## burpsuite

### MongoDB

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

- `netcat`
- `bloodhound`
- `hashcat`
- `pwncat`

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## LXD Privilege Escalation

### Broken Access Control

- `gobuster`
- `AlwaysInstallElevated`
- `mimikatz`
- `Sudo Misconfiguration`
- `rubeus`

```bash
nmap -sCV -p143,53,27017 10.69.197.112 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.122.96.70 -u administrator -p 'P@ssw0rd!' --shares
```
