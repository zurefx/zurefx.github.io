---
TitleSEO: "VulnHub — Internal (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Internal (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Internal. Docker Escape and Local File Inclusion to achieve insane compromise on OpenBSD."
Keywords: "linux, tryhackme, ctf"
URL: "https://zurefx.github.io/writeups/htb-internal-406.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-internal-406/"
Date: "2024-07-04"
Tags: "Linux, TryHackMe, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-internal-406"
Permalink: "/writeups/htb-internal-406.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Internal** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.81.73.111`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.120.235/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5985,636,22 10.127.213.113 -oN scan.txt
crackmapexec smb 10.110.22.95 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.19.29.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p8888,25,23 10.13.119.160 -oN scan.txt
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

Key finding: **AlwaysInstallElevated**.

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.98.174
feroxbuster -h
gobuster dir -u http://10.51.35.155/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
crackmapexec smb 10.72.142.19 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.62.120.138 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.96.147.143 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
gobuster dir -u http://10.124.88.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.38.191
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `dcomexec`
- `psexec`
- `feroxbuster`
- `evil-winrm`
- `sharphound`

### Key Takeaways

- Docker Escape
- Local File Inclusion
- AlwaysInstallElevated
- Open Redirect
