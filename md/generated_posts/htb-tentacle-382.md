---
TitleSEO: "HackTheBox — Tentacle (Hard FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Tentacle (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tentacle. XSS and Insecure Deserialization to achieve hard compromise on FreeBSD."
Keywords: "insane, active directory, hard, offsec, easy"
URL: "https://zurefx.github.io/writeups/htb-tentacle-382.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tentacle-382/"
Date: "2024-08-03"
Tags: "Insane, Active Directory, Hard, OffSec, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-tentacle-382"
Permalink: "/writeups/htb-tentacle-382.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tentacle** is rated **Hard** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.88.66.146`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p22,1433,587 10.90.19.56 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.107.10 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.102.159.167 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.81.98 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **XSS**.

Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.71.176.184 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.194.241
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.159.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.14.89.139 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.28.134
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `burpsuite`
- `enum4linux`
- `GetUserSPNs`
- `feroxbuster`
- `msfvenom`
- `nikto`

### Key Takeaways

- XSS
- Insecure Deserialization
