---
TitleSEO: "OffSec Proving Grounds — Doctor (Easy Windows) | ZureFX"
TitlePost: "OffSec Proving Grounds — Doctor (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Doctor. Sudo Misconfiguration and AS-REP Roasting to achieve easy compromise on Windows."
Keywords: "tryhackme, pwntilldawn, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-doctor-106.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-106/"
Date: "2024-10-29"
Tags: "TryHackMe, PwnTillDawn, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-106"
Permalink: "/writeups/htb-doctor-106.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Easy** on OffSec Proving Grounds. It runs **Windows** and the IP address during this analysis was `10.118.57.135`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.52.204
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file.

```bash
nmap -sCV -p25,5985,3306 10.19.98.40 -oN scan.txt
feroxbuster -h
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.76.77
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
nmap -sCV -p5985,21,445 10.95.61.234 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The database credentials were hardcoded in the application source code. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **AS-REP Roasting**.

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
feroxbuster -h
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Authentication bypass was achieved through careful manipulation of the login mechanism. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
evil-winrm -i 10.107.50.64 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.119.92.51 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.35.165.232/FUZZ
gobuster dir -u http://10.36.95.219/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Weak file permissions allowed modification of critical system files. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `rpcclient`
- `smbclient`
- `rubeus`
- `gobuster`

### Key Takeaways

- Sudo Misconfiguration
- AS-REP Roasting
