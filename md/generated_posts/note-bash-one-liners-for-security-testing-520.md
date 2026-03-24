---
TitleSEO: "Bash One-Liners for Security Testing | ZureFX"
TitlePost: "Bash One-Liners for Security Testing"
Author: "ZureFX"
Description: "Personal notes on Bash One-Liners for Security Testing. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, networking, privilege escalation"
URL: "https://zurefx.github.io/notes/note-bash-one-liners-for-security-testing-520.html"
URL_IMAGES: ""
Date: "2024-08-10"
Tags: "Blue Team, Networking, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-bash-one-liners-for-security-testing-520"
Permalink: "/notes/note-bash-one-liners-for-security-testing-520.html"
BtnLabel: "Read Notes"
Pick: 0
---
## AS-REP Roasting

### Windows Server 2019

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

## CMD

### Subdomain Takeover

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

> **Note:** Cron Job was identified as the primary attack vector in this scenario.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

- `Silver Ticket`
- `Pass the Ticket`
- `XSS`
- `chisel`
- `Sudo Misconfiguration`

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.214.71
```

## RPC

### XXE

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

- `XXE`
- `rpcclient`
- `GetNPUsers`
- `XSS`
- `ACL Abuse`
- `chisel`

```python
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5432,8888,27017 10.92.225.150 -oN scan.txt
feroxbuster -h
```

## crackmapexec

### Insecure Deserialization

```powershell
crackmapexec smb 10.81.163.180 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

```bash
nmap -sCV -p445,110,636 10.48.103.160 -oN scan.txt
nmap -sCV -p22,9200,389 10.119.33.36 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

## Silver Ticket

### CORS Misconfiguration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.
