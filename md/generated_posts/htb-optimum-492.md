---
TitleSEO: "HackTheBox — Optimum (Easy OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Optimum (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Optimum. Local File Inclusion and SeImpersonatePrivilege to achieve easy compromise on OpenBSD."
Keywords: "windows, medium, linux, tryhackme, easy, web"
URL: "https://zurefx.github.io/writeups/htb-optimum-492.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-492/"
Date: "2024-01-14"
Tags: "Windows, Medium, Linux, TryHackMe, Easy, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-492"
Permalink: "/writeups/htb-optimum-492.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Easy** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.73.133.85`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.133.244/FUZZ
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.32.14.123 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.34.133.114/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.13.152.44 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Local File Inclusion**.

The target system was identified as running a vulnerable version of the service. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.57.138.204 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.15.170.19/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.88.97.64 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The database credentials were hardcoded in the application source code. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
gobuster dir -u http://10.99.135.97/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `lookupsid`
- `enum4linux`
- `crackmapexec`
- `smbclient`

### Key Takeaways

- Local File Inclusion
- SeImpersonatePrivilege
- AS-REP Roasting
