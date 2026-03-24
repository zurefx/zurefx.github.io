---
TitleSEO: "OffSec Proving Grounds — Tabby (Easy Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Tabby (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Tabby. SeImpersonatePrivilege and SeDebugPrivilege to achieve easy compromise on Linux."
Keywords: "offsec, web, ctf, forensics, tryhackme, pwntilldawn, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-tabby-841.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-841/"
Date: "2026-01-27"
Tags: "OffSec, Web, CTF, Forensics, TryHackMe, PwnTillDawn, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-841"
Permalink: "/writeups/htb-tabby-841.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Easy** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.30.116.90`.

### Objectives

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.61.101 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.83.191.7 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.126.235.31 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.110.17.120 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.79.80.153 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.166.212 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **SeDebugPrivilege**.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.86.194.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.44.56.85/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.127.170.45 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.96.88.233 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.75.229.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p5986,8888,636 10.100.160.44 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `ligolo-ng`
- `john`
- `bloodhound`
- `dcomexec`

### Key Takeaways

- SeImpersonatePrivilege
- SeDebugPrivilege
- DLL Hijacking
- SQL Injection
