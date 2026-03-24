---
TitleSEO: "TryHackMe — Tartarsauce (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Tartarsauce (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tartarsauce. ACL Abuse and Pass the Hash to achieve insane compromise on FreeBSD."
Keywords: "ctf, insane, hard, linux, pwntilldawn, forensics"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-116.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-116/"
Date: "2024-03-01"
Tags: "CTF, Insane, Hard, Linux, PwnTillDawn, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-116"
Permalink: "/writeups/htb-tartarsauce-116.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.59.9.135`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.16.171.82
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
crackmapexec smb 10.68.27.19 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,5986,8080 10.111.168.160 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p445,993,23 10.34.251.90 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Docker Escape**.

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p53,143,3306 10.120.186.248 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
crackmapexec smb 10.79.11.61 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.145.131/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.108.134.73/FUZZ
gobuster dir -u http://10.17.161.187/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `psexec`
- `sqlmap`
- `smbclient`
- `nikto`

### Key Takeaways

- ACL Abuse
- Pass the Hash
- Docker Escape
- AS-REP Roasting
