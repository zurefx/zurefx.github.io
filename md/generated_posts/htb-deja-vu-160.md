---
TitleSEO: "TryHackMe — Deja Vu (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Deja Vu (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Deja Vu. Path Traversal and IDOR to achieve medium compromise on Linux."
Keywords: "offsec, reversing, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-160.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-160/"
Date: "2024-08-10"
Tags: "OffSec, Reversing, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-160"
Permalink: "/writeups/htb-deja-vu-160.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.12.166.94`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.188.79
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.85.31/FUZZ
```

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.10.50.205/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.253.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.75.90.137/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p3268,25,143 10.17.157.208 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.118.201.47 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Path Traversal**.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.54.240.36 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p5986,8888,143 10.112.211.221 -oN scan.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.58.233.218 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.94.14/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `pwncat`
- `bloodhound`
- `msfvenom`
- `socat`

### Key Takeaways

- Path Traversal
- IDOR
