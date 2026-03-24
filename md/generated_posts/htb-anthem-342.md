---
TitleSEO: "HackTheBox — Anthem (Medium FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Anthem (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Anthem. AS-REP Roasting and Command Injection to achieve medium compromise on FreeBSD."
Keywords: "easy, linux, medium, hard"
URL: "https://zurefx.github.io/writeups/htb-anthem-342.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-anthem-342/"
Date: "2025-04-20"
Tags: "Easy, Linux, Medium, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-anthem-342"
Permalink: "/writeups/htb-anthem-342.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Anthem** is rated **Medium** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.107.130.227`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
evil-winrm -i 10.86.15.96 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.31.6.189/FUZZ
```

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p139,27017,3389 10.100.158.176 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.139.90
evil-winrm -i 10.113.101.253 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p53,1521,8888 10.66.92.159 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.11.109.228 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **SeDebugPrivilege**.

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.139.3/FUZZ
```

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
evil-winrm -i 10.36.80.88 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
crackmapexec smb 10.107.226.8 -u administrator -p 'P@ssw0rd!' --shares
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `enum4linux`
- `crackmapexec`
- `sharphound`
- `smbclient`
- `wpscan`
- `bloodhound`
- `psexec`

### Key Takeaways

- AS-REP Roasting
- Command Injection
- SeDebugPrivilege
