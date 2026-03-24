---
TitleSEO: "VulnHub — Spectra (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Spectra (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Spectra. Local File Inclusion and Unquoted Service Path to achieve medium compromise on OpenBSD."
Keywords: "pwntilldawn, offsec, tryhackme, easy"
URL: "https://zurefx.github.io/writeups/htb-spectra-563.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-563/"
Date: "2025-02-08"
Tags: "PwnTillDawn, OffSec, TryHackMe, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-563"
Permalink: "/writeups/htb-spectra-563.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.17.122.144`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.33.167 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.88.249.17 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p8080,993,995 10.57.71.189 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.210.21
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Unquoted Service Path**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.24.174 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p21,5432,80 10.76.210.23 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
nmap -sCV -p445,25,636 10.57.234.10 -oN scan.txt
evil-winrm -i 10.76.173.159 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.65.154.1/FUZZ
gobuster dir -u http://10.39.54.220/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p9200,27017,110 10.17.46.238 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.50.189.77 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `GetUserSPNs`
- `crackmapexec`
- `ldapsearch`
- `gobuster`
- `impacket`
- `kerbrute`

### Key Takeaways

- Local File Inclusion
- Unquoted Service Path
- NFS No Root Squash
