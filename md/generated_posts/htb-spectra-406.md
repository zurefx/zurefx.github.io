---
TitleSEO: "PwnTillDawn — Spectra (Hard Linux) | ZureFX"
TitlePost: "PwnTillDawn — Spectra (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Spectra. Broken Access Control and SQL Injection to achieve hard compromise on Linux."
Keywords: "hackthebox, active directory, tryhackme, forensics"
URL: "https://zurefx.github.io/writeups/htb-spectra-406.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-406/"
Date: "2024-09-21"
Tags: "HackTheBox, Active Directory, TryHackMe, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-406"
Permalink: "/writeups/htb-spectra-406.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Hard** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.83.62.83`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.105.22.156
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.42.219.81/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.123.249.102 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p8080,587,8080 10.69.102.17 -oN scan.txt
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.165.76
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Broken Access Control**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### Initial Access

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine.

```bash
crackmapexec smb 10.71.42.34 -u administrator -p 'P@ssw0rd!' --shares
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.35.240.62 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

```bash
evil-winrm -i 10.90.98.45 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.89.93.13/FUZZ
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `bloodhound`
- `dcomexec`
- `GetUserSPNs`
- `feroxbuster`

### Key Takeaways

- Broken Access Control
- SQL Injection
