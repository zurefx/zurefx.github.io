---
TitleSEO: "Kubernetes Security Assessment | ZureFX"
TitlePost: "Kubernetes Security Assessment"
Author: "ZureFX"
Description: "Personal notes on Kubernetes Security Assessment. Quick reference for pentesting and CTF challenges."
Keywords: "enumeration, linux, persistence"
URL: "https://zurefx.github.io/notes/note-kubernetes-security-assessment-482.html"
URL_IMAGES: ""
Date: "2024-02-21"
Tags: "Enumeration, Linux, Persistence"
Section: "notes"
Lang: "en"
main_img: "note-kubernetes-security-assessment-482"
Permalink: "/notes/note-kubernetes-security-assessment-482.html"
BtnLabel: "Read Notes"
Pick: 0
---
## bloodhound

### MySQL

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

- `chisel`
- `SSTI`
- `GetUserSPNs`
- `SeImpersonatePrivilege`
- `pwncat`
- `Path Traversal`

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.208.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

- `pwncat`
- `Kerberoasting`
- `Open Redirect`
- `Local File Inclusion`

## MSSQL

### Pass the Ticket

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

- `DNS Rebinding`
- `chisel`
- `burpsuite`
- `Resource-Based Constrained Delegation`

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.242.187/FUZZ
gobuster dir -u http://10.125.116.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.120.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

## kerbrute

### Weak Service Permissions

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```python
nmap -sCV -p80,110,135 10.25.238.55 -oN scan.txt
nmap -sCV -p587,3306,1521 10.55.9.55 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.86.135/FUZZ
```

## RPC

### Broken Access Control

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

- `evil-winrm`
- `XSS`
- `SeImpersonatePrivilege`
- `msfvenom`

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.
