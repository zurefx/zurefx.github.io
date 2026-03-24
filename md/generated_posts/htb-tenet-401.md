---
TitleSEO: "TryHackMe — Tenet (Insane Linux) | ZureFX"
TitlePost: "TryHackMe — Tenet (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tenet. Local File Inclusion and CSRF to achieve insane compromise on Linux."
Keywords: "hard, pwntilldawn, easy, forensics, insane"
URL: "https://zurefx.github.io/writeups/htb-tenet-401.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-401/"
Date: "2024-03-13"
Tags: "Hard, PwnTillDawn, Easy, Forensics, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-401"
Permalink: "/writeups/htb-tenet-401.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.40.170.17`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.129.213.145/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

Key finding: **Unconstrained Delegation**.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.88.232.141/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.200.247/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.136.111
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.117.27.113 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.55.75
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `john`
- `secretsdump`
- `GetNPUsers`
- `lookupsid`
- `smbclient`
- `netcat`

### Key Takeaways

- Local File Inclusion
- CSRF
- Unconstrained Delegation
- Constrained Delegation
