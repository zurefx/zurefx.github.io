---
TitleSEO: "HackTheBox — Ready (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Ready (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Ready. Cron Job and Weak Service Permissions to achieve insane compromise on FreeBSD."
Keywords: "windows, insane, linux, active directory, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-ready-458.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-ready-458/"
Date: "2024-01-24"
Tags: "Windows, Insane, Linux, Active Directory, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-ready-458"
Permalink: "/writeups/htb-ready-458.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Ready** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.102.97.61`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.6.203/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.76.182.47/FUZZ
evil-winrm -i 10.89.186.73 -u administrator -p 'P@ssw0rd!'
```

Weak file permissions allowed modification of critical system files. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.71.5.59/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
nmap -sCV -p3306,1521,53 10.76.91.8 -oN scan.txt
crackmapexec smb 10.65.41.208 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.18.94.194 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p993,80,27017 10.58.119.114 -oN scan.txt
```

The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **CSRF**.

The database credentials were hardcoded in the application source code. The backup files contained sensitive information that should not have been accessible.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.25.200
gobuster dir -u http://10.97.64.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.154.185/FUZZ
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.74.95.201
feroxbuster -h
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
nmap -sCV -p5985,23,389 10.26.141.233 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.95.27.231 -u administrator -p 'P@ssw0rd!'
```

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `impacket`
- `john`
- `hashcat`
- `nikto`
- `wmiexec`
- `netcat`
- `smbexec`

### Key Takeaways

- Cron Job
- Weak Service Permissions
- CSRF
- XSS
