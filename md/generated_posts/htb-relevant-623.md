---
TitleSEO: "OffSec Proving Grounds — Relevant (Insane OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Relevant (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Relevant. Cron Job and AS-REP Roasting to achieve insane compromise on OpenBSD."
Keywords: "insane, tryhackme, easy"
URL: "https://zurefx.github.io/writeups/htb-relevant-623.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-relevant-623/"
Date: "2024-05-14"
Tags: "Insane, TryHackMe, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-relevant-623"
Permalink: "/writeups/htb-relevant-623.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Relevant** is rated **Insane** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.64.158.143`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.225.109/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.113.139
```

Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p110,3268,8888 10.71.12.243 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.252.231/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.119.118.144 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **AS-REP Roasting**.

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

### Initial Access

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
nmap -sCV -p5432,22,1521 10.106.153.20 -oN scan.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
crackmapexec smb 10.46.87.192 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.43.134.68 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Summary

### Tools Used

- `GetNPUsers`
- `sharphound`
- `atexec`
- `chisel`
- `nikto`
- `mimikatz`
- `sqlmap`
- `wpscan`

### Key Takeaways

- Cron Job
- AS-REP Roasting
