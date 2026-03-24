---
TitleSEO: "VulnHub — Mindgames (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Mindgames (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mindgames. Resource-Based Constrained Delegation and LXD Privilege Escalation to achieve easy compromise on FreeBSD."
Keywords: "tryhackme, offsec, reversing, ctf"
URL: "https://zurefx.github.io/writeups/htb-mindgames-698.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-698/"
Date: "2025-08-01"
Tags: "TryHackMe, OffSec, Reversing, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-698"
Permalink: "/writeups/htb-mindgames-698.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.30.183.29`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.210.139
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.2.63 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
crackmapexec smb 10.64.42.171 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.171.78
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.173.15 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

Key finding: **DNS Rebinding**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p389,80,1521 10.15.68.209 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.106.207.118
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
gobuster dir -u http://10.96.3.99/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `netcat`
- `wpscan`
- `metasploit`
- `burpsuite`
- `gobuster`
- `sqlmap`
- `crackmapexec`
- `enum4linux`

### Key Takeaways

- Resource-Based Constrained Delegation
- LXD Privilege Escalation
- NFS No Root Squash
- DNS Rebinding
