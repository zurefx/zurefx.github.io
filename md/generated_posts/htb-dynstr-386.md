---
TitleSEO: "HackTheBox — Dynstr (Easy FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Dynstr (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Dynstr. Local File Inclusion and Cron Job to achieve easy compromise on FreeBSD."
Keywords: "ctf, hackthebox, reversing, tryhackme, windows"
URL: "https://zurefx.github.io/writeups/htb-dynstr-386.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-dynstr-386/"
Date: "2024-02-16"
Tags: "CTF, HackTheBox, Reversing, TryHackMe, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-dynstr-386"
Permalink: "/writeups/htb-dynstr-386.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Dynstr** is rated **Easy** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.108.1.178`.

### Objectives

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.36.2.136 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.108.19.127/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p80,143,1521 10.84.186.131 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
gobuster dir -u http://10.105.225.160/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.66.229.172
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

Key finding: **Local File Inclusion**.

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.124.115.102
gobuster dir -u http://10.71.44.247/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.15.73.176 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.147.142
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.97.246.78 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.19.47.170 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `burpsuite`
- `impacket`
- `pwncat`
- `smbclient`

### Key Takeaways

- Local File Inclusion
- Cron Job
