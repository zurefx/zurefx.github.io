---
TitleSEO: "VulnHub — Blunder (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Blunder (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Blunder. Docker Escape and Cron Job to achieve easy compromise on Windows."
Keywords: "hackthebox, active directory, insane, easy, reversing"
URL: "https://zurefx.github.io/writeups/htb-blunder-745.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-745/"
Date: "2024-07-25"
Tags: "HackTheBox, Active Directory, Insane, Easy, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-745"
Permalink: "/writeups/htb-blunder-745.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blunder** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.123.79.170`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.59.33.173/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.22.145.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.127.94.230
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.87.24.60/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.42.136.54 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.35.201.165 -u administrator -p 'P@ssw0rd!'
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Pass the Hash**.

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.126.128.51 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.10.192.211 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.155.67/FUZZ
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.252.44
evil-winrm -i 10.19.126.52 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p143,139,22 10.38.189.197 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `ldapsearch`
- `smbexec`
- `sharphound`
- `secretsdump`
- `hashcat`
- `msfvenom`

### Key Takeaways

- Docker Escape
- Cron Job
- Pass the Hash
- NFS No Root Squash
