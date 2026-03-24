---
TitleSEO: "TryHackMe — Cronos (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Cronos (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Cronos. NTLM Relay and Command Injection to achieve insane compromise on OpenBSD."
Keywords: "linux, hackthebox, active directory"
URL: "https://zurefx.github.io/writeups/htb-cronos-616.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-cronos-616/"
Date: "2024-05-07"
Tags: "Linux, HackTheBox, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-cronos-616"
Permalink: "/writeups/htb-cronos-616.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Cronos** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.31.83.154`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.90.221.89
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.75.141.70
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.64.24 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

Key finding: **Command Injection**.

Privilege escalation was possible due to misconfigured sudo permissions. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.41.125.96 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.72.132.118
evil-winrm -i 10.59.122.108 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.43.105.247 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `john`
- `feroxbuster`
- `rubeus`
- `evil-winrm`
- `crackmapexec`

### Key Takeaways

- NTLM Relay
- Command Injection
