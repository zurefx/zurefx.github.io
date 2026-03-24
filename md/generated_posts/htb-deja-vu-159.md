---
TitleSEO: "PwnTillDawn — Deja Vu (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Deja Vu (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Deja Vu. Broken Access Control and LXD Privilege Escalation to achieve insane compromise on Windows."
Keywords: "tryhackme, windows, hackthebox, forensics, insane, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-159.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-159/"
Date: "2024-04-20"
Tags: "TryHackMe, Windows, HackTheBox, Forensics, Insane, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-159"
Permalink: "/writeups/htb-deja-vu-159.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.85.13.180`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.73.17.246 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.95.140 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p22,80,143 10.77.226.90 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.157.199/FUZZ
nmap -sCV -p587,5432,443 10.71.202.24 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Broken Access Control**.

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
crackmapexec smb 10.20.247.68 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,5985,389 10.72.73.93 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```powershell
evil-winrm -i 10.56.241.138 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.105.78.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.55.172.162/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.102.162.134 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `GetNPUsers`
- `hashcat`
- `sqlmap`
- `socat`
- `wpscan`
- `evil-winrm`
- `ligolo-ng`

### Key Takeaways

- Broken Access Control
- LXD Privilege Escalation
