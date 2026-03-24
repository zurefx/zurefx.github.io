---
TitleSEO: "PwnTillDawn — Optimum (Hard FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Optimum (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Optimum. Cron Job and XSS to achieve hard compromise on FreeBSD."
Keywords: "ctf, offsec, tryhackme, easy"
URL: "https://zurefx.github.io/writeups/htb-optimum-853.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-853/"
Date: "2024-06-22"
Tags: "CTF, OffSec, TryHackMe, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-853"
Permalink: "/writeups/htb-optimum-853.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Hard** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.116.40.180`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.82.222.74/FUZZ
gobuster dir -u http://10.48.31.78/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
gobuster dir -u http://10.58.104.63/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.8.30
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.102.222.77/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p143,3268,445 10.95.252.210 -oN scan.txt
crackmapexec smb 10.121.174.125 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.20.158.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

Key finding: **DCSync**.

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p25,5432,8080 10.25.193.182 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
evil-winrm -i 10.46.156.202 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `mimikatz`
- `wmiexec`
- `crackmapexec`
- `chisel`
- `john`

### Key Takeaways

- Cron Job
- XSS
- CSRF
- DCSync
