---
TitleSEO: "HackTheBox — Doctor (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Doctor (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Doctor. SeDebugPrivilege and SeImpersonatePrivilege to achieve insane compromise on Windows."
Keywords: "hard, easy, linux"
URL: "https://zurefx.github.io/writeups/htb-doctor-301.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-301/"
Date: "2025-07-30"
Tags: "Hard, Easy, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-301"
Permalink: "/writeups/htb-doctor-301.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.54.126.48`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.22.20.178 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p110,3268,23 10.43.206.253 -oN scan.txt
nmap -sCV -p1433,3268,143 10.66.217.13 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.80.19.81 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.53.176.253 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.84.90.88 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.13.26.54 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.32.124.137 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **Pass the Hash**.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.14.138.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.111.112.214 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.35.190.71 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.83.254.170 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.252.192/FUZZ
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.41.136.59 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `GetNPUsers`
- `smbexec`
- `burpsuite`
- `rpcclient`
- `netcat`
- `impacket`
- `crackmapexec`
- `ldapsearch`

### Key Takeaways

- SeDebugPrivilege
- SeImpersonatePrivilege
- Unquoted Service Path
- Pass the Hash
