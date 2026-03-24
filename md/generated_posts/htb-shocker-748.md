---
TitleSEO: "VulnHub — Shocker (Hard FreeBSD) | ZureFX"
TitlePost: "VulnHub — Shocker (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Shocker. Subdomain Takeover and SSRF to achieve hard compromise on FreeBSD."
Keywords: "ctf, hackthebox, pwntilldawn, hard, active directory"
URL: "https://zurefx.github.io/writeups/htb-shocker-748.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-shocker-748/"
Date: "2025-05-22"
Tags: "CTF, HackTheBox, PwnTillDawn, Hard, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-shocker-748"
Permalink: "/writeups/htb-shocker-748.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Shocker** is rated **Hard** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.24.211.29`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.78.33.193 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.94.221.130/FUZZ
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.107.59.101/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.50.30.93/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The target system was identified as running a vulnerable version of the service.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

Key finding: **SSRF**.

Group Policy Preferences contained encrypted but recoverable credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality. The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
crackmapexec smb 10.117.132.244 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.56.220.70 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.77.251.129
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Weak file permissions allowed modification of critical system files.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
crackmapexec smb 10.12.57.192 -u administrator -p 'P@ssw0rd!' --shares
```

The scheduled task ran with elevated privileges and could be abused for escalation. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `sharphound`
- `kerbrute`
- `burpsuite`
- `smbexec`
- `GetUserSPNs`
- `lookupsid`
- `gobuster`

### Key Takeaways

- Subdomain Takeover
- SSRF
- XXE
- Insecure Deserialization
