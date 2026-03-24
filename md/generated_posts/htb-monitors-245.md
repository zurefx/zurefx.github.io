---
TitleSEO: "OffSec Proving Grounds — Monitors (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Monitors (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Monitors. Sudo Misconfiguration and Open Redirect to achieve insane compromise on FreeBSD."
Keywords: "forensics, hard, tryhackme, medium, reversing, hackthebox, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-monitors-245.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-monitors-245/"
Date: "2024-11-05"
Tags: "Forensics, Hard, TryHackMe, Medium, Reversing, HackTheBox, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-monitors-245"
Permalink: "/writeups/htb-monitors-245.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Monitors** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.18.251.81`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.78.193.244
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.134.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.225.144
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

Key finding: **Open Redirect**.

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p143,1521,993 10.86.218.101 -oN scan.txt
crackmapexec smb 10.51.204.196 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.242.232 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.42.75
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.249.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.9.135 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `impacket`
- `crackmapexec`
- `socat`
- `wpscan`
- `sharphound`
- `ldapsearch`

### Key Takeaways

- Sudo Misconfiguration
- Open Redirect
- XSS
