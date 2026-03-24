---
TitleSEO: "TryHackMe — Deja Vu (Hard FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Deja Vu (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Deja Vu. Constrained Delegation and Local File Inclusion to achieve hard compromise on FreeBSD."
Keywords: "windows, reversing, tryhackme, hackthebox, active directory, hard, insane"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-829.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-829/"
Date: "2024-03-15"
Tags: "Windows, Reversing, TryHackMe, HackTheBox, Active Directory, Hard, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-829"
Permalink: "/writeups/htb-deja-vu-829.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Hard** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.24.136.164`.

### Objectives

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.74.120/FUZZ
```

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
evil-winrm -i 10.46.252.248 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.44.231.9/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.96.114.170 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.65.1.174 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.48.249.177 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.61.131.104
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.25.49.232/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality.

Key finding: **DNS Rebinding**.

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.54.113.246 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.113.46.139/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.56.89.56 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
evil-winrm -i 10.107.91.171 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.70.161.128 -u administrator -p 'P@ssw0rd!'
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
nmap -sCV -p445,25,443 10.124.9.129 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.85.124.132 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.20.136.134/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `rubeus`
- `pwncat`
- `impacket`
- `kerbrute`
- `crackmapexec`
- `sqlmap`
- `smbclient`
- `psexec`

### Key Takeaways

- Constrained Delegation
- Local File Inclusion
- DNS Rebinding
