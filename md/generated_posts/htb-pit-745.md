---
TitleSEO: "HackTheBox — Pit (Hard Linux) | ZureFX"
TitlePost: "HackTheBox — Pit (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Pit. Remote File Inclusion and Cron Job to achieve hard compromise on Linux."
Keywords: "ctf, tryhackme, pwntilldawn, web"
URL: "https://zurefx.github.io/writeups/htb-pit-745.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-745/"
Date: "2025-09-14"
Tags: "CTF, TryHackMe, PwnTillDawn, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-745"
Permalink: "/writeups/htb-pit-745.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Pit** is rated **Hard** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.99.85.185`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p8443,8080,27017 10.124.95.5 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

### Service Enumeration

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
nmap -sCV -p5985,993,139 10.101.112.80 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. The backup files contained sensitive information that should not have been accessible.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3306,5986,1521 10.91.240.130 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code.

Key finding: **Remote File Inclusion**.

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The service account had excessive permissions assigned in Active Directory.

```bash
gobuster dir -u http://10.47.125.39/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
nmap -sCV -p21,27017,135 10.129.133.61 -oN scan.txt
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
crackmapexec smb 10.75.166.163 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `secretsdump`
- `sqlmap`
- `smbexec`
- `GetNPUsers`
- `rpcclient`

### Key Takeaways

- Remote File Inclusion
- Cron Job
