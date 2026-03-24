---
TitleSEO: "HackTheBox — Grandpa (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Grandpa (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Grandpa. Pass the Ticket and Insecure Deserialization to achieve insane compromise on FreeBSD."
Keywords: "medium, hard, easy, tryhackme, hackthebox, offsec, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-grandpa-793.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-grandpa-793/"
Date: "2025-10-28"
Tags: "Medium, Hard, Easy, TryHackMe, HackTheBox, OffSec, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-grandpa-793"
Permalink: "/writeups/htb-grandpa-793.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Grandpa** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.79.143.134`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.179.52
crackmapexec smb 10.86.109.92 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.10.237.179 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.164.56
gobuster dir -u http://10.18.71.30/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.124.133 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.46.209.33 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.39.26.178 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

Key finding: **Insecure Deserialization**.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.162.178/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.237.144
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.124.200.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p443,25,3389 10.109.167.250 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `mimikatz`
- `netcat`
- `ligolo-ng`
- `ldapsearch`
- `john`

### Key Takeaways

- Pass the Ticket
- Insecure Deserialization
- IDOR
