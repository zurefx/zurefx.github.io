---
TitleSEO: "TryHackMe — Tentacle (Hard Windows) | ZureFX"
TitlePost: "TryHackMe — Tentacle (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Tentacle. CSRF and SeImpersonatePrivilege to achieve hard compromise on Windows."
Keywords: "medium, hard, web, forensics, hackthebox, linux, ctf"
URL: "https://zurefx.github.io/writeups/htb-tentacle-293.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tentacle-293/"
Date: "2024-03-06"
Tags: "Medium, Hard, Web, Forensics, HackTheBox, Linux, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-tentacle-293"
Permalink: "/writeups/htb-tentacle-293.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tentacle** is rated **Hard** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.125.220.140`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.76.201.49 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.78.130 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p25,135,5986 10.61.134.203 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. The service account had excessive permissions assigned in Active Directory.

### Web Enumeration

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.60.80.53 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.19.64.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. The service account had excessive permissions assigned in Active Directory.

Key finding: **SeImpersonatePrivilege**.

The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The target system was identified as running a vulnerable version of the service.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.93.9.122/FUZZ
feroxbuster -h
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.49.80.204 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.237.44
```

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `mimikatz`
- `ldapsearch`
- `rubeus`
- `GetNPUsers`
- `dcomexec`

### Key Takeaways

- CSRF
- SeImpersonatePrivilege
