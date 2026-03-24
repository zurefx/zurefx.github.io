---
TitleSEO: "PwnTillDawn — Mindgames (Medium Linux) | ZureFX"
TitlePost: "PwnTillDawn — Mindgames (Medium Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Mindgames. SSRF and Weak Service Permissions to achieve medium compromise on Linux."
Keywords: "windows, forensics, linux, offsec, medium, easy, hard"
URL: "https://zurefx.github.io/writeups/htb-mindgames-625.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-mindgames-625/"
Date: "2025-07-15"
Tags: "Windows, Forensics, Linux, OffSec, Medium, Easy, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-mindgames-625"
Permalink: "/writeups/htb-mindgames-625.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Mindgames** is rated **Medium** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.104.35.15`.

### Objectives

Command injection was possible through unsanitized user input in the search functionality. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.120.131.28 -u administrator -p 'P@ssw0rd!' --shares
```

Command injection was possible through unsanitized user input in the search functionality. The scheduled task ran with elevated privileges and could be abused for escalation.

### Service Enumeration

Initial enumeration revealed several interesting open ports on the target. Post-exploitation enumeration revealed a path to domain administrator privileges. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p80,8888,110 10.59.198.27 -oN scan.txt
```

The kernel version was outdated and vulnerable to a publicly known exploit. Command injection was possible through unsanitized user input in the search functionality.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
evil-winrm -i 10.26.18.183 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Privilege escalation was possible due to misconfigured sudo permissions. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Exploitation

### Vulnerability Identification

The web application was vulnerable to Server-Side Template Injection (SSTI). The web application was vulnerable to Server-Side Template Injection (SSTI). Token impersonation allowed elevation to SYSTEM privileges on the target.

Key finding: **Weak Service Permissions**.

Command injection was possible through unsanitized user input in the search functionality. The application stored sensitive credentials in an unencrypted configuration file.

### Initial Access

Authentication bypass was achieved through careful manipulation of the login mechanism. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.73.18.3 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
nmap -sCV -p445,110,1521 10.27.116.87 -oN scan.txt
nmap -sCV -p464,5986,464 10.38.121.199 -oN scan.txt
```

The database credentials were hardcoded in the application source code. The web application was vulnerable to Server-Side Template Injection (SSTI). The backup files contained sensitive information that should not have been accessible.

## Privilege Escalation

### Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
gobuster dir -u http://10.29.220.119/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.65.75.4 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

### Exploitation

Initial enumeration revealed several interesting open ports on the target. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.15.90.249
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.67.120.76 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Authentication bypass was achieved through careful manipulation of the login mechanism.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Unconstrained delegation was enabled on the compromised machine. Weak file permissions allowed modification of critical system files.

## Summary

### Tools Used

- `secretsdump`
- `bloodhound`
- `chisel`
- `pwncat`

### Key Takeaways

- SSRF
- Weak Service Permissions
- Sudo Misconfiguration
- SeDebugPrivilege
