---
TitleSEO: "HackTheBox — Blue (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Blue (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Blue. Local File Inclusion and CORS Misconfiguration to achieve insane compromise on OpenBSD."
Keywords: "tryhackme, linux, reversing, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-blue-732.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blue-732/"
Date: "2025-10-02"
Tags: "TryHackMe, Linux, Reversing, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-blue-732"
Permalink: "/writeups/htb-blue-732.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blue** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.62.177.211`.

### Objectives

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.55.82.172/FUZZ
crackmapexec smb 10.39.173.36 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.53.211.184 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.37.122.77 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

Key finding: **Local File Inclusion**.

Network traffic analysis revealed unencrypted communications containing user credentials. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.243.92/FUZZ
gobuster dir -u http://10.94.165.217/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.47.177.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.179.84/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.108.15.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.10.221.145 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```powershell
crackmapexec smb 10.60.113.112 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `msfvenom`
- `GetNPUsers`
- `chisel`
- `GetUserSPNs`
- `rubeus`
- `wpscan`
- `pwncat`

### Key Takeaways

- Local File Inclusion
- CORS Misconfiguration
