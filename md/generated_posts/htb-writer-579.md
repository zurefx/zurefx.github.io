---
TitleSEO: "VulnHub — Writer (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Writer (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Writer. Kerberoasting and SSRF to achieve easy compromise on FreeBSD."
Keywords: "tryhackme, ctf, hard, offsec, windows"
URL: "https://zurefx.github.io/writeups/htb-writer-579.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-579/"
Date: "2024-07-05"
Tags: "TryHackMe, CTF, Hard, OffSec, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-579"
Permalink: "/writeups/htb-writer-579.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Writer** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.55.250.157`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.17.86/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.224.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```bash
crackmapexec smb 10.116.25.191 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.114.30.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.30.49.201 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The target system was identified as running a vulnerable version of the service.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **DLL Hijacking**.

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.70.85.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.153.64 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.177.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `pwncat`
- `ligolo-ng`
- `wpscan`
- `netcat`
- `atexec`
- `GetUserSPNs`
- `hashcat`
- `ldapsearch`

### Key Takeaways

- Kerberoasting
- SSRF
- DLL Hijacking
- ACL Abuse
