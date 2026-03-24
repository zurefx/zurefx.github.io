---
TitleSEO: "VulnHub — Traverxec (Hard Windows) | ZureFX"
TitlePost: "VulnHub — Traverxec (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Traverxec. Path Traversal and Cron Job to achieve hard compromise on Windows."
Keywords: "active directory, hard, reversing, tryhackme, easy, windows, forensics"
URL: "https://zurefx.github.io/writeups/htb-traverxec-303.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-traverxec-303/"
Date: "2025-02-26"
Tags: "Active Directory, Hard, Reversing, TryHackMe, Easy, Windows, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-traverxec-303"
Permalink: "/writeups/htb-traverxec-303.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Traverxec** is rated **Hard** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.43.195.63`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.82.214.61
impacket-secretsdump administrator:'P@ssw0rd!'@10.103.45.237
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.62.196.47 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.29.26.194/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.11.199.1/FUZZ
crackmapexec smb 10.89.199.127 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.126.97.127 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p445,8443,3306 10.35.105.144 -oN scan.txt
gobuster dir -u http://10.50.247.84/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Path Traversal**.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.33.84.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.81.2.8 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `rpcclient`
- `wpscan`
- `ffuf`
- `secretsdump`
- `smbclient`
- `kerbrute`
- `impacket`
- `feroxbuster`

### Key Takeaways

- Path Traversal
- Cron Job
