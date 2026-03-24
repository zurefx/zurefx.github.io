---
TitleSEO: "Blue Team Detection Techniques | ZureFX"
TitlePost: "Blue Team Detection Techniques"
Author: "ZureFX"
Description: "Personal notes on Blue Team Detection Techniques. Quick reference for pentesting and CTF challenges."
Keywords: "cheatsheet, windows, enumeration, blue team"
URL: "https://zurefx.github.io/notes/note-blue-team-detection-techniques-368.html"
URL_IMAGES: ""
Date: "2024-01-01"
Tags: "Cheatsheet, Windows, Enumeration, Blue Team"
Section: "notes"
Lang: "en"
main_img: "note-blue-team-detection-techniques-368"
Permalink: "/notes/note-blue-team-detection-techniques-368.html"
BtnLabel: "Read Notes"
Pick: 0
---
## IDOR

### Python

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

## Broken Access Control

### Apache

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

## RPC

### XSS

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

- `ligolo-ng`
- `Local File Inclusion`
- `NFS No Root Squash`

## DLL Hijacking

### SMTP

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.22.99
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.10.182.230/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## ligolo-ng

### sqlmap

- `Writable PATH`
- `Insecure Deserialization`
- `DLL Hijacking`
- `AlwaysInstallElevated`
- `Unquoted Service Path`

```python
gobuster dir -u http://10.39.183.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.40.217.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.237.227
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.77.118.40/FUZZ
```

- `Remote File Inclusion`
- `metasploit`
- `ffuf`
- `SQL Injection`
- `impacket`

## RDP

### mimikatz

```powershell
evil-winrm -i 10.46.11.120 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.41.201.103/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.155.205/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.
