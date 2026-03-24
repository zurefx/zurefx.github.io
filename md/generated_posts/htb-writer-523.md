---
TitleSEO: "HackTheBox — Writer (Hard FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Writer (Hard FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Writer. LXD Privilege Escalation and Remote File Inclusion to achieve hard compromise on FreeBSD."
Keywords: "hackthebox, web, easy"
URL: "https://zurefx.github.io/writeups/htb-writer-523.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-writer-523/"
Date: "2024-11-07"
Tags: "HackTheBox, Web, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-writer-523"
Permalink: "/writeups/htb-writer-523.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Writer** is rated **Hard** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.38.252.205`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.10.177.188/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.81.159.167/FUZZ
crackmapexec smb 10.60.107.253 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.222.100
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.127.111.82 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
evil-winrm -i 10.21.29.102 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Remote File Inclusion**.

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.60.78.81
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.139.254
crackmapexec smb 10.87.11.158 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.43.197.242 -u administrator -p 'P@ssw0rd!'
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.192.155 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
nmap -sCV -p1521,389,53 10.114.181.26 -oN scan.txt
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```powershell
gobuster dir -u http://10.17.11.28/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.92.100.108 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.209.113
gobuster dir -u http://10.73.140.178/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `wpscan`
- `hydra`
- `sharphound`
- `rpcclient`

### Key Takeaways

- LXD Privilege Escalation
- Remote File Inclusion
- XXE
- Sudo Misconfiguration
