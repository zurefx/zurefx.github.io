---
TitleSEO: "TryHackMe — Brainstorm (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Brainstorm (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Brainstorm. AlwaysInstallElevated and Remote File Inclusion to achieve medium compromise on OpenBSD."
Keywords: "hackthebox, windows, insane, forensics, tryhackme, hard"
URL: "https://zurefx.github.io/writeups/htb-brainstorm-691.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-brainstorm-691/"
Date: "2024-12-06"
Tags: "HackTheBox, Windows, Insane, Forensics, TryHackMe, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-brainstorm-691"
Permalink: "/writeups/htb-brainstorm-691.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Brainstorm** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.101.124.151`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.18.2.24 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.20.180.245 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.78.234.252/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.120.65.110 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
nmap -sCV -p110,993,143 10.42.121.73 -oN scan.txt
nmap -sCV -p5985,1433,53 10.126.193.205 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.69.191
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.111.75/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

Key finding: **Cron Job**.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
feroxbuster -h
evil-winrm -i 10.61.97.236 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
crackmapexec smb 10.129.49.168 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.107.61.173 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `GetUserSPNs`
- `bloodhound`
- `nikto`
- `pwncat`
- `enum4linux`
- `feroxbuster`
- `msfvenom`
- `evil-winrm`

### Key Takeaways

- AlwaysInstallElevated
- Remote File Inclusion
- Cron Job
