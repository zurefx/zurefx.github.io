---
TitleSEO: "OffSec Proving Grounds — Node (Insane FreeBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — Node (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds Node. SUID Binary and Sudo Misconfiguration to achieve insane compromise on FreeBSD."
Keywords: "linux, forensics, hard, easy, ctf, web"
URL: "https://zurefx.github.io/writeups/htb-node-476.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-node-476/"
Date: "2025-04-27"
Tags: "Linux, Forensics, Hard, Easy, CTF, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-node-476"
Permalink: "/writeups/htb-node-476.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Node** is rated **Insane** on OffSec Proving Grounds. It runs **FreeBSD** and the IP address during this analysis was `10.77.84.204`.

### Objectives

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.40.98.254 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.114.87.58
feroxbuster -h
```

Unconstrained delegation was enabled on the compromised machine. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Privilege escalation was possible due to misconfigured sudo permissions. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
nmap -sCV -p9200,110,1433 10.126.219.216 -oN scan.txt
crackmapexec smb 10.113.176.236 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.53.69.201/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

### Web Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
feroxbuster -h
evil-winrm -i 10.68.26.121 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Weak file permissions allowed modification of critical system files. The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The target system was identified as running a vulnerable version of the service. The database credentials were hardcoded in the application source code. The kernel version was outdated and vulnerable to a publicly known exploit.

Key finding: **AS-REP Roasting**.

The application stored sensitive credentials in an unencrypted configuration file. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

Unconstrained delegation was enabled on the compromised machine. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
crackmapexec smb 10.32.79.134 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality. The service was running without proper input validation, leading to injection vulnerabilities.

```powershell
feroxbuster -h
```

### Exploitation

Weak file permissions allowed modification of critical system files. The scheduled task ran with elevated privileges and could be abused for escalation.

```powershell
nmap -sCV -p5432,3306,139 10.118.126.161 -oN scan.txt
feroxbuster -h
```

The application stored sensitive credentials in an unencrypted configuration file. Command injection was possible through unsanitized user input in the search functionality.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `ldapsearch`
- `smbclient`
- `feroxbuster`
- `nikto`
- `evil-winrm`
- `lookupsid`
- `pwncat`
- `secretsdump`

### Key Takeaways

- SUID Binary
- Sudo Misconfiguration
- AS-REP Roasting
