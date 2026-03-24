---
TitleSEO: "OffSec Proving Grounds — Seal (Insane Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Seal (Insane Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Seal. SeDebugPrivilege and SeImpersonatePrivilege to achieve insane compromise on Windows."
Keywords: "tryhackme, forensics, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-seal-617.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-seal-617/"
Date: "2024-01-05"
Tags: "TryHackMe, Forensics, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-seal-617"
Permalink: "/writeups/htb-seal-617.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Seal** is rated **Insane** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.68.2.21`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.10.58.115 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.72.195.83 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.171.247/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.58.182.56/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.45.144.253/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.58.207.186
nmap -sCV -p1521,5432,53 10.115.4.207 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Remote Code Execution**.

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.119.223.134 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The database credentials were hardcoded in the application source code. The service account had excessive permissions assigned in Active Directory.

```powershell
feroxbuster -h
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.117.160.204/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.208.174/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `smbclient`
- `ffuf`
- `wmiexec`
- `john`
- `rpcclient`
- `chisel`

### Key Takeaways

- SeDebugPrivilege
- SeImpersonatePrivilege
- SUID Binary
- Remote Code Execution
