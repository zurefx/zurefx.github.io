---
TitleSEO: "VulnHub — Skynet (Hard Linux) | ZureFX"
TitlePost: "VulnHub — Skynet (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Skynet. Command Injection and Resource-Based Constrained Delegation to achieve hard compromise on Linux."
Keywords: "windows, hackthebox, easy, hard"
URL: "https://zurefx.github.io/writeups/htb-skynet-127.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-skynet-127/"
Date: "2024-07-22"
Tags: "Windows, HackTheBox, Easy, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-skynet-127"
Permalink: "/writeups/htb-skynet-127.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Skynet** is rated **Hard** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.68.7.96`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.115.105.133 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.25.158.136 -u administrator -p 'P@ssw0rd!' --shares
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.58.134.98 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.31.42 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```bash
nmap -sCV -p445,995,21 10.72.146.181 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Resource-Based Constrained Delegation**.

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.16.3.18 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
crackmapexec smb 10.84.159.112 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `chisel`
- `secretsdump`
- `socat`
- `sqlmap`
- `john`
- `gobuster`
- `sharphound`

### Key Takeaways

- Command Injection
- Resource-Based Constrained Delegation
