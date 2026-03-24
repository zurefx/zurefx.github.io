---
TitleSEO: "TryHackMe — Doctor (Insane Windows) | ZureFX"
TitlePost: "TryHackMe — Doctor (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Doctor. Open Redirect and Pass the Hash to achieve insane compromise on Windows."
Keywords: "pwntilldawn, windows, active directory, hackthebox, reversing"
URL: "https://zurefx.github.io/writeups/htb-doctor-370.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-370/"
Date: "2025-04-25"
Tags: "PwnTillDawn, Windows, Active Directory, HackTheBox, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-370"
Permalink: "/writeups/htb-doctor-370.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Doctor** is rated **Insane** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.74.27.1`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.112.11.191 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.96.245.246 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
evil-winrm -i 10.15.71.214 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.194.145
feroxbuster -h
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Weak Service Permissions**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
crackmapexec smb 10.92.51.233 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.86.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.27.156.51 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The database credentials were hardcoded in the application source code. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.54.32.67/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.82.132.21 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.51.166.215
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `sqlmap`
- `hashcat`
- `nmap`
- `gobuster`
- `smbexec`
- `crackmapexec`
- `psexec`
- `chisel`

### Key Takeaways

- Open Redirect
- Pass the Hash
- IDOR
- Weak Service Permissions
