---
TitleSEO: "TryHackMe — Ice (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Ice (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Ice. Unquoted Service Path and SSTI to achieve insane compromise on FreeBSD."
Keywords: "medium, insane, reversing, ctf, tryhackme, hard, forensics"
URL: "https://zurefx.github.io/writeups/htb-ice-906.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-906/"
Date: "2026-02-02"
Tags: "Medium, Insane, Reversing, CTF, TryHackMe, Hard, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-906"
Permalink: "/writeups/htb-ice-906.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.35.96.52`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.213.222 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.13.180.223
nmap -sCV -p143,135,27017 10.101.50.231 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.201.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.237.91
nmap -sCV -p5985,445,5986 10.105.172.4 -oN scan.txt
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **CSRF**.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p995,8080,3306 10.35.227.161 -oN scan.txt
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p5985,3306,3306 10.35.55.168 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `evil-winrm`
- `hydra`
- `sharphound`
- `pwncat`
- `ldapsearch`
- `metasploit`
- `psexec`
- `hashcat`

### Key Takeaways

- Unquoted Service Path
- SSTI
- CSRF
