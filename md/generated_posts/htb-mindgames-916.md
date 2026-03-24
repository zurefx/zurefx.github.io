---
TitleSEO: "VulnHub — Mindgames (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Mindgames (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Mindgames. Golden Ticket and IDOR to achieve medium compromise on Windows."
Keywords: "tryhackme, windows, offsec, linux, ctf, reversing, medium"
URL: "https://zurefx.github.io/writeups/htb-mindgames-916.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-916/"
Date: "2026-02-16"
Tags: "TryHackMe, Windows, OffSec, Linux, CTF, Reversing, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-916"
Permalink: "/writeups/htb-mindgames-916.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mindgames** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.117.211.28`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.109.116 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.19.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p27017,80,9200 10.121.203.133 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.221.37
```

The service was running without proper input validation, leading to injection vulnerabilities. Network traffic analysis revealed unencrypted communications containing user credentials.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.126.223.251
```

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Golden Ticket**.

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.62.144.121 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.122.241.9/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.69.209
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.179.148/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `psexec`
- `enum4linux`
- `impacket`
- `socat`
- `sqlmap`
- `GetNPUsers`

### Key Takeaways

- Golden Ticket
- IDOR
- XSS
- Weak Service Permissions
