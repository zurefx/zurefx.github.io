---
TitleSEO: "VulnHub — Lame (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Lame (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Lame. XXE and SQL Injection to achieve insane compromise on OpenBSD."
Keywords: "web, forensics, tryhackme, linux, hackthebox, windows, active directory"
URL: "https://zurefx.github.io/writeups/htb-lame-297.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-297/"
Date: "2024-05-04"
Tags: "Web, Forensics, TryHackMe, Linux, HackTheBox, Windows, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-297"
Permalink: "/writeups/htb-lame-297.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Lame** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.108.205.198`.

### Objectives

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.46.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
gobuster dir -u http://10.39.130.118/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.183.103 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.118.147.87 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

Key finding: **XXE**.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.67.184.22/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.103.71.91 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```powershell
evil-winrm -i 10.93.233.143 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.55.141.226/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.252.15/FUZZ
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.190.32/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `nmap`
- `ffuf`
- `feroxbuster`
- `burpsuite`
- `impacket`
- `secretsdump`

### Key Takeaways

- XXE
- SQL Injection
- IDOR
- NTLM Relay
