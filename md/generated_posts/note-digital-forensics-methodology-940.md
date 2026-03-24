---
TitleSEO: "Digital Forensics Methodology | ZureFX"
TitlePost: "Digital Forensics Methodology"
Author: "ZureFX"
Description: "Personal notes on Digital Forensics Methodology. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, networking, oscp, lateral movement, cheatsheet"
URL: "https://zurefx.github.io/notes/note-digital-forensics-methodology-940.html"
URL_IMAGES: ""
Date: "2025-04-13"
Tags: "Privilege Escalation, Networking, OSCP, Lateral Movement, Cheatsheet"
Section: "notes"
Lang: "en"
main_img: "note-digital-forensics-methodology-940"
Permalink: "/notes/note-digital-forensics-methodology-940.html"
BtnLabel: "Read Notes"
Pick: 0
---
## LXD Privilege Escalation

### Weak Service Permissions

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## wmiexec

### Writable PATH

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.178.210/FUZZ
gobuster dir -u http://10.90.147.224/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```python
feroxbuster -h
crackmapexec smb 10.51.121.157 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.24.20/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.63.11
gobuster dir -u http://10.58.32.18/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## CSRF

### Telnet

```powershell
evil-winrm -i 10.98.243.237 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Pass the Ticket

### Broken Access Control

> **Note:** Subdomain Takeover was identified as the primary attack vector in this scenario.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.70.160 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## ACL Abuse

### FTP

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

- `socat`
- `Remote Code Execution`
- `evil-winrm`
- `Kerberoasting`
- `AlwaysInstallElevated`

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## GetNPUsers

### Subdomain Takeover

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.9.188
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.116.51 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
