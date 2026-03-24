---
TitleSEO: "PwnTillDawn — Alfred (Easy Windows) | ZureFX"
TitlePost: "PwnTillDawn — Alfred (Easy Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Alfred. ACL Abuse and AlwaysInstallElevated to achieve easy compromise on Windows."
Keywords: "insane, web, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-alfred-227.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-227/"
Date: "2024-09-25"
Tags: "Insane, Web, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-227"
Permalink: "/writeups/htb-alfred-227.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Easy** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.66.151.186`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.106.97.104 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.117.205.243/FUZZ
evil-winrm -i 10.35.168.60 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

```bash
nmap -sCV -p9200,80,139 10.46.234.204 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.80.172.211 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **ACL Abuse**.

Weak file permissions allowed modification of critical system files. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
crackmapexec smb 10.99.101.134 -u administrator -p 'P@ssw0rd!' --shares
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

```powershell
gobuster dir -u http://10.128.13.221/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.75.69/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

### Exploitation

Network traffic analysis revealed unencrypted communications containing user credentials. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `ffuf`
- `smbexec`
- `pwncat`
- `enum4linux`
- `rubeus`
- `feroxbuster`

### Key Takeaways

- ACL Abuse
- AlwaysInstallElevated
- Sudo Misconfiguration
