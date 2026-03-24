---
TitleSEO: "PwnTillDawn — Skynet (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Skynet (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Skynet. Remote File Inclusion and Path Traversal to achieve medium compromise on OpenBSD."
Keywords: "easy, linux, pwntilldawn, reversing, hard, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-skynet-138.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-138/"
Date: "2024-07-17"
Tags: "Easy, Linux, PwnTillDawn, Reversing, Hard, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-138"
Permalink: "/writeups/htb-skynet-138.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.71.79.67`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

```bash
gobuster dir -u http://10.124.240.133/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.218.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p3306,389,80 10.72.25.115 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.91.106.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Constrained Delegation**.

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.40.142
```

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.178.10/FUZZ
crackmapexec smb 10.12.194.245 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.97.123.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p27017,21,53 10.16.184.33 -oN scan.txt
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```powershell
feroxbuster -h
gobuster dir -u http://10.55.85.232/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.97.35 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `pwncat`
- `evil-winrm`
- `wpscan`
- `nmap`

### Key Takeaways

- Remote File Inclusion
- Path Traversal
- Constrained Delegation
