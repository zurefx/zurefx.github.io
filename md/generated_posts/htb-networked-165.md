---
TitleSEO: "HackTheBox — Networked (Insane Windows) | ZureFX"
TitlePost: "HackTheBox — Networked (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Networked. Docker Escape and IDOR to achieve insane compromise on Windows."
Keywords: "reversing, pwntilldawn, linux, active directory"
URL: "https://zurefx.github.io/writeups/htb-networked-165.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-networked-165/"
Date: "2025-09-16"
Tags: "Reversing, PwnTillDawn, Linux, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-networked-165"
Permalink: "/writeups/htb-networked-165.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Networked** is rated **Insane** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.77.130.187`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p21,993,5985 10.57.46.80 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p23,445,1521 10.93.194.223 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.31.224.80 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **IDOR**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.84.230.202 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.18.23.9 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.216.32/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.219.106
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.93.239 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `feroxbuster`
- `rubeus`
- `GetUserSPNs`
- `msfvenom`
- `kerbrute`
- `hydra`
- `burpsuite`
- `pwncat`

### Key Takeaways

- Docker Escape
- IDOR
- SSRF
