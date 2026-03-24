---
TitleSEO: "VulnHub — Lame (Hard OpenBSD) | ZureFX"
TitlePost: "VulnHub — Lame (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Lame. SeImpersonatePrivilege and AlwaysInstallElevated to achieve hard compromise on OpenBSD."
Keywords: "ctf, tryhackme, pwntilldawn, forensics"
URL: "https://zurefx.github.io/writeups/htb-lame-455.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-lame-455/"
Date: "2024-09-15"
Tags: "CTF, TryHackMe, PwnTillDawn, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-lame-455"
Permalink: "/writeups/htb-lame-455.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Lame** is rated **Hard** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.79.68.1`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p139,80,21 10.34.60.5 -oN scan.txt
feroxbuster -h
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.248.149
gobuster dir -u http://10.14.161.254/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.89.173.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

Key finding: **AlwaysInstallElevated**.

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
evil-winrm -i 10.55.144.194 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
evil-winrm -i 10.71.183.19 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
evil-winrm -i 10.91.35.223 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.132.66/FUZZ
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible.

```powershell
gobuster dir -u http://10.104.66.134/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Summary

### Tools Used

- `smbclient`
- `pwncat`
- `sharphound`
- `wpscan`
- `burpsuite`
- `ffuf`
- `GetUserSPNs`

### Key Takeaways

- SeImpersonatePrivilege
- AlwaysInstallElevated
- Golden Ticket
