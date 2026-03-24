---
TitleSEO: "PwnTillDawn — Breadcrumbs (Easy Linux) | ZureFX"
TitlePost: "PwnTillDawn — Breadcrumbs (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Breadcrumbs. Kerberoasting and GPP Password to achieve easy compromise on Linux."
Keywords: "reversing, tryhackme, linux, pwntilldawn"
URL: "https://zurefx.github.io/writeups/htb-breadcrumbs-267.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-breadcrumbs-267/"
Date: "2025-11-27"
Tags: "Reversing, TryHackMe, Linux, PwnTillDawn"
Section: "writeups"
Lang: "en"
main_img: "htb-breadcrumbs-267"
Permalink: "/writeups/htb-breadcrumbs-267.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Breadcrumbs** is rated **Easy** on PwnTillDawn. It runs **Linux** and the IP address during this analysis was `10.24.224.36`.

### Objectives

The backup files contained sensitive information that should not have been accessible. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.19.222.16 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.22.153.78
```

Lateral movement was facilitated by reusing discovered credentials across services. The database credentials were hardcoded in the application source code.

### Service Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Post-exploitation enumeration revealed a path to domain administrator privileges. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.118.20.163 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

### SMB Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.20.68.120 -u administrator -p 'P@ssw0rd!'
crackmapexec smb 10.86.81.34 -u administrator -p 'P@ssw0rd!' --shares
```

Lateral movement was facilitated by reusing discovered credentials across services. The scheduled task ran with elevated privileges and could be abused for escalation. The service was running without proper input validation, leading to injection vulnerabilities.

## Exploitation

### Vulnerability Identification

The kernel version was outdated and vulnerable to a publicly known exploit. Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target.

Key finding: **GPP Password**.

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Initial Access

Token impersonation allowed elevation to SYSTEM privileges on the target. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
crackmapexec smb 10.14.217.163 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.127.105.30/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
```

Network traffic analysis revealed unencrypted communications containing user credentials. The web application was vulnerable to Server-Side Template Injection (SSTI). The service was running without proper input validation, leading to injection vulnerabilities.

## Privilege Escalation

### Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.100.224.145 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
impacket-secretsdump administrator:'P@ssw0rd!'@10.42.97.77
```

### Exploitation

The service was running without proper input validation, leading to injection vulnerabilities. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
nmap -sCV -p8080,53,636 10.13.224.254 -oN scan.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.65.129.137
```

The web application was vulnerable to Server-Side Template Injection (SSTI). Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Post-exploitation enumeration revealed a path to domain administrator privileges. Command injection was possible through unsanitized user input in the search functionality.

## Summary

### Tools Used

- `atexec`
- `ldapsearch`
- `sharphound`
- `GetUserSPNs`

### Key Takeaways

- Kerberoasting
- GPP Password
