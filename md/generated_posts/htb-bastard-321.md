---
TitleSEO: "HackTheBox — Bastard (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Bastard (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Bastard. Path Traversal and SUID Binary to achieve insane compromise on Windows."
Keywords: "hard, pwntilldawn, ctf"
URL: "https://zurefx.github.io/writeups/htb-bastard-321.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bastard-321/"
Date: "2025-11-14"
Tags: "Hard, PwnTillDawn, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-bastard-321"
Permalink: "/writeups/htb-bastard-321.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bastard** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.125.23.110`.

### Objectives

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.42.152.184/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.89.81.172 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.116.176.113
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.118.44.41 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Remote File Inclusion**.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.75.243.193/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.107.119.137 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p22,9200,143 10.48.35.80 -oN scan.txt
evil-winrm -i 10.58.228.40 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.59.131.191 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
evil-winrm -i 10.64.127.58 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `evil-winrm`
- `wmiexec`
- `sharphound`
- `pwncat`
- `mimikatz`
- `gobuster`
- `ffuf`

### Key Takeaways

- Path Traversal
- SUID Binary
- Command Injection
- Remote File Inclusion
