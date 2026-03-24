---
TitleSEO: "VulnHub — Knife (Insane Linux) | ZureFX"
TitlePost: "VulnHub — Knife (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Knife. Pass the Hash and Kerberoasting to achieve insane compromise on Linux."
Keywords: "active directory, forensics, offsec, insane, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-knife-467.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-knife-467/"
Date: "2025-09-03"
Tags: "Active Directory, Forensics, OffSec, Insane, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-knife-467"
Permalink: "/writeups/htb-knife-467.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Knife** is rated **Insane** on VulnHub. It runs **Linux** and the IP address during this analysis was `10.127.167.248`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
gobuster dir -u http://10.116.181.153/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
gobuster dir -u http://10.93.45.109/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.75.233.91 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,53,53 10.74.159.145 -oN scan.txt
evil-winrm -i 10.106.219.145 -u administrator -p 'P@ssw0rd!'
```

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Command injection was possible through unsanitized user input in the search functionality. Post-exploitation enumeration revealed a path to domain administrator privileges.

Key finding: **Broken Access Control**.

The kernel version was outdated and vulnerable to a publicly known exploit. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.105.146.176 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit. The scheduled task ran with elevated privileges and could be abused for escalation.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Unconstrained delegation was enabled on the compromised machine.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.39.41.125 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.39.8.148/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.51.103.186/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.98.229.217/FUZZ
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```bash
evil-winrm -i 10.129.240.253 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.40.79.72/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.44.141.40 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The backup files contained sensitive information that should not have been accessible.

## Summary

### Tools Used

- `atexec`
- `smbclient`
- `lookupsid`
- `rubeus`
- `GetNPUsers`

### Key Takeaways

- Pass the Hash
- Kerberoasting
- Command Injection
- Broken Access Control
