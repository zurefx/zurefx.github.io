---
TitleSEO: "HackTheBox — Love (Hard Linux) | ZureFX"
TitlePost: "HackTheBox — Love (Hard Linux)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Love. LXD Privilege Escalation and Local File Inclusion to achieve hard compromise on Linux."
Keywords: "easy, ctf, reversing, medium, hard, windows, hackthebox"
URL: "https://zurefx.github.io/writeups/htb-love-441.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-love-441/"
Date: "2024-11-15"
Tags: "Easy, CTF, Reversing, Medium, Hard, Windows, HackTheBox"
Section: "writeups"
Lang: "en"
main_img: "htb-love-441"
Permalink: "/writeups/htb-love-441.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Love** is rated **Hard** on HackTheBox. It runs **Linux** and the IP address during this analysis was `10.50.38.6`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The target system was identified as running a vulnerable version of the service.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.25.101.119 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.78.179.116/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.62.219.158
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.38.69.98/FUZZ
```

The scheduled task ran with elevated privileges and could be abused for escalation. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Service Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p27017,8443,995 10.103.91.217 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.28.77.204
evil-winrm -i 10.31.38.192 -u administrator -p 'P@ssw0rd!'
```

Command injection was possible through unsanitized user input in the search functionality. Group Policy Preferences contained encrypted but recoverable credentials.

### SMB Enumeration

The application stored sensitive credentials in an unencrypted configuration file. The backup files contained sensitive information that should not have been accessible.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.55.83.76 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **LXD Privilege Escalation**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.97.34.86
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The service account had excessive permissions assigned in Active Directory. The application stored sensitive credentials in an unencrypted configuration file.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.79.201.29 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.14.92.143/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
```

### Exploitation

Privilege escalation was possible due to misconfigured sudo permissions. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
crackmapexec smb 10.55.254.111 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.97.72.223/FUZZ
```

The target system was identified as running a vulnerable version of the service. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. Network traffic analysis revealed unencrypted communications containing user credentials.

## Summary

### Tools Used

- `rpcclient`
- `smbclient`
- `impacket`
- `nikto`

### Key Takeaways

- LXD Privilege Escalation
- Local File Inclusion
- Insecure Deserialization
- Docker Escape
