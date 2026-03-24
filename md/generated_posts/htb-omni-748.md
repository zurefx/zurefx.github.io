---
TitleSEO: "PwnTillDawn — Omni (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Omni (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Omni. Local File Inclusion and NTLM Relay to achieve easy compromise on Windows."
Keywords: "reversing, hard, offsec, active directory, windows"
URL: "https://zurefx.github.io/writeups/htb-omni-748.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-748/"
Date: "2025-10-30"
Tags: "Reversing, Hard, OffSec, Active Directory, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-748"
Permalink: "/writeups/htb-omni-748.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Omni** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.43.69.71`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.40.76.223 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```bash
feroxbuster -h
nmap -sCV -p53,23,25 10.103.87.236 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.117.100.74 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Local File Inclusion**.

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p995,995,22 10.98.118.241 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. The database credentials were hardcoded in the application source code.

```powershell
evil-winrm -i 10.18.205.162 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.106.206
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.77.69
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `rubeus`
- `kerbrute`
- `enum4linux`
- `smbexec`

### Key Takeaways

- Local File Inclusion
- NTLM Relay
- Insecure Deserialization
