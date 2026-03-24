---
TitleSEO: "Common CTF Tricks and Techniques | ZureFX"
TitlePost: "Common CTF Tricks and Techniques"
Author: "ZureFX"
Description: "Personal notes on Common CTF Tricks and Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, persistence, malware, enumeration"
URL: "https://zurefx.github.io/notes/note-common-ctf-tricks-and-techniques-317.html"
URL_IMAGES: ""
Date: "2025-06-12"
Tags: "OSCP, Persistence, Malware, Enumeration"
Section: "notes"
Lang: "en"
main_img: "note-common-ctf-tricks-and-techniques-317"
Permalink: "/notes/note-common-ctf-tricks-and-techniques-317.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Bash

### XXE

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

## MongoDB

### kerbrute

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.14.87.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.110.145.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.219.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.10.195/FUZZ
evil-winrm -i 10.99.141.62 -u administrator -p 'P@ssw0rd!'
```

- `pwncat`
- `Broken Access Control`
- `chisel`

## crackmapexec

### atexec

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```powershell
nmap -sCV -p8443,3389,53 10.89.20.32 -oN scan.txt
```

- `sharphound`
- `crackmapexec`
- `Command Injection`
- `metasploit`
- `XSS`

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## SQL Injection

### Kerberos

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p21,636,1433 10.123.102.220 -oN scan.txt
```

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## DCSync

### AS-REP Roasting

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## SSTI

### SSH

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.147.37
evil-winrm -i 10.25.61.191 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.
