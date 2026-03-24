---
TitleSEO: "PwnTillDawn — Alfred (Hard Windows) | ZureFX"
TitlePost: "PwnTillDawn — Alfred (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Alfred. Broken Access Control and Pass the Hash to achieve hard compromise on Windows."
Keywords: "web, tryhackme, pwntilldawn, easy, reversing"
URL: "https://zurefx.github.io/writeups/htb-alfred-941.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-941/"
Date: "2025-01-25"
Tags: "Web, TryHackMe, PwnTillDawn, Easy, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-941"
Permalink: "/writeups/htb-alfred-941.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Hard** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.19.200.208`.

### Objectives

The application stored sensitive credentials in an unencrypted configuration file. Privilege escalation was possible due to misconfigured sudo permissions.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p5985,1521,5986 10.77.177.129 -oN scan.txt
evil-winrm -i 10.47.92.48 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.46.164.6 -u administrator -p 'P@ssw0rd!' --shares
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible.

### Service Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
gobuster dir -u http://10.50.172.121/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.26.103.14/FUZZ
crackmapexec smb 10.126.88.214 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

### Web Enumeration

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
```

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

Key finding: **Broken Access Control**.

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Initial Access

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

```bash
gobuster dir -u http://10.108.71.37/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.63.218.45 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.76.253.70/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p1521,443,587 10.99.119.197 -oN scan.txt
```

Unconstrained delegation was enabled on the compromised machine. Command injection was possible through unsanitized user input in the search functionality. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.37.159.149/FUZZ
gobuster dir -u http://10.43.125.54/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.26.170.19 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.43.247.158 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.14.233 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.129.59.154/FUZZ
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `chisel`
- `sharphound`
- `sqlmap`
- `ldapsearch`

### Key Takeaways

- Broken Access Control
- Pass the Hash
