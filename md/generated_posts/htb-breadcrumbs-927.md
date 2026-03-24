---
TitleSEO: "VulnHub — Breadcrumbs (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Breadcrumbs (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Breadcrumbs. Path Traversal and Cron Job to achieve medium compromise on OpenBSD."
Keywords: "pwntilldawn, windows, reversing, linux, active directory, easy"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-927.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-927/"
Date: "2024-01-12"
Tags: "PwnTillDawn, Windows, Reversing, Linux, Active Directory, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-927"
Permalink: "/writeups/htb-breadcrumbs-927.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.123.213.41`.

### Objectives

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.41.44.196/FUZZ
```

Initial enumeration revealed several interesting open ports on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.84.168.112
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.62.80.209/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.112.154.120/FUZZ
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

Key finding: **Path Traversal**.

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p143,445,993 10.94.85.105 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p993,21,464 10.22.3.140 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
nmap -sCV -p5985,389,5985 10.22.8.201 -oN scan.txt
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
nmap -sCV -p110,443,21 10.56.34.229 -oN scan.txt
evil-winrm -i 10.107.225.208 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `mimikatz`
- `rpcclient`
- `kerbrute`
- `wmiexec`
- `GetNPUsers`

### Key Takeaways

- Path Traversal
- Cron Job
