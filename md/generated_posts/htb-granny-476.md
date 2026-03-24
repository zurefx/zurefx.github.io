---
TitleSEO: "HackTheBox — Granny (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Granny (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Granny. NFS No Root Squash and Remote Code Execution to achieve hard compromise on Windows."
Keywords: "pwntilldawn, hackthebox, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-granny-476.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-granny-476/"
Date: "2025-08-31"
Tags: "PwnTillDawn, HackTheBox, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-granny-476"
Permalink: "/writeups/htb-granny-476.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Granny** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.94.37.137`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.16.86.219/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p445,5986,110 10.72.215.27 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.58.111.39 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.240.232
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Constrained Delegation**.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.15.93.10 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.237.41 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.107.178.6/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
feroxbuster -h
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.102.57 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.203.209/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `ligolo-ng`
- `rubeus`
- `chisel`
- `metasploit`
- `ldapsearch`
- `wmiexec`
- `crackmapexec`
- `sharphound`

### Key Takeaways

- NFS No Root Squash
- Remote Code Execution
- DNS Rebinding
- Constrained Delegation
