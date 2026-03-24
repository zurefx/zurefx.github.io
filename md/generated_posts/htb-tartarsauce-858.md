---
TitleSEO: "HackTheBox — Tartarsauce (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Tartarsauce (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tartarsauce. Golden Ticket and Unconstrained Delegation to achieve insane compromise on FreeBSD."
Keywords: "ctf, forensics, tryhackme, pwntilldawn, linux"
URL: "https://zurefx.github.io/writeups/htb-tartarsauce-858.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tartarsauce-858/"
Date: "2024-03-22"
Tags: "CTF, Forensics, TryHackMe, PwnTillDawn, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-tartarsauce-858"
Permalink: "/writeups/htb-tartarsauce-858.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tartarsauce** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.129.219.125`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.102.126.95 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
nmap -sCV -p23,389,22 10.95.14.101 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.53.168.207/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.220.1
crackmapexec smb 10.75.44.139 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **AS-REP Roasting**.

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```bash
gobuster dir -u http://10.13.122.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p22,1433,8080 10.24.232.138 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.104.184.75 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p139,1433,8443 10.55.185.173 -oN scan.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `hydra`
- `nikto`
- `pwncat`
- `crackmapexec`

### Key Takeaways

- Golden Ticket
- Unconstrained Delegation
- AS-REP Roasting
- NFS No Root Squash
