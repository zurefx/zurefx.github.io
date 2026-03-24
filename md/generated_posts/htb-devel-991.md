---
TitleSEO: "HackTheBox — Devel (Easy FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Devel (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Devel. Path Traversal and SeDebugPrivilege to achieve easy compromise on FreeBSD."
Keywords: "insane, offsec, tryhackme, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-devel-991.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-devel-991/"
Date: "2024-06-10"
Tags: "Insane, OffSec, TryHackMe, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-devel-991"
Permalink: "/writeups/htb-devel-991.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Devel** is rated **Easy** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.59.64.79`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.23.56.250/FUZZ
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
evil-winrm -i 10.36.89.63 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.21.201.194 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.157.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

Key finding: **Remote Code Execution**.

Network traffic analysis revealed unencrypted communications containing user credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

```bash
crackmapexec smb 10.50.51.106 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.247.217
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.10.216.95
nmap -sCV -p53,21,110 10.10.251.210 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `smbclient`
- `ldapsearch`
- `impacket`
- `lookupsid`
- `secretsdump`

### Key Takeaways

- Path Traversal
- SeDebugPrivilege
- Remote Code Execution
