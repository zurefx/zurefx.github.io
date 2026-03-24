---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "privilege escalation, oscp, dfir, lateral movement, linux, malware"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-387.html"
URL_IMAGES: ""
Date: "2026-02-23"
Tags: "Privilege Escalation, OSCP, DFIR, Lateral Movement, Linux, Malware"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-387"
Permalink: "/notes/note-docker-security-hardening-387.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Telnet

### nikto

- `rpcclient`
- `Sudo Misconfiguration`
- `hydra`
- `Golden Ticket`

> **Note:** Sudo Misconfiguration was identified as the primary attack vector in this scenario.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Kerberoasting

### DNS

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.128.237.239 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.54.118
gobuster dir -u http://10.55.188.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.153.6
```

```python
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.163.163/FUZZ
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

## evil-winrm

### hashcat

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

> **Note:** Local File Inclusion was identified as the primary attack vector in this scenario.

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Subdomain Takeover

### Remote Code Execution

```python
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.39.174
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

- `rubeus`
- `AlwaysInstallElevated`
- `secretsdump`
- `SeImpersonatePrivilege`
- `XXE`

## IDOR

### Local File Inclusion

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Ubuntu 20.04

### Broken Access Control

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

> **Note:** DLL Hijacking was identified as the primary attack vector in this scenario.
