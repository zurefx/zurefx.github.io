---
TitleSEO: "PwnTillDawn — FriendZone (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — FriendZone (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn FriendZone. Subdomain Takeover and DCSync to achieve easy compromise on FreeBSD."
Keywords: "easy, tryhackme, offsec, hackthebox, hard, linux"
URL: "https://zurefx.github.io/writeups/htb-friendzone-546.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-friendzone-546/"
Date: "2024-04-07"
Tags: "Easy, TryHackMe, OffSec, HackTheBox, Hard, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-friendzone-546"
Permalink: "/writeups/htb-friendzone-546.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **FriendZone** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.121.39.223`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.115.65
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.115.151/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.63.4.176
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

Key finding: **Path Traversal**.

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

```bash
nmap -sCV -p21,8080,443 10.118.220.45 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.110.24.125
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.157.100
crackmapexec smb 10.58.99.26 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `nikto`
- `hashcat`
- `crackmapexec`
- `msfvenom`
- `smbexec`

### Key Takeaways

- Subdomain Takeover
- DCSync
- Path Traversal
- CSRF
