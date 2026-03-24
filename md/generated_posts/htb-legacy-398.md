---
TitleSEO: "HackTheBox — Legacy (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Legacy (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Legacy. Unquoted Service Path and IDOR to achieve easy compromise on Linux."
Keywords: "reversing, pwntilldawn, easy, medium, tryhackme, insane"
URL: "https://zurefx.github.io/writeups/htb-legacy-398.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-398/"
Date: "2025-12-24"
Tags: "Reversing, PwnTillDawn, Easy, Medium, TryHackMe, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-398"
Permalink: "/writeups/htb-legacy-398.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Legacy** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.98.123.15`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.20.109.101 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.145.206
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.90.70.199 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.249.15 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.95.105.63/FUZZ
crackmapexec smb 10.106.129.136 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **LAPS Abuse**.

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.112.136/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
crackmapexec smb 10.56.97.246 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.122.39.55/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `netcat`
- `nikto`
- `sharphound`
- `wmiexec`
- `socat`
- `secretsdump`
- `gobuster`

### Key Takeaways

- Unquoted Service Path
- IDOR
- Silver Ticket
- LAPS Abuse
