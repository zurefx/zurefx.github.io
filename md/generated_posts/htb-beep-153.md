---
TitleSEO: "HackTheBox — Beep (Hard Windows) | ZureFX"
TitlePost: "HackTheBox — Beep (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Beep. DNS Rebinding and SQL Injection to achieve hard compromise on Windows."
Keywords: "active directory, offsec, tryhackme, ctf, hackthebox, hard"
URL: "https://zurefx.github.io/writeups/htb-beep-153.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-153/"
Date: "2024-09-28"
Tags: "Active Directory, OffSec, TryHackMe, CTF, HackTheBox, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-153"
Permalink: "/writeups/htb-beep-153.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Beep** is rated **Hard** on HackTheBox. It runs **Windows** and the IP address during this analysis was `10.129.251.7`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.79.48.253 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.92.189.43
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
gobuster dir -u http://10.86.232.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.67.131.52/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.34.225.251
impacket-secretsdump administrator:'P@ssw0rd!'@10.100.172.59
```

Privilege escalation was possible due to misconfigured sudo permissions. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **DNS Rebinding**.

The target system was identified as running a vulnerable version of the service. The target system was identified as running a vulnerable version of the service.

### Initial Access

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
feroxbuster -h
crackmapexec smb 10.43.137.71 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p21,445,8888 10.106.151.184 -oN scan.txt
crackmapexec smb 10.16.185.228 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p110,464,5985 10.57.68.231 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.45.94.61/FUZZ
```

### Exploitation

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3306,53,8888 10.112.127.124 -oN scan.txt
gobuster dir -u http://10.41.173.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `hydra`
- `mimikatz`
- `wpscan`
- `kerbrute`
- `metasploit`
- `bloodhound`
- `ligolo-ng`

### Key Takeaways

- DNS Rebinding
- SQL Injection
- Cron Job
