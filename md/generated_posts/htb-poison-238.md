---
TitleSEO: "TryHackMe — Poison (Easy FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Poison (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Poison. AS-REP Roasting and Kerberoasting to achieve easy compromise on FreeBSD."
Keywords: "windows, ctf, pwntilldawn, easy, insane, web, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-poison-238.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-poison-238/"
Date: "2025-01-27"
Tags: "Windows, CTF, PwnTillDawn, Easy, Insane, Web, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-poison-238"
Permalink: "/writeups/htb-poison-238.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Poison** is rated **Easy** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.95.161.49`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p993,993,139 10.72.75.240 -oN scan.txt
```

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.86.8.192
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.111.97.89/FUZZ
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Web Enumeration

Weak file permissions allowed modification of critical system files. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p5432,8443,587 10.70.95.113 -oN scan.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **Kerberoasting**.

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.72.35
evil-winrm -i 10.91.252.12 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.72.26.158 -u administrator -p 'P@ssw0rd!' --shares
```

### Exploitation

The database credentials were hardcoded in the application source code. Weak file permissions allowed modification of critical system files.

```powershell
gobuster dir -u http://10.28.79.153/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.47.132.123/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.91.120.185/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p9200,5985,110 10.104.162.89 -oN scan.txt
```

Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Summary

### Tools Used

- `rpcclient`
- `hashcat`
- `nikto`
- `enum4linux`
- `wmiexec`
- `hydra`
- `ffuf`
- `atexec`

### Key Takeaways

- AS-REP Roasting
- Kerberoasting
- AlwaysInstallElevated
