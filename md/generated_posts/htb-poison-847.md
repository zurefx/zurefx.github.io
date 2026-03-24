---
TitleSEO: "PwnTillDawn — Poison (Insane OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Poison (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Poison. Cron Job and Unconstrained Delegation to achieve insane compromise on OpenBSD."
Keywords: "tryhackme, forensics, pwntilldawn, reversing, linux, hard"
URL: "https://zurefx.github.io/writeups/htb-poison-847.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-poison-847/"
Date: "2025-08-21"
Tags: "TryHackMe, Forensics, PwnTillDawn, Reversing, Linux, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-poison-847"
Permalink: "/writeups/htb-poison-847.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Poison** is rated **Insane** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.52.91.157`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p110,22,53 10.91.243.73 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.222.121 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.25.99.26/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.126.249.5 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.53.227.98 -u administrator -p 'P@ssw0rd!' --shares
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.10.10.15 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.62.157.218 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.85.250 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **Pass the Hash**.

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.105.41.152 -u administrator -p 'P@ssw0rd!'
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```powershell
nmap -sCV -p587,464,80 10.85.189.42 -oN scan.txt
nmap -sCV -p445,110,8443 10.117.10.42 -oN scan.txt
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
evil-winrm -i 10.21.189.242 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.45.79.104
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.53.227.225 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `lookupsid`
- `burpsuite`
- `secretsdump`
- `psexec`
- `ffuf`
- `evil-winrm`

### Key Takeaways

- Cron Job
- Unconstrained Delegation
- Pass the Hash
- LAPS Abuse
