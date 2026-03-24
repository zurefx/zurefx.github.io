---
TitleSEO: "OffSec Proving Grounds — ServMon (Easy OpenBSD) | ZureFX"
TitlePost: "OffSec Proving Grounds — ServMon (Easy OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds ServMon. Pass the Hash and Subdomain Takeover to achieve easy compromise on OpenBSD."
Keywords: "insane, web, hard, reversing"
URL: "https://zurefx.github.io/writeups/htb-servmon-784.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-servmon-784/"
Date: "2025-07-14"
Tags: "Insane, Web, Hard, Reversing"
Section: "writeups"
Lang: "en"
main_img: "htb-servmon-784"
Permalink: "/writeups/htb-servmon-784.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **ServMon** is rated **Easy** on OffSec Proving Grounds. It runs **OpenBSD** and the IP address during this analysis was `10.82.123.100`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.38.136.71/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.64.134.48/FUZZ
gobuster dir -u http://10.103.70.223/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The target system was identified as running a vulnerable version of the service. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Service Enumeration

Weak file permissions allowed modification of critical system files. The target system was identified as running a vulnerable version of the service. Weak file permissions allowed modification of critical system files.

```bash
crackmapexec smb 10.99.152.130 -u administrator -p 'P@ssw0rd!' --shares
```

The kernel version was outdated and vulnerable to a publicly known exploit. The database credentials were hardcoded in the application source code.

### Web Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
gobuster dir -u http://10.19.45.36/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The scheduled task ran with elevated privileges and could be abused for escalation. Post-exploitation enumeration revealed a path to domain administrator privileges. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Exploitation

### Vulnerability Identification

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

Key finding: **Subdomain Takeover**.

Initial enumeration revealed several interesting open ports on the target. The scheduled task ran with elevated privileges and could be abused for escalation.

### Initial Access

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

```bash
evil-winrm -i 10.118.155.7 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.33.208.104 -u administrator -p 'P@ssw0rd!' --shares
```

Weak file permissions allowed modification of critical system files. Lateral movement was facilitated by reusing discovered credentials across services. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

The backup files contained sensitive information that should not have been accessible. Network traffic analysis revealed unencrypted communications containing user credentials. The backup files contained sensitive information that should not have been accessible.

```powershell
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.72.108.13/FUZZ
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```powershell
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.124.198
evil-winrm -i 10.85.124.245 -u administrator -p 'P@ssw0rd!'
```

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Authentication bypass was achieved through careful manipulation of the login mechanism. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Summary

### Tools Used

- `ffuf`
- `nmap`
- `psexec`
- `secretsdump`
- `rpcclient`
- `ligolo-ng`
- `feroxbuster`

### Key Takeaways

- Pass the Hash
- Subdomain Takeover
