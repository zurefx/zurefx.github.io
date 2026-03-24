---
TitleSEO: "TryHackMe — Convertmyfund (Easy Windows) | ZureFX"
TitlePost: "TryHackMe — Convertmyfund (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Convertmyfund. Weak Service Permissions and CORS Misconfiguration to achieve easy compromise on Windows."
Keywords: "linux, forensics, easy, tryhackme, medium, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-convertmyfund-867.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-convertmyfund-867/"
Date: "2026-01-14"
Tags: "Linux, Forensics, Easy, TryHackMe, Medium, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-convertmyfund-867"
Permalink: "/writeups/htb-convertmyfund-867.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Convertmyfund** is rated **Easy** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.54.240.83`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.30.184.42/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.111.201 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

### Service Enumeration

The target system was identified as running a vulnerable version of the service. Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

```bash
nmap -sCV -p445,135,21 10.44.248.87 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.121.82.39
```

Group Policy Preferences contained encrypted but recoverable credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Command injection was possible through unsanitized user input in the search functionality. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Remote File Inclusion**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.120.41.175
evil-winrm -i 10.96.209.130 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service. Initial enumeration revealed several interesting open ports on the target.

```powershell
feroxbuster -h
nmap -sCV -p1521,135,21 10.105.101.92 -oN scan.txt
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
crackmapexec smb 10.124.238.39 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.192.176/FUZZ
nmap -sCV -p587,23,143 10.27.64.44 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `nikto`
- `feroxbuster`
- `ligolo-ng`
- `kerbrute`

### Key Takeaways

- Weak Service Permissions
- CORS Misconfiguration
- SeImpersonatePrivilege
- Remote File Inclusion
