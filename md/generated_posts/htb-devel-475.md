---
TitleSEO: "TryHackMe — Devel (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Devel (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Devel. Golden Ticket and Constrained Delegation to achieve insane compromise on FreeBSD."
Keywords: "web, medium, tryhackme, active directory, insane, hackthebox, hard"
URL: "https://zurefx.github.io/writeups/htb-devel-475.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-475/"
Date: "2024-01-12"
Tags: "Web, Medium, TryHackMe, Active Directory, Insane, HackTheBox, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-475"
Permalink: "/writeups/htb-devel-475.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Devel** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.94.198.26`.

### Objectives

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.70.14.30 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.110.4
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.97.165.113 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.249.124
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.52.232
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.106.116/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.45.95/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Golden Ticket**.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.13.142/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.23.134
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.5.36
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `nmap`
- `netcat`
- `sharphound`
- `smbexec`
- `hydra`
- `GetNPUsers`
- `kerbrute`
- `psexec`

### Key Takeaways

- Golden Ticket
- Constrained Delegation
- IDOR
