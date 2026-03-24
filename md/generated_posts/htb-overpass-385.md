---
TitleSEO: "OffSec Proving Grounds — Overpass (Hard Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Overpass (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Overpass. Unconstrained Delegation and Local File Inclusion to achieve hard compromise on Windows."
Keywords: "insane, pwntilldawn, ctf, linux"
URL: "https://zurefx.github.io/writeups/htb-overpass-385.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-overpass-385/"
Date: "2025-01-18"
Tags: "Insane, PwnTillDawn, CTF, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-overpass-385"
Permalink: "/writeups/htb-overpass-385.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Overpass** is rated **Hard** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.121.213.83`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
nmap -sCV -p1521,22,389 10.93.43.21 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.121.54.67/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.59.132
gobuster dir -u http://10.65.27.249/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p143,139,80 10.128.179.239 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Local File Inclusion**.

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
nmap -sCV -p995,8888,445 10.100.227.70 -oN scan.txt
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.47.128.188
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `john`
- `GetNPUsers`
- `impacket`
- `GetUserSPNs`
- `hydra`

### Key Takeaways

- Unconstrained Delegation
- Local File Inclusion
- NFS No Root Squash
- Golden Ticket
