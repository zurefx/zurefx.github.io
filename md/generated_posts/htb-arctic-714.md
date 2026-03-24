---
TitleSEO: "OffSec Proving Grounds — Arctic (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Arctic (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Arctic. Command Injection and Local File Inclusion to achieve easy compromise on OpenBSD."
Keywords: "insane, offsec, active directory"
URL: "https://zurefx.github.io/writeups/htb-arctic-714.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-714/"
Date: "2026-02-23"
Tags: "Insane, OffSec, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-714"
Permalink: "/writeups/htb-arctic-714.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Arctic** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.46.208.61`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
evil-winrm -i 10.111.97.67 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.83.79.246
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.127.22.194 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **SeImpersonatePrivilege**.

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```bash
nmap -sCV -p636,110,3268 10.92.168.61 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.50.120
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
nmap -sCV -p23,587,636 10.72.235.26 -oN scan.txt
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `rubeus`
- `smbexec`
- `GetUserSPNs`
- `dcomexec`

### Key Takeaways

- Command Injection
- Local File Inclusion
- SeImpersonatePrivilege
