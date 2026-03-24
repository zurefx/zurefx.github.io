---
TitleSEO: "OffSec Proving Grounds — Spectra (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Spectra (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Spectra. AlwaysInstallElevated and SUID Binary to achieve easy compromise on OpenBSD."
Keywords: "reversing, tryhackme, easy, insane, windows"
URL: "https://zurefx.github.io/writeups/htb-spectra-687.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-spectra-687/"
Date: "2024-03-20"
Tags: "Reversing, TryHackMe, Easy, Insane, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-spectra-687"
Permalink: "/writeups/htb-spectra-687.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Spectra** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.118.34.220`.

### Objectives

Unconstrained delegation was enabled on the compromised machine. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.11.188.143
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The database credentials were hardcoded in the application source code.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.57.9.222
nmap -sCV -p143,80,110 10.13.246.55 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **AlwaysInstallElevated**.

The service account had excessive permissions assigned in Active Directory. The database credentials were hardcoded in the application source code.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The application stored sensitive credentials in an unencrypted configuration file. The application stored sensitive credentials in an unencrypted configuration file.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.98.96.72 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.18.213.71/FUZZ
nmap -sCV -p27017,587,139 10.90.207.160 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.48.163.51/FUZZ
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.117.79.78 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.184.242 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `gobuster`
- `john`
- `wpscan`
- `chisel`
- `impacket`
- `ldapsearch`
- `lookupsid`
- `sqlmap`

### Key Takeaways

- AlwaysInstallElevated
- SUID Binary
