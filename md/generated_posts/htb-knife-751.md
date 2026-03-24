---
TitleSEO: "TryHackMe — Knife (Hard Windows) | ZureFX"
TitlePost: "TryHackMe — Knife (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Knife. Open Redirect and Broken Access Control to achieve hard compromise on Windows."
Keywords: "ctf, forensics, web"
URL: "https://zurefx.github.io/writeups/htb-knife-751.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-knife-751/"
Date: "2024-07-04"
Tags: "CTF, Forensics, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-knife-751"
Permalink: "/writeups/htb-knife-751.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Knife** is rated **Hard** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.43.20.48`.

### Objectives

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.115.243.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.46.14.132/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.52.69.206 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.129.32.237 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p443,3389,5985 10.97.237.202 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.94.24
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Open Redirect**.

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
gobuster dir -u http://10.65.106.69/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.118.27.158 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.92.102
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.34.249.156 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.15.173.243 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `ldapsearch`
- `kerbrute`
- `smbexec`
- `netcat`
- `mimikatz`
- `psexec`
- `rpcclient`

### Key Takeaways

- Open Redirect
- Broken Access Control
- SeImpersonatePrivilege
- Kerberoasting
