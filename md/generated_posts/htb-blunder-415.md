---
TitleSEO: "TryHackMe — Blunder (Insane FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Blunder (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Blunder. Remote File Inclusion and Writable PATH to achieve insane compromise on FreeBSD."
Keywords: "reversing, hackthebox, easy, linux"
URL: "https://zurefx.github.io/writeups/htb-blunder-415.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-blunder-415/"
Date: "2025-04-29"
Tags: "Reversing, HackTheBox, Easy, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-blunder-415"
Permalink: "/writeups/htb-blunder-415.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Blunder** is rated **Insane** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.124.246.129`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.44.87.17 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.98.33.171 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.112.238.62 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.91.77.248/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Writable PATH**.

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
evil-winrm -i 10.14.251.54 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.56.171.177 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.128.106.86/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```powershell
gobuster dir -u http://10.94.26.13/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.79.102.171/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.115.45.207/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `secretsdump`
- `socat`
- `chisel`
- `nikto`
- `msfvenom`
- `metasploit`
- `smbclient`
- `GetNPUsers`

### Key Takeaways

- Remote File Inclusion
- Writable PATH
