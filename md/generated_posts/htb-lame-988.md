---
TitleSEO: "OffSec Proving Grounds — Lame (Medium OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Lame (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Lame. Open Redirect and Pass the Ticket to achieve medium compromise on OpenBSD."
Keywords: "tryhackme, insane, medium, forensics, hackthebox, active directory, offsec"
URL: "https://zurefx.github.io/writeups/htb-lame-988.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-988/"
Date: "2024-04-13"
Tags: "TryHackMe, Insane, Medium, Forensics, HackTheBox, Active Directory, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-988"
Permalink: "/writeups/htb-lame-988.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Lame** is rated **Medium** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.119.226.37`.

### Objectives

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

Key finding: **Pass the Ticket**.

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.117.120
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.234.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.59.73.223 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.193.226
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.198.10
crackmapexec smb 10.25.47.216 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.109.38 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.99.75.194
nmap -sCV -p389,27017,1433 10.48.235.219 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `secretsdump`
- `dcomexec`
- `chisel`
- `smbexec`
- `GetNPUsers`

### Key Takeaways

- Open Redirect
- Pass the Ticket
