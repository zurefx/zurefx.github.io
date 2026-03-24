---
TitleSEO: "OffSec Proving Grounds — Bucket (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Bucket (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Bucket. Subdomain Takeover and Insecure Deserialization to achieve easy compromise on OpenBSD."
Keywords: "insane, ctf, active directory, hackthebox, pwntilldawn, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-bucket-142.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bucket-142/"
Date: "2025-12-12"
Tags: "Insane, CTF, Active Directory, HackTheBox, PwnTillDawn, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-bucket-142"
Permalink: "/writeups/htb-bucket-142.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bucket** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.68.199.123`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p143,8080,1433 10.32.236.151 -oN scan.txt
crackmapexec smb 10.59.83.203 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.106.210.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.227.87/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.58.94.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.127.78.115/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p587,443,53 10.66.83.238 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Insecure Deserialization**.

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
gobuster dir -u http://10.51.159.87/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
evil-winrm -i 10.114.236.224 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.21.133.103 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.76.139.225/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `hydra`
- `burpsuite`
- `bloodhound`
- `socat`

### Key Takeaways

- Subdomain Takeover
- Insecure Deserialization
- Weak Service Permissions
- NFS No Root Squash
