---
TitleSEO: "PwnTillDawn — Doctor (Easy OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Doctor (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Doctor. Cron Job and Open Redirect to achieve easy compromise on OpenBSD."
Keywords: "linux, offsec, pwntilldawn, active directory, easy, insane, hard"
URL: "https://zurefx.github.io/writeups/htb-doctor-990.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-doctor-990/"
Date: "2025-03-25"
Tags: "Linux, OffSec, PwnTillDawn, Active Directory, Easy, Insane, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-doctor-990"
Permalink: "/writeups/htb-doctor-990.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Doctor** is rated **Easy** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.26.91.236`.

### Objectives

The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.125.32.208 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

### Service Enumeration

The database credentials were hardcoded in the application source code. Command injection was possible through unsanitized user input in the search functionality. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
impacket-secretsdump administrator:'P@ssw0rd!'@10.107.59.157
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. Token impersonation allowed elevation to SYSTEM privileges on the target.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.189.245/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Open Redirect**.

The service account had excessive permissions assigned in Active Directory. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Command injection was possible through unsanitized user input in the search functionality.

```bash
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.123.50.166/FUZZ
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.121.173.230 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```powershell
crackmapexec smb 10.59.114.153 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
evil-winrm -i 10.45.78.170 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.71.146.176/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine.

## Summary

### Tools Used

- `sharphound`
- `dcomexec`
- `evil-winrm`
- `nmap`
- `bloodhound`
- `impacket`
- `wmiexec`

### Key Takeaways

- Cron Job
- Open Redirect
- SSRF
