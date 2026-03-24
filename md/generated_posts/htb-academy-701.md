---
TitleSEO: "HackTheBox — Academy (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Academy (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Academy. Weak Service Permissions and XXE to achieve insane compromise on OpenBSD."
Keywords: "pwntilldawn, web, tryhackme, reversing, linux, forensics, windows"
URL: "https://zurefx.github.io/writeups/htb-academy-701.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-academy-701/"
Date: "2026-01-26"
Tags: "PwnTillDawn, Web, TryHackMe, Reversing, Linux, Forensics, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-academy-701"
Permalink: "/writeups/htb-academy-701.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Academy** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.82.141.103`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.34.5.175/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3306,636,993 10.104.11.206 -oN scan.txt
nmap -sCV -p53,5985,80 10.46.128.158 -oN scan.txt
nmap -sCV -p1433,143,8080 10.94.233.238 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

```bash
evil-winrm -i 10.123.51.82 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.48.47.96/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
feroxbuster -h
```

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities. Initial enumeration revealed several interesting open ports on the target.

Key finding: **XXE**.

Lateral movement was facilitated by reusing discovered credentials across services. The service account had excessive permissions assigned in Active Directory.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.45.252.1/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Lateral movement was facilitated by reusing discovered credentials across services. Weak file permissions allowed modification of critical system files.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.17.149.173
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. Weak file permissions allowed modification of critical system files.

```powershell
feroxbuster -h
gobuster dir -u http://10.126.196.77/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `impacket`
- `smbexec`
- `enum4linux`
- `secretsdump`

### Key Takeaways

- Weak Service Permissions
- XXE
