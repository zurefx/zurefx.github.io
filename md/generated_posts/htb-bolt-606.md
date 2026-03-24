---
TitleSEO: "TryHackMe — Bolt (Easy Linux) | ZureFX"
TitlePost: "TryHackMe — Bolt (Easy Linux)"
Author: "ZureFX"
Description: "Full writeup for TryHackMe Bolt. Weak Service Permissions and Docker Escape to achieve easy compromise on Linux."
Keywords: "windows, insane, tryhackme"
URL: "https://zurefx.github.io/writeups/htb-bolt-606.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-bolt-606/"
Date: "2024-07-27"
Tags: "Windows, Insane, TryHackMe"
Section: "writeups"
Lang: "en"
main_img: "htb-bolt-606"
Permalink: "/writeups/htb-bolt-606.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Bolt** is rated **Easy** on TryHackMe. It runs **Linux** and the IP address during this analysis was `10.86.172.27`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Token impersonation allowed elevation to SYSTEM privileges on the target.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p3306,8888,27017 10.55.231.151 -oN scan.txt
```

The scheduled task ran with elevated privileges and could be abused for escalation. Weak file permissions allowed modification of critical system files.

### Service Enumeration

The scheduled task ran with elevated privileges and could be abused for escalation. The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```bash
crackmapexec smb 10.70.80.233 -u administrator -p 'P@ssw0rd!' --shares
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. The backup files contained sensitive information that should not have been accessible.

```bash
crackmapexec smb 10.120.220.198 -u administrator -p 'P@ssw0rd!' --shares
gobuster dir -u http://10.76.207.188/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
impacket-secretsdump administrator:'P@ssw0rd!'@10.53.217.145
crackmapexec smb 10.21.91.119 -u administrator -p 'P@ssw0rd!' --shares
```

The service account had excessive permissions assigned in Active Directory. Post-exploitation enumeration revealed a path to domain administrator privileges. Authentication bypass was achieved through careful manipulation of the login mechanism.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **IDOR**.

The web application was vulnerable to Server-Side Template Injection (SSTI). Authentication bypass was achieved through careful manipulation of the login mechanism.

### Initial Access

The database credentials were hardcoded in the application source code. The service was running without proper input validation, leading to injection vulnerabilities.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.90.96.28/FUZZ
nmap -sCV -p5432,389,636 10.118.169.86 -oN scan.txt
evil-winrm -i 10.43.199.223 -u administrator -p 'P@ssw0rd!'
```

Authentication bypass was achieved through careful manipulation of the login mechanism. The web application was vulnerable to Server-Side Template Injection (SSTI). Post-exploitation enumeration revealed a path to domain administrator privileges.

## Privilege Escalation

### Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Group Policy Preferences contained encrypted but recoverable credentials. The database credentials were hardcoded in the application source code.

```bash
feroxbuster -h
```

### Exploitation

Authentication bypass was achieved through careful manipulation of the login mechanism. Group Policy Preferences contained encrypted but recoverable credentials.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
crackmapexec smb 10.45.56.148 -u administrator -p 'P@ssw0rd!' --shares
evil-winrm -i 10.93.149.7 -u administrator -p 'P@ssw0rd!'
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.71.161.235 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files.

### Root/SYSTEM

Successfully obtained **root** access on the target.

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service.

## Summary

### Tools Used

- `rpcclient`
- `wmiexec`
- `smbclient`
- `pwncat`
- `dcomexec`
- `burpsuite`

### Key Takeaways

- Weak Service Permissions
- Docker Escape
- IDOR
