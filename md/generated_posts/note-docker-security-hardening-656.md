---
TitleSEO: "Docker Security Hardening | ZureFX"
TitlePost: "Docker Security Hardening"
Author: "ZureFX"
Description: "Personal notes on Docker Security Hardening. Quick reference for pentesting and CTF challenges."
Keywords: "blue team, enumeration, malware"
URL: "https://zurefx.github.io/notes/note-docker-security-hardening-656.html"
URL_IMAGES: ""
Date: "2025-05-27"
Tags: "Blue Team, Enumeration, Malware"
Section: "notes"
Lang: "en"
main_img: "note-docker-security-hardening-656"
Permalink: "/notes/note-docker-security-hardening-656.html"
BtnLabel: "Read Notes"
Pick: 0
---
## GPP Password

### dcomexec

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
gobuster dir -u http://10.46.27.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.120.90/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.165.45/FUZZ
```

## MySQL

### Laravel

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## smbclient

### Remote File Inclusion

```bash
gobuster dir -u http://10.105.200.83/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.101.51.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.64.23.175 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Kerberos

### Open Redirect

- `Unconstrained Delegation`
- `SQL Injection`
- `NFS No Root Squash`

```python
nmap -sCV -p23,3306,5432 10.88.175.93 -oN scan.txt
evil-winrm -i 10.29.220.201 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.84.149.233 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Joomla

### POP3

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```python
evil-winrm -i 10.12.223.190 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## crackmapexec

### bloodhound

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

> **Note:** Constrained Delegation was identified as the primary attack vector in this scenario.

```bash
nmap -sCV -p3389,5432,5432 10.10.244.50 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.140.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```
