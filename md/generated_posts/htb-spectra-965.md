---
TitleSEO: "VulnHub — Spectra (Easy FreeBSD) | ZureFX"
TitlePost: "VulnHub — Spectra (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Spectra. Unquoted Service Path and Broken Access Control to achieve easy compromise on FreeBSD."
Keywords: "pwntilldawn, active directory, hard, forensics"
URL: "https://zurefx.github.io/writeups/htb-spectra-965.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-965/"
Date: "2025-11-08"
Tags: "PwnTillDawn, Active Directory, Hard, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-965"
Permalink: "/writeups/htb-spectra-965.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Easy** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.113.22.190`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.83.154.152 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.144.92/FUZZ
gobuster dir -u http://10.124.68.65/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.61.35.224/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Unquoted Service Path**.

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.30.25.18 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.15.43 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p443,5985,995 10.50.103.250 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.221.134/FUZZ
nmap -sCV -p9200,8443,5432 10.110.5.98 -oN scan.txt
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
gobuster dir -u http://10.121.96.180/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.93.29.136
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `rpcclient`
- `wpscan`
- `atexec`
- `nikto`
- `impacket`

### Key Takeaways

- Unquoted Service Path
- Broken Access Control
