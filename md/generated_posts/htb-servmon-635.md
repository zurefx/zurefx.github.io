---
TitleSEO: "TryHackMe — ServMon (Medium OpenBSD) | ZureFX"
TitlePost: "TryHackMe — ServMon (Medium OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe ServMon. Open Redirect and SQL Injection to achieve medium compromise on OpenBSD."
Keywords: "reversing, offsec, hard, linux, pwntilldawn, forensics"
URL: "https://zurefx.github.io/writeups/htb-servmon-635.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-635/"
Date: "2025-09-29"
Tags: "Reversing, OffSec, Hard, Linux, PwnTillDawn, Forensics"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-635"
Permalink: "/writeups/htb-servmon-635.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ServMon** is rated **Medium** on TryHackMe. It runs **OpenBSD** and the IP address during this analysis was `10.125.4.110`.

### Objectives

The service was running without proper input validation, leading to injection vulnerabilities. The service account had excessive permissions assigned in Active Directory.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.123.243
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.85.194.223/FUZZ
evil-winrm -i 10.57.247.32 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service account had excessive permissions assigned in Active Directory. The backup files contained sensitive information that should not have been accessible.

```bash
gobuster dir -u http://10.16.154.5/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.105.217.201 -u administrator -p 'P@ssw0rd!' --shares
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### SMB Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
evil-winrm -i 10.41.167.16 -u administrator -p 'P@ssw0rd!'
gobuster dir -u http://10.109.235.161/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Token impersonation allowed elevation to SYSTEM privileges on the target. The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI).

Key finding: **Open Redirect**.

Post-exploitation enumeration revealed a path to domain administrator privileges. The kernel version was outdated and vulnerable to a publicly known exploit.

### Initial Access

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.27.226.122 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
nmap -sCV -p443,80,110 10.73.91.123 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.125.28.73
```

The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible. Lateral movement was facilitated by reusing discovered credentials across services.

## Privilege Escalation

### Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Unconstrained delegation was enabled on the compromised machine. Authentication bypass was achieved through careful manipulation of the login mechanism.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.18.115.149
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

### Exploitation

Group Policy Preferences contained encrypted but recoverable credentials. Lateral movement was facilitated by reusing discovered credentials across services.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.112.195.172
```

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `socat`
- `rubeus`
- `metasploit`
- `smbclient`
- `ligolo-ng`
- `nmap`

### Key Takeaways

- Open Redirect
- SQL Injection
- Pass the Hash
