---
TitleSEO: "HackTheBox — Tenet (Insane FreeBSD) | ZureFX"
TitlePost: "HackTheBox — Tenet (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Tenet. CORS Misconfiguration and Path Traversal to achieve insane compromise on FreeBSD."
Keywords: "forensics, pwntilldawn, active directory, tryhackme, easy"
URL: "https://zurefx.github.io/writeups/htb-tenet-939.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-tenet-939/"
Date: "2024-01-01"
Tags: "Forensics, PwnTillDawn, Active Directory, TryHackMe, Easy"
Section: "writeups"
Lang: "en"
main_img: "htb-tenet-939"
Permalink: "/writeups/htb-tenet-939.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Tenet** is rated **Insane** on HackTheBox. It runs **FreeBSD** and the IP address during this analysis was `10.56.29.177`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p139,5432,139 10.14.186.240 -oN scan.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.50.102.236 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.130.190/FUZZ
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.64.5.193
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **CORS Misconfiguration**.

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The service was running without proper input validation, leading to injection vulnerabilities. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Unconstrained delegation was enabled on the compromised machine. The service was running without proper input validation, leading to injection vulnerabilities. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
nmap -sCV -p3268,464,1433 10.118.105.144 -oN scan.txt
feroxbuster -h
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.10.212.147/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.73.31.37
nmap -sCV -p135,9200,9200 10.80.83.208 -oN scan.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `sharphound`
- `psexec`
- `nikto`
- `wmiexec`
- `mimikatz`
- `ffuf`
- `feroxbuster`
- `hashcat`

### Key Takeaways

- CORS Misconfiguration
- Path Traversal
