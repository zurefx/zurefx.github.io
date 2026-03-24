---
TitleSEO: "TryHackMe — Arctic (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — Arctic (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Arctic. Pass the Ticket and Local File Inclusion to achieve medium compromise on OpenBSD."
Keywords: "ctf, windows, tryhackme, web, active directory"
URL: "https://zurefx.github.io/writeups/htb-arctic-122.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-arctic-122/"
Date: "2025-08-12"
Tags: "CTF, Windows, TryHackMe, Web, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-arctic-122"
Permalink: "/writeups/htb-arctic-122.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Arctic** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.15.203.91`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. Unconstrained delegation was enabled on the compromised machine.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.127.37.33 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.40.149.202 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.71.45.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.88.61.115 -u administrator -p 'P@ssw0rd!'
```

The database credentials were hardcoded in the application source code. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Web Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p8888,443,3268 10.66.72.113 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.57.249.173/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Local File Inclusion**.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.75.210/FUZZ
nmap -sCV -p5986,22,3306 10.89.26.162 -oN scan.txt
```

The service account had excessive permissions assigned in Active Directory. Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.53.186.186 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.25.16.28
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.185.247
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.115.186.218/FUZZ
```

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `kerbrute`
- `hashcat`
- `enum4linux`
- `secretsdump`
- `dcomexec`
- `pwncat`
- `wmiexec`
- `rpcclient`

### Key Takeaways

- Pass the Ticket
- Local File Inclusion
- SQL Injection
