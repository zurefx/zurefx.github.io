---
TitleSEO: "PwnTillDawn — SwagShop (Hard FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — SwagShop (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn SwagShop. Pass the Hash and SQL Injection to achieve hard compromise on FreeBSD."
Keywords: "hard, forensics, reversing, insane, pwntilldawn, medium"
URL: "https://zurefx.github.io/writeups/htb-swagshop-575.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-swagshop-575/"
Date: "2026-03-05"
Tags: "Hard, Forensics, Reversing, Insane, PwnTillDawn, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-swagshop-575"
Permalink: "/writeups/htb-swagshop-575.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **SwagShop** is rated **Hard** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.81.231.184`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.40.25.201 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.78.154.159/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.53.175.144/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.20.173.91/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **Pass the Hash**.

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.64.232.19 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.239.117
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```powershell
nmap -sCV -p8888,1433,993 10.110.221.230 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.128.134.250
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```powershell
nmap -sCV -p27017,993,23 10.23.69.230 -oN scan.txt
gobuster dir -u http://10.20.214.139/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.193.205
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `GetNPUsers`
- `nikto`
- `crackmapexec`
- `smbexec`
- `ffuf`

### Key Takeaways

- Pass the Hash
- SQL Injection
- Constrained Delegation
