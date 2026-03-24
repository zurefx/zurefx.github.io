---
TitleSEO: "VulnHub — Pit (Medium FreeBSD) | ZureFX"
TitlePost: "VulnHub — Pit (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Pit. Docker Escape and GPP Password to achieve medium compromise on FreeBSD."
Keywords: "hard, tryhackme, linux, ctf"
URL: "https://zurefx.github.io/writeups/htb-pit-726.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-pit-726/"
Date: "2024-07-30"
Tags: "Hard, TryHackMe, Linux, CTF"
Section: "writeups"
Lang: "en"
main_img: "htb-pit-726"
Permalink: "/writeups/htb-pit-726.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Pit** is rated **Medium** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.54.235.254`.

### Objectives

The scheduled task ran with elevated privileges and could be abused for escalation. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.110.217.44/FUZZ
evil-winrm -i 10.121.113.141 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Authentication bypass was achieved through careful manipulation of the login mechanism. Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.125.77.166/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Group Policy Preferences contained encrypted but recoverable credentials. Privilege escalation was possible due to misconfigured sudo permissions.

### SMB Enumeration

The backup files contained sensitive information that should not have been accessible. The application stored sensitive credentials in an unencrypted configuration file.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.159.24 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.24.147.217 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p110,1521,27017 10.34.31.76 -oN scan.txt
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Unconstrained delegation was enabled on the compromised machine.

Key finding: **GPP Password**.

The kernel version was outdated and vulnerable to a publicly known exploit. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
nmap -sCV -p636,3268,1433 10.129.38.45 -oN scan.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
nmap -sCV -p993,25,3268 10.16.128.44 -oN scan.txt
```

### Exploitation

Weak file permissions allowed modification of critical system files. The web application was vulnerable to Server-Side Template Injection (SSTI).

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.54.228.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
nmap -sCV -p3306,445,22 10.121.111.111 -oN scan.txt
```

Command injection was possible through unsanitized user input in the search functionality. Initial enumeration revealed several interesting open ports on the target.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The target system was identified as running a vulnerable version of the service. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `smbexec`
- `crackmapexec`
- `dcomexec`
- `john`
- `socat`
- `atexec`
- `netcat`

### Key Takeaways

- Docker Escape
- GPP Password
