---
TitleSEO: "VulnHub — Steel Mountain (Easy OpenBSD) | ZureFX"
TitlePost: "VulnHub — Steel Mountain (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Steel Mountain. Remote Code Execution and Broken Access Control to achieve easy compromise on OpenBSD."
Keywords: "linux, easy, pwntilldawn, hard, insane, forensics, active directory"
URL: "https://zurefx.github.io/writeups/htb-steel-mountain-179.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-steel-mountain-179/"
Date: "2025-03-27"
Tags: "Linux, Easy, PwnTillDawn, Hard, Insane, Forensics, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-steel-mountain-179"
Permalink: "/writeups/htb-steel-mountain-179.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Steel Mountain** is rated **Easy** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.15.48.28`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.111.206.190 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.68.108
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p8888,22,8443 10.95.9.208 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

Key finding: **Remote Code Execution**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.126.216
crackmapexec smb 10.75.34.92 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.124.57.22 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.33.120 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.150.172/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `atexec`
- `secretsdump`
- `ffuf`
- `evil-winrm`
- `msfvenom`
- `rubeus`
- `mimikatz`

### Key Takeaways

- Remote Code Execution
- Broken Access Control
- Cron Job
- CSRF
