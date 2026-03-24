---
TitleSEO: "OffSec Proving Grounds — Mindgames (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Mindgames (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Mindgames. CORS Misconfiguration and Remote Code Execution to achieve insane compromise on OpenBSD."
Keywords: "tryhackme, forensics, pwntilldawn, hackthebox, insane, hard"
URL: "https://zurefx.github.io/writeups/htb-mindgames-898.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-898/"
Date: "2024-09-02"
Tags: "TryHackMe, Forensics, PwnTillDawn, HackTheBox, Insane, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-898"
Permalink: "/writeups/htb-mindgames-898.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.120.183.19`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.60.60.48 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5985,139,8443 10.83.210.109 -oN scan.txt
gobuster dir -u http://10.95.23.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **DCSync**.

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.18.80.212 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.244.248
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `mimikatz`
- `smbexec`
- `GetUserSPNs`
- `GetNPUsers`
- `ffuf`
- `crackmapexec`
- `ligolo-ng`

### Key Takeaways

- CORS Misconfiguration
- Remote Code Execution
- DCSync
