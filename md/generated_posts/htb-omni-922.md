---
TitleSEO: "PwnTillDawn — Omni (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Omni (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Omni. Remote Code Execution and Local File Inclusion to achieve easy compromise on FreeBSD."
Keywords: "hard, hackthebox, active directory"
URL: "https://zurefx.github.io/writeups/htb-omni-922.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-922/"
Date: "2024-10-23"
Tags: "Hard, HackTheBox, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-922"
Permalink: "/writeups/htb-omni-922.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Omni** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.113.194.1`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.79.87.76 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

```bash
nmap -sCV -p5985,995,636 10.15.105.176 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.88.223.215 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.22.12.145 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.242.62
```

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **AS-REP Roasting**.

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
crackmapexec smb 10.11.125.157 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.145.144
nmap -sCV -p139,23,21 10.65.227.144 -oN scan.txt
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.241.92 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.178.143
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `lookupsid`
- `gobuster`
- `chisel`
- `wpscan`

### Key Takeaways

- Remote Code Execution
- Local File Inclusion
- Remote File Inclusion
- AS-REP Roasting
