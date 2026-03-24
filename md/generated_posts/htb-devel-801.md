---
TitleSEO: "VulnHub — Devel (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Devel (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Devel. Sudo Misconfiguration and Unconstrained Delegation to achieve easy compromise on OpenBSD."
Keywords: "web, tryhackme, ctf"
URL: "https://zurefx.github.io/writeups/htb-devel-801.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-801/"
Date: "2025-07-28"
Tags: "Web, TryHackMe, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-801"
Permalink: "/writeups/htb-devel-801.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Devel** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.115.242.143`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.117.47.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
crackmapexec smb 10.54.132.239 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.127.161.205 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.201.141/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.149.251
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Unconstrained Delegation**.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
gobuster dir -u http://10.110.57.187/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.156.48
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.6.13/FUZZ
nmap -sCV -p445,8443,1521 10.118.81.235 -oN scan.txt
feroxbuster -h
```

### Exploitation

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `hydra`
- `netcat`
- `ffuf`
- `ligolo-ng`
- `dcomexec`

### Key Takeaways

- Sudo Misconfiguration
- Unconstrained Delegation
- Unquoted Service Path
- LXD Privilege Escalation
