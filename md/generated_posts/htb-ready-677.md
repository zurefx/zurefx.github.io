---
TitleSEO: "VulnHub — Ready (Insane OpenBSD) | ZureFX"
TitlePost: "VulnHub — Ready (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Ready. Kerberoasting and DCSync to achieve insane compromise on OpenBSD."
Keywords: "windows, active directory, hard, tryhackme, web, ctf, offsec"
URL: "https://zurefx.github.io/writeups/htb-ready-677.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-677/"
Date: "2024-02-26"
Tags: "Windows, Active Directory, Hard, TryHackMe, Web, CTF, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-677"
Permalink: "/writeups/htb-ready-677.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Ready** is rated **Insane** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.29.188.135`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
nmap -sCV -p5985,139,1521 10.12.232.209 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.100.106.48 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.121.5.53/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

Key finding: **Kerberoasting**.

The kernel version was outdated and vulnerable to a publicly known exploit. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The target system was identified as running a vulnerable version of the service. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.79.126.148
```

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.235.222
evil-winrm -i 10.91.200.252 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.111.9.119 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `hydra`
- `chisel`
- `crackmapexec`
- `metasploit`
- `msfvenom`
- `pwncat`

### Key Takeaways

- Kerberoasting
- DCSync
- Unconstrained Delegation
