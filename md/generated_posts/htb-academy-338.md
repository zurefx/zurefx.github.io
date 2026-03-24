---
TitleSEO: "PwnTillDawn — Academy (Hard FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Academy (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Academy. CORS Misconfiguration and Path Traversal to achieve hard compromise on FreeBSD."
Keywords: "forensics, tryhackme, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-academy-338.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-academy-338/"
Date: "2025-10-19"
Tags: "Forensics, TryHackMe, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-academy-338"
Permalink: "/writeups/htb-academy-338.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Academy** is rated **Hard** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.111.131.159`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.20.177
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.11.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.114.97
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.112.172
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Silver Ticket**.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.20.251
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.30.31.180
crackmapexec smb 10.54.25.173 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

```powershell
crackmapexec smb 10.46.203.168 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.58.89.105 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.41.110.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `msfvenom`
- `hydra`
- `dcomexec`
- `nmap`
- `sqlmap`
- `gobuster`
- `burpsuite`

### Key Takeaways

- CORS Misconfiguration
- Path Traversal
- Silver Ticket
