---
TitleSEO: "OffSec Proving Grounds — Tenet (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tenet (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tenet. Constrained Delegation and Subdomain Takeover to achieve insane compromise on OpenBSD."
Keywords: "insane, tryhackme, hard, windows, reversing"
URL: "https://zurefx.github.io/writeups/htb-tenet-535.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-535/"
Date: "2024-01-05"
Tags: "Insane, TryHackMe, Hard, Windows, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-535"
Permalink: "/writeups/htb-tenet-535.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.16.27.227`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.110.213/FUZZ
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
gobuster dir -u http://10.13.174.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.86.128.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.80.227.171/FUZZ
crackmapexec smb 10.54.248.231 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.95.84.239/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.113.60.87/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Subdomain Takeover**.

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.14.75/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.33.185.202/FUZZ
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.223.189/FUZZ
crackmapexec smb 10.13.10.150 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
evil-winrm -i 10.68.91.164 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `wpscan`
- `atexec`
- `netcat`
- `metasploit`
- `smbclient`
- `lookupsid`

### Key Takeaways

- Constrained Delegation
- Subdomain Takeover
