---
TitleSEO: "TryHackMe — Tartarsauce (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Tartarsauce (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tartarsauce. XSS and Resource-Based Constrained Delegation to achieve medium compromise on Windows."
Keywords: "active directory, linux, forensics, windows, ctf, hackthebox, offsec"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-446.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-446/"
Date: "2024-07-21"
Tags: "Active Directory, Linux, Forensics, Windows, CTF, HackTheBox, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-446"
Permalink: "/writeups/htb-tartarsauce-446.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.77.146.171`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.91.47.63 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.149.118 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.195.91/FUZZ
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.79.188.94/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.45.173.9 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p21,993,80 10.17.240.217 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

Key finding: **XSS**.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.124.130.5 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.58.77.146 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.116.16.158 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1433,8080,22 10.114.94.167 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p5986,135,995 10.90.140.152 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `kerbrute`
- `psexec`
- `dcomexec`
- `ldapsearch`
- `rpcclient`
- `msfvenom`
- `gobuster`
- `burpsuite`

### Key Takeaways

- XSS
- Resource-Based Constrained Delegation
- XXE
