---
TitleSEO: "OffSec Proving Grounds — Ice (Medium Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — Ice (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Ice. Sudo Misconfiguration and Kerberoasting to achieve medium compromise on Linux."
Keywords: "linux, forensics, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-ice-278.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ice-278/"
Date: "2024-11-09"
Tags: "Linux, Forensics, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-ice-278"
Permalink: "/writeups/htb-ice-278.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ice** is rated **Medium** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.75.217.191`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.71.7.14/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
evil-winrm -i 10.128.32.163 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.100.91.242 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.66.61.244/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Kerberoasting**.

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.76.235.151 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.194.32 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.38.219.241 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.46.26.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.32.151 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `GetNPUsers`
- `smbexec`
- `gobuster`
- `hydra`
- `feroxbuster`
- `GetUserSPNs`

### Key Takeaways

- Sudo Misconfiguration
- Kerberoasting
- NFS No Root Squash
