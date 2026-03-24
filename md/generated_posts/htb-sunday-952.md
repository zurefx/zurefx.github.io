---
TitleSEO: "TryHackMe — Sunday (Medium FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Sunday (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Sunday. Local File Inclusion and ACL Abuse to achieve medium compromise on FreeBSD."
Keywords: "insane, hard, offsec, hackthebox, linux, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-sunday-952.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sunday-952/"
Date: "2024-10-06"
Tags: "Insane, Hard, OffSec, HackTheBox, Linux, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-sunday-952"
Permalink: "/writeups/htb-sunday-952.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sunday** is rated **Medium** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.126.57.124`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.26.69.136
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.30.167.171/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.182.70/FUZZ
```

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.125.11.4 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.119.175.14/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

Key finding: **ACL Abuse**.

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.28.161.138/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.96.91
crackmapexec smb 10.122.228.98 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.70.211.240/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
crackmapexec smb 10.123.1.121 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `netcat`
- `rpcclient`
- `feroxbuster`
- `wpscan`
- `bloodhound`
- `metasploit`
- `GetUserSPNs`
- `nikto`

### Key Takeaways

- Local File Inclusion
- ACL Abuse
