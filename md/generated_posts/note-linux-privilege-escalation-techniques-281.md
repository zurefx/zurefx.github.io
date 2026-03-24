---
TitleSEO: "Linux Privilege Escalation Techniques | ZureFX"
TitlePost: "Linux Privilege Escalation Techniques"
Author: "ZureFX"
Description: "Personal notes on Linux Privilege Escalation Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "lateral movement, dfir, persistence, oscp, privilege escalation"
URL: "https://zurefx.github.io/notes/note-linux-privilege-escalation-techniques-281.html"
URL_IMAGES: ""
Date: "2024-03-10"
Tags: "Lateral Movement, DFIR, Persistence, OSCP, Privilege Escalation"
Section: "notes"
Lang: "en"
main_img: "note-linux-privilege-escalation-techniques-281"
Permalink: "/notes/note-linux-privilege-escalation-techniques-281.html"
BtnLabel: "Read Notes"
Pick: 0
---
## burpsuite

### Drupal

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.77.215.24 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.39.149.236 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

## dcomexec

### Debian

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
crackmapexec smb 10.40.122.43 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.28.124.65 -u administrator -p 'P@ssw0rd!'
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.206.52 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Nginx

### CORS Misconfiguration

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.146.122/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## secretsdump

### C#

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3389,9200,443 10.101.174.59 -oN scan.txt
```

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.64.156 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

## SSTI

### Ruby on Rails

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.100.143.117/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

```bash
evil-winrm -i 10.87.173.30 -u administrator -p 'P@ssw0rd!'
```

- `Insecure Deserialization`
- `SeDebugPrivilege`
- `SeImpersonatePrivilege`

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.
