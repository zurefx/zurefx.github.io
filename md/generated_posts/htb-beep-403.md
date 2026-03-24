---
TitleSEO: "HackTheBox — Beep (Easy FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Beep (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Beep. GPP Password and SUID Binary to achieve easy compromise on FreeBSD."
Keywords: "ctf, offsec, easy, hard, windows, pwntilldawn, active directory"
URL: "https://zurefx.github.io/writeups/htb-beep-403.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-beep-403/"
Date: "2024-12-16"
Tags: "CTF, OffSec, Easy, Hard, Windows, PwnTillDawn, Active Directory"
Section: "writeups"
Lang: "en"
main_img: "htb-beep-403"
Permalink: "/writeups/htb-beep-403.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Beep** is rated **Easy** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.45.71.208`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.111.129.83 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.48.164.9/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.68.148.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.20.86.83 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p636,443,587 10.110.192.22 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

### SMB Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.115.168.36
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

Key finding: **GPP Password**.

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.116.7.209/FUZZ
gobuster dir -u http://10.13.148.45/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
crackmapexec smb 10.19.145.181 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.40.247.190/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
evil-winrm -i 10.66.193.98 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p1521,995,135 10.117.20.226 -oN scan.txt
```

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## Summary

### Tools Used

- `ldapsearch`
- `pwncat`
- `wmiexec`
- `enum4linux`
- `smbclient`
- `psexec`

### Key Takeaways

- GPP Password
- SUID Binary
- Pass the Ticket
