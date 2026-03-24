---
TitleSEO: "HackTheBox — Armageddon (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Armageddon (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Armageddon. AlwaysInstallElevated and Writable PATH to achieve insane compromise on OpenBSD."
Keywords: "hard, medium, easy, pwntilldawn, active directory, ctf"
URL: "https://zurefx.github.io/writeups/htb-armageddon-798.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-armageddon-798/"
Date: "2024-03-30"
Tags: "Hard, Medium, Easy, PwnTillDawn, Active Directory, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-armageddon-798"
Permalink: "/writeups/htb-armageddon-798.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Armageddon** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.89.101.92`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.62.104.60 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
feroxbuster -h
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.64.152 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.116.238.87 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.50.208.41 -u administrator -p 'P@ssw0rd!' --shares
```

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **DLL Hijacking**.

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.218.23
nmap -sCV -p995,3389,5986 10.78.63.203 -oN scan.txt
evil-winrm -i 10.27.56.7 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.38.97.136
crackmapexec smb 10.44.187.166 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
evil-winrm -i 10.85.84.170 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `lookupsid`
- `feroxbuster`
- `burpsuite`
- `ffuf`

### Key Takeaways

- AlwaysInstallElevated
- Writable PATH
- DLL Hijacking
- Golden Ticket
