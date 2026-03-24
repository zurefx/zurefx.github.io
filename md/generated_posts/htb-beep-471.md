---
TitleSEO: "VulnHub — Beep (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Beep (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Beep. Golden Ticket and NFS No Root Squash to achieve hard compromise on FreeBSD."
Keywords: "reversing, hackthebox, active directory, web"
URL: "https://zurefx.github.io/writeups/htb-beep-471.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-471/"
Date: "2025-09-23"
Tags: "Reversing, HackTheBox, Active Directory, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-471"
Permalink: "/writeups/htb-beep-471.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Beep** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.49.101.160`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.94.69.236 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.41.204.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.41.185.142 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.114.229 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.49.251.225
```

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **NFS No Root Squash**.

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p8888,139,25 10.84.247.35 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.101.73.168 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
nmap -sCV -p3389,1521,139 10.52.6.254 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `ffuf`
- `nmap`
- `netcat`
- `evil-winrm`
- `nikto`
- `pwncat`

### Key Takeaways

- Golden Ticket
- NFS No Root Squash
- LAPS Abuse
- Open Redirect
