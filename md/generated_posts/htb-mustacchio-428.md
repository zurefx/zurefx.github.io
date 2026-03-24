---
TitleSEO: "TryHackMe — Mustacchio (Medium Windows) | ZureFX"
TitlePost: "TryHackMe — Mustacchio (Medium Windows)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Mustacchio. Pass the Hash and Broken Access Control to achieve medium compromise on Windows."
Keywords: "pwntilldawn, forensics, linux"
URL: "https://zurefx.github.io/writeups/htb-mustacchio-428.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mustacchio-428/"
Date: "2025-11-21"
Tags: "PwnTillDawn, Forensics, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-mustacchio-428"
Permalink: "/writeups/htb-mustacchio-428.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Mustacchio** is rated **Medium** on TryHackMe. It runs **Windows** and the IP address during this analysis was `10.58.10.4`.

### Objectives

The database credentials were hardcoded in the application source code. The application stored sensitive credentials in an unencrypted configuration file.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.44.33.245/FUZZ
crackmapexec smb 10.40.137.181 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.100.90.199 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p464,5432,3389 10.88.120.166 -oN scan.txt
```

The service was running without proper input validation, leading to injection vulnerabilities. Unconstrained delegation was enabled on the compromised machine.

### Service Enumeration

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

### SMB Enumeration

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.23.111.2
crackmapexec smb 10.72.3.31 -u administrator -p 'P@ssw0rd!' --shares
```

The application stored sensitive credentials in an unencrypted configuration file. The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Exploitation

### Vulnerability Identification

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

Key finding: **Pass the Hash**.

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.50.12.122
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.59.45.180/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.125.38.58/FUZZ
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```powershell
crackmapexec smb 10.89.66.94 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.12.77.92/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.129.114/FUZZ
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
evil-winrm -i 10.45.227.187 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p464,3268,139 10.66.172.171 -oN scan.txt
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Unconstrained delegation was enabled on the compromised machine.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The database credentials were hardcoded in the application source code. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Summary

### Tools Used

- `feroxbuster`
- `chisel`
- `socat`
- `hashcat`
- `ffuf`
- `rpcclient`

### Key Takeaways

- Pass the Hash
- Broken Access Control
