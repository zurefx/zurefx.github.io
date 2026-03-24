---
TitleSEO: "OffSec Proving Grounds — Legacy (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Legacy (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Legacy. LXD Privilege Escalation and Pass the Hash to achieve insane compromise on Windows."
Keywords: "hard, linux, easy, windows, web, tryhackme, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-legacy-255.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-legacy-255/"
Date: "2025-03-04"
Tags: "Hard, Linux, Easy, Windows, Web, TryHackMe, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-legacy-255"
Permalink: "/writeups/htb-legacy-255.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Legacy** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.24.244.232`.

### Objectives

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.125.64
```

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
gobuster dir -u http://10.115.110.183/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.23.172.51 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p27017,139,3306 10.99.35.24 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

Key finding: **LXD Privilege Escalation**.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.20.123.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.37.111.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
gobuster dir -u http://10.14.95.101/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.95.161.247 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `wmiexec`
- `kerbrute`
- `msfvenom`
- `hashcat`
- `smbexec`
- `GetUserSPNs`
- `ldapsearch`

### Key Takeaways

- LXD Privilege Escalation
- Pass the Hash
- SeDebugPrivilege
