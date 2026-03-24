---
TitleSEO: "VulnHub — Tabby (Medium OpenBSD) | ZureFX"
TitlePost: "VulnHub — Tabby (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Tabby. NFS No Root Squash and CORS Misconfiguration to achieve medium compromise on OpenBSD."
Keywords: "easy, hackthebox, hard, forensics, ctf"
URL: "https://zurefx.github.io/writeups/htb-tabby-555.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tabby-555/"
Date: "2024-04-12"
Tags: "Easy, HackTheBox, Hard, Forensics, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-tabby-555"
Permalink: "/writeups/htb-tabby-555.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tabby** is rated **Medium** on VulnHub. It runs **OpenBSD** and the IP address during this analysis was `10.47.25.89`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.37.222.141/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.46.86.76 -u administrator -p 'P@ssw0rd!'
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.41.177.207
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
crackmapexec smb 10.31.122.111 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.34.137.12 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

Key finding: **Resource-Based Constrained Delegation**.

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Initial Access

Network traffic analysis revealed unencrypted communications containing user credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p23,1521,993 10.12.171.227 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.142.175/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The service was running without proper input validation, leading to injection vulnerabilities. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.113.59 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.220.96 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
gobuster dir -u http://10.110.158.10/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

## Summary

### Tools Used

- `pwncat`
- `enum4linux`
- `feroxbuster`
- `gobuster`
- `evil-winrm`
- `john`
- `nmap`
- `wmiexec`

### Key Takeaways

- NFS No Root Squash
- CORS Misconfiguration
- Resource-Based Constrained Delegation
