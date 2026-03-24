---
TitleSEO: "HackTheBox — Nineveh (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Nineveh (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Nineveh. Cron Job and SQL Injection to achieve insane compromise on FreeBSD."
Keywords: "linux, web, ctf, forensics, active directory, pwntilldawn, hard"
URL: "https://zurefx.github.io/writeups/htb-nineveh-389.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-nineveh-389/"
Date: "2025-01-05"
Tags: "Linux, Web, CTF, Forensics, Active Directory, PwnTillDawn, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-nineveh-389"
Permalink: "/writeups/htb-nineveh-389.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Nineveh** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.129.102.73`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.70.132.87/FUZZ
```

Unconstrained delegation was enabled on the compromised machine. Privilege escalation was possible due to misconfigured sudo permissions.

### Service Enumeration

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.73.154.204 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.79.228.91 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

### Web Enumeration

The target system was identified as running a vulnerable version of the service. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
feroxbuster -h
```

Group Policy Preferences contained encrypted but recoverable credentials. The backup files contained sensitive information that should not have been accessible. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service.

Key finding: **Cron Job**.

The service account had excessive permissions assigned in Active Directory. The service was running without proper input validation, leading to injection vulnerabilities.

### Initial Access

The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.105.237.78/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.101.158.22 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory.

## Privilege Escalation

### Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```powershell
gobuster dir -u http://10.127.239.250/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.157.161 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.101.239.194
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
nmap -sCV -p135,8443,1521 10.128.224.77 -oN scan.txt
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.106.79.40/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Network traffic analysis revealed unencrypted communications containing user credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The service account had excessive permissions assigned in Active Directory. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `gobuster`
- `john`
- `metasploit`
- `wmiexec`
- `impacket`
- `chisel`
- `hydra`
- `hashcat`

### Key Takeaways

- Cron Job
- SQL Injection
