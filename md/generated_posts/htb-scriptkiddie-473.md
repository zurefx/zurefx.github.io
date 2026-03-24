---
TitleSEO: "HackTheBox — ScriptKiddie (Medium Windows) | ZureFX"
TitlePost: "HackTheBox — ScriptKiddie (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox ScriptKiddie. SUID Binary and Constrained Delegation to achieve medium compromise on Windows."
Keywords: "hard, windows, insane, easy, ctf, reversing"
URL: "https://zurefx.github.io/writeups/htb-scriptkiddie-473.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-scriptkiddie-473/"
Date: "2025-10-27"
Tags: "Hard, Windows, Insane, Easy, CTF, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-scriptkiddie-473"
Permalink: "/writeups/htb-scriptkiddie-473.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ScriptKiddie** is rated **Medium** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.14.179.59`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p9200,143,25 10.31.214.113 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.54.137
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.7.186/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p993,636,8888 10.86.30.99 -oN scan.txt
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

Key finding: **SUID Binary**.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.66.98.53 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.28.73.237 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1521,587,5432 10.17.73.159 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
feroxbuster -h
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `kerbrute`
- `crackmapexec`
- `chisel`
- `nikto`
- `pwncat`

### Key Takeaways

- SUID Binary
- Constrained Delegation
