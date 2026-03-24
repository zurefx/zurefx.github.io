---
TitleSEO: "Active Directory Attack Paths | ZureFX"
TitlePost: "Active Directory Attack Paths"
Author: "ZureFX"
Description: "Personal notes on Active Directory Attack Paths. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, dfir, cheatsheet, persistence"
URL: "https://zurefx.github.io/notes/note-active-directory-attack-paths-469.html"
URL_IMAGES: ""
Date: "2024-06-24"
Tags: "Blue Team, DFIR, Cheatsheet, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-active-directory-attack-paths-469"
Permalink: "/notes/note-active-directory-attack-paths-469.html"
BtnLabel: "Read Notes"
Pick: 0
---
## NTLM Relay

### CentOS

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Nginx

### Path Traversal

- `SUID Binary`
- `bloodhound`
- `Path Traversal`
- `mimikatz`
- `IDOR`
- `SeDebugPrivilege`

- `SeImpersonatePrivilege`
- `Kerberoasting`
- `bloodhound`

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.97.15
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.155.221
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.227.252/FUZZ
```

## SSTI

### SeDebugPrivilege

- `feroxbuster`
- `Pass the Ticket`
- `msfvenom`
- `secretsdump`

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```python
gobuster dir -u http://10.93.45.169/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```
