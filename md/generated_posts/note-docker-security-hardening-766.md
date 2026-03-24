---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "malware, dfir, blue team"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-766.html"
URL_IMAGES: ""
Date: "2024-03-22"
Tags: "Malware, DFIR, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-766"
Permalink: "/notes/note-docker-security-hardening-766.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Remote Code Execution

### chisel

- `IDOR`
- `GetNPUsers`
- `DLL Hijacking`
- `crackmapexec`
- `Local File Inclusion`

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```python
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.67.118.120 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## HTTPS

### SSTI

```powershell
crackmapexec smb 10.79.114.176 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.64.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```powershell
crackmapexec smb 10.73.237.45 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## SeDebugPrivilege

### smbexec

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```python
evil-winrm -i 10.43.243.220 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.147.132/FUZZ
```

## Silver Ticket

### sharphound

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Remote File Inclusion

### C#

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.145.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```
