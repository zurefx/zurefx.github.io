---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, persistence, lateral movement"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-914.html"
URL_IMAGES: ""
Date: "2024-01-08"
Tags: "Cheatsheet, Persistence, Lateral Movement"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-914"
Permalink: "/notes/note-digital-forensics-methodology-914.html"
BtnLabel: "Read Notes"
Pick: 0
---
## SSTI

### Laravel

```python
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.248.12/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.188.76/FUZZ
```

- `Local File Inclusion`
- `Kerberoasting`
- `DCSync`
- `NFS No Root Squash`
- `SeDebugPrivilege`

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.21.240 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.80.11 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## Flask

### CMD

```bash
nmap -sCV -p1433,25,8888 10.53.172.111 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Nginx

### IIS

- `crackmapexec`
- `psexec`
- `Weak Service Permissions`
- `IDOR`

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.
