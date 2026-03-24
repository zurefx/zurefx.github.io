---
TitleSEO: "VulnHub — Spectra (Easy Windows) | ZureFX"
TitlePost: "VulnHub — Spectra (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Spectra. Remote Code Execution and GPP Password to achieve easy compromise on Windows."
Keywords: "active directory, forensics, tryhackme, web"
URL: "https://zurefx.github.io/writeups/htb-spectra-803.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-803/"
Date: "2025-04-24"
Tags: "Active Directory, Forensics, TryHackMe, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-803"
Permalink: "/writeups/htb-spectra-803.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Easy** on VulnHub. It runs **Windows** and the IP address during this analysis was `10.30.145.45`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.81.116.130 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.36.154.138
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.235.244
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code.

### Web Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.101.138.13 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.101.173.13 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.14.32.91 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The service account had excessive permissions assigned in Active Directory. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Remote Code Execution**.

Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
crackmapexec smb 10.44.250.105 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.109.116.229 -u administrator -p 'P@ssw0rd!'
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
crackmapexec smb 10.100.54.73 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.171.2/FUZZ
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `rubeus`
- `dcomexec`
- `GetUserSPNs`
- `mimikatz`

### Key Takeaways

- Remote Code Execution
- GPP Password
