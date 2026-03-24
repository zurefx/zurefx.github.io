---
TitleSEO: "OffSec Proving Grounds — Pikaboo (Easy FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Pikaboo (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Pikaboo. Local File Inclusion and Unquoted Service Path to achieve easy compromise on FreeBSD."
Keywords: "windows, reversing, tryhackme, forensics, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-pikaboo-895.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pikaboo-895/"
Date: "2024-01-02"
Tags: "Windows, Reversing, TryHackMe, Forensics, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-pikaboo-895"
Permalink: "/writeups/htb-pikaboo-895.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pikaboo** is rated **Easy** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.19.191.189`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.39.80
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
nmap -sCV -p464,1521,5986 10.71.192.219 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.128.16.184 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.32.125.61 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Unquoted Service Path**.

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
evil-winrm -i 10.19.45.44 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p8443,25,587 10.42.41.239 -oN scan.txt
feroxbuster -h
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.10.159.44/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p445,995,143 10.26.90.158 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `GetNPUsers`
- `nmap`
- `gobuster`
- `chisel`
- `smbexec`
- `lookupsid`

### Key Takeaways

- Local File Inclusion
- Unquoted Service Path
