---
TitleSEO: "VulnHub — Ophiuchi (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Ophiuchi (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Ophiuchi. Local File Inclusion and Insecure Deserialization to achieve medium compromise on OpenBSD."
Keywords: "linux, windows, medium, hackthebox, ctf, reversing"
URL: "https://zurefx.github.io/writeups/htb-ophiuchi-879.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ophiuchi-879/"
Date: "2026-02-18"
Tags: "Linux, Windows, Medium, HackTheBox, CTF, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-ophiuchi-879"
Permalink: "/writeups/htb-ophiuchi-879.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ophiuchi** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.106.54.242`.

### Objectives

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.80.41.247 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.108.66.211 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.101.148.164 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.21.145.15
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.163.114 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **XXE**.

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.94.218.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.28.127.236 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.95.206.136
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.87.111.84 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.100.14.95 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.36.72.118/FUZZ
```

The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `ligolo-ng`
- `sharphound`
- `chisel`
- `nmap`
- `sqlmap`
- `nikto`

### Key Takeaways

- Local File Inclusion
- Insecure Deserialization
- XXE
