---
TitleSEO: "TryHackMe — Passage (Medium FreeBSD) | ZureFX"
TitlePost: "TryHackMe — Passage (Medium FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Passage. AlwaysInstallElevated and LXD Privilege Escalation to achieve medium compromise on FreeBSD."
Keywords: "easy, pwntilldawn, hackthebox, linux"
URL: "https://zurefx.github.io/writeups/htb-passage-407.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-passage-407/"
Date: "2024-04-12"
Tags: "Easy, PwnTillDawn, HackTheBox, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-passage-407"
Permalink: "/writeups/htb-passage-407.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Passage** is rated **Medium** on TryHackMe. It runs **FreeBSD** and the IP address during this analysis was `10.25.158.80`.

### Objectives

Lateral movement was facilitated by reusing discovered credentials across services. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.33.129.76/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

The kernel version was outdated and vulnerable to a publicly known exploit. Network traffic analysis revealed unencrypted communications containing user credentials.

### Service Enumeration

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism. The service account had excessive permissions assigned in Active Directory.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.93.56.136 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.114.48.101 -u administrator -p 'P@ssw0rd!'
```

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
crackmapexec smb 10.124.81.62 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.39.127.152
```

Weak file permissions allowed modification of critical system files. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

Network traffic analysis revealed unencrypted communications containing user credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

Key finding: **Pass the Hash**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The kernel version was outdated and vulnerable to a publicly known exploit. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.83.179.74 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI).

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
gobuster dir -u http://10.118.6.253/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
feroxbuster -h
feroxbuster -h
```

### Exploitation

The web application was vulnerable to Server-Side Template Injection (SSTI). The target system was identified as running a vulnerable version of the service.

```powershell
gobuster dir -u http://10.111.29.47/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.15.22.247 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.109.11.92
```

The backup files contained sensitive information that should not have been accessible. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Privilege escalation was possible due to misconfigured sudo permissions. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `wpscan`
- `ffuf`
- `secretsdump`
- `nikto`

### Key Takeaways

- AlwaysInstallElevated
- LXD Privilege Escalation
- Pass the Hash
