---
TitleSEO: "TryHackMe — Tentacle (Insane OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Tentacle (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tentacle. Constrained Delegation and Silver Ticket to achieve insane compromise on OpenBSD."
Keywords: "insane, ctf, offsec"
URL: "https://zurefx.github.io/writeups/htb-tentacle-855.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tentacle-855/"
Date: "2025-07-01"
Tags: "Insane, CTF, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-tentacle-855"
Permalink: "/writeups/htb-tentacle-855.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tentacle** is rated **Insane** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.87.233.252`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.48.172.223 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.74.85.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Silver Ticket**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.206.229/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.124.72.248 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.123.6
nmap -sCV -p389,995,9200 10.31.27.196 -oN scan.txt
crackmapexec smb 10.43.178.61 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p110,21,9200 10.105.91.139 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.114.233.46 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.85.13.62 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `wmiexec`
- `crackmapexec`
- `msfvenom`
- `impacket`

### Key Takeaways

- Constrained Delegation
- Silver Ticket
- IDOR
- CSRF
