---
TitleSEO: "OffSec Proving Grounds — Academy (Easy FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Academy (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Academy. LXD Privilege Escalation and Silver Ticket to achieve easy compromise on FreeBSD."
Keywords: "active directory, medium, insane, easy, offsec"
URL: "https://zurefx.github.io/writeups/htb-academy-692.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-academy-692/"
Date: "2024-12-14"
Tags: "Active Directory, Medium, Insane, Easy, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-academy-692"
Permalink: "/writeups/htb-academy-692.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Academy** is rated **Easy** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.88.31.92`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.29.33.41/FUZZ
evil-winrm -i 10.73.182.220 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.83.111.217/FUZZ
```

The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.91.142.245
crackmapexec smb 10.14.252.5 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.76.55.104 -u administrator -p 'P@ssw0rd!'
```

The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
crackmapexec smb 10.122.179.206 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.51.252.136 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.63.162.12/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target. The target system was identified as running a vulnerable version of the service.

Key finding: **LXD Privilege Escalation**.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
nmap -sCV -p995,636,3268 10.36.220.24 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.27.120.192
gobuster dir -u http://10.37.78.64/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
gobuster dir -u http://10.107.58.186/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.108.251.164 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

The target system was identified as running a vulnerable version of the service. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.176.157
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Group Policy Preferences contained encrypted but recoverable credentials. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `psexec`
- `impacket`
- `feroxbuster`
- `lookupsid`
- `atexec`
- `secretsdump`
- `kerbrute`
- `ligolo-ng`

### Key Takeaways

- LXD Privilege Escalation
- Silver Ticket
