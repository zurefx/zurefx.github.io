---
TitleSEO: "VulnHub — Omni (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Omni (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Omni. XSS and Resource-Based Constrained Delegation to achieve easy compromise on FreeBSD."
Keywords: "tryhackme, hard, active directory, easy, windows, medium"
URL: "https://zurefx.github.io/writeups/htb-omni-739.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-739/"
Date: "2024-11-03"
Tags: "TryHackMe, Hard, Active Directory, Easy, Windows, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-739"
Permalink: "/writeups/htb-omni-739.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Omni** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.115.190.244`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.99.142.34/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.105.163.135 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Unconstrained Delegation**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.235.161
nmap -sCV -p5432,22,3306 10.85.249.236 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
crackmapexec smb 10.119.93.91 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.163.110
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.62.95/FUZZ
gobuster dir -u http://10.84.147.192/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `smbexec`
- `kerbrute`
- `smbclient`
- `ffuf`
- `rubeus`
- `mimikatz`
- `nikto`

### Key Takeaways

- XSS
- Resource-Based Constrained Delegation
- Unconstrained Delegation
