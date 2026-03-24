---
TitleSEO: "HackTheBox — ServMon (Easy FreeBSD) | ZureFX"
TitlePost: "HackTheBox — ServMon (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox ServMon. SQL Injection and Writable PATH to achieve easy compromise on FreeBSD."
Keywords: "insane, medium, forensics, web, hard, windows"
URL: "https://zurefx.github.io/writeups/htb-servmon-305.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-305/"
Date: "2026-03-21"
Tags: "Insane, Medium, Forensics, Web, Hard, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-305"
Permalink: "/writeups/htb-servmon-305.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **ServMon** is rated **Easy** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.49.94.230`.

### Objectives

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.51.13.16 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.116.104.86 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.68.148.211
nmap -sCV -p389,5986,3268 10.30.198.231 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.144.49 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.124.43.229 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine.

Key finding: **SQL Injection**.

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.84.68.143 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.149.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.72.58.211 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.14.14.242
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The backup files contained sensitive information that should not have been accessible.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `smbexec`
- `kerbrute`
- `netcat`
- `lookupsid`
- `GetUserSPNs`
- `hashcat`
- `sharphound`

### Key Takeaways

- SQL Injection
- Writable PATH
- AS-REP Roasting
