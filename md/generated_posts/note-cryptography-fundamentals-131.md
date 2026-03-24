---
TitleSEO: "Cryptography Fundamentals | ZureFX"
TitlePost: "Cryptography Fundamentals"
Author: "ZureFX"
Description: "Personal notes on Cryptography Fundamentals. Quick reference for pentesting and CTF challenges."
Keywords: "oscp, linux, cheatsheet, windows, dfir"
URL: "https://zurefx.github.io/notes/note-cryptography-fundamentals-131.html"
URL_IMAGES: ""
Date: "2024-12-03"
Tags: "OSCP, Linux, Cheatsheet, Windows, DFIR"
Section: "notes"
Lang: "en"
main_img: "note-cryptography-fundamentals-131"
Permalink: "/notes/note-cryptography-fundamentals-131.html"
BtnLabel: "Read Notes"
Pick: 0
---
## Python

### hydra

> **Note:** Remote File Inclusion was identified as the primary attack vector in this scenario.

```python
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.23.199.142 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.20.52.124
gobuster dir -u http://10.69.216.29/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## RDP

### msfvenom

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```python
feroxbuster -h
crackmapexec smb 10.121.216.199 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Windows Server 2019

### john

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## feroxbuster

### AS-REP Roasting

- `SeImpersonatePrivilege`
- `Remote File Inclusion`
- `nikto`

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

## kerbrute

### SeImpersonatePrivilege

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.43.7.7/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.67.77 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.56.120/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

> **Note:** Command Injection was identified as the primary attack vector in this scenario.

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.
