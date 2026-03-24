---
TitleSEO: "TryHackMe — Cap (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Cap (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Cap. Subdomain Takeover and SeDebugPrivilege to achieve insane compromise on OpenBSD."
Keywords: "hackthebox, windows, web, tryhackme, ctf, medium, forensics"
URL: "https://zurefx.github.io/writeups/htb-cap-632.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cap-632/"
Date: "2025-01-22"
Tags: "HackTheBox, Windows, Web, TryHackMe, CTF, Medium, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-cap-632"
Permalink: "/writeups/htb-cap-632.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cap** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.50.50.115`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.229.219
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.129.112
```

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.235.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8080,445,110 10.101.110.143 -oN scan.txt
gobuster dir -u http://10.76.219.251/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.74.198.114 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.62.185.166 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

Key finding: **Subdomain Takeover**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.105.118.75 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.126.148.86 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.206.174
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.77.207 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.72.113/FUZZ
gobuster dir -u http://10.127.224.31/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.112.134
gobuster dir -u http://10.81.151.199/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `nikto`
- `wpscan`
- `john`
- `lookupsid`
- `sharphound`

### Key Takeaways

- Subdomain Takeover
- SeDebugPrivilege
